import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Nav from './../Components/Nav';
import firebase from './../firebase/config';


const Updation = () => {
    const navigate = useNavigate();
    const [rosary, setRosary] = useState(null)
    const { token } = useParams()
    const [formData, setFormData] = useState({ names: '', decades: '' });
    const [currentLocation, setCurrentLocation] = useState(null)
    useEffect(() => {
        const successCallback = (position) => {
            setCurrentLocation({
                lat: position.coords.latitude,
                long: position.coords.longitude
            });
        };

        const errorCallback = (error) => {
            console.error('Error getting geolocation:', error);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    const fetchRosaryData = async () => {
        try {
            if (token) {
                const snapshot = await firebase.firestore().collection('rosary').doc(token).get();
                const rosaryData = snapshot.data();

                setRosary(rosaryData);
                console.log(rosaryData);
            } else {
                console.log('Token is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const updatePrayer = async () => {
        try {
            if (token) {

                // Ensure formData.decades is a number (convert to integer)
                const decadesToAdd = parseInt(formData.decades, 10);

                if (isNaN(decadesToAdd)) {
                    console.error("Invalid decades value");
                    return;
                }
                // Check if geolocation is available
                const locationAvailable = currentLocation !== null;
                // Update users array in the document
                const updatedUsers = [...rosary.users, { names: formData.names, decades: decadesToAdd }];

                // Calculate the new decades value
                const newDecades = rosary.decades + decadesToAdd;

                // Append the user's location to the locations array
                //const updatedLocations = [...rosary.locations, { latitude: currentLocation.lat, longitude: currentLocation.long }];
                //-----------------------
                // Fetch the default location from Firestore
                const defaultLocationSnapshot = await firebase.firestore()
                    .collection('rosary').doc(token).get();
                const defaultLocation = defaultLocationSnapshot.data().defaultLocation;

                // Append the user's location to the locations array if available
                const updatedLocations = locationAvailable
                    ? [...rosary.locations, { latitude: currentLocation.lat, longitude: currentLocation.long }]
                    : [...rosary.locations];

                // If geolocation is not available, update with default location
                if (!locationAvailable) {
                    updatedLocations.push(defaultLocation);
                    console.log("----------" + updatedLocations)
                }

                // Update the document
                await firebase.firestore().collection('rosary').doc(token).update({
                    'users': updatedUsers,
                    'decades': newDecades,
                    'locations': updatedLocations,
                });

                // Fetch updated data
                await fetchRosaryData();

                navigate("/");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };


    useEffect(() => {
        fetchRosaryData();
    }, [token]);

    return (
        <div className="updation-container">
            <Nav />

            <div className="form">
                <h1 className='form-title'>Rosary Update</h1>
                <div className="data">
                    {rosary ? (
                        <>
                            <h2 className='data-value'>Rosary Name: <span>{rosary.name}</span></h2>
                            <h2 className='data-value'>Zone: <span>{rosary.zone}</span></h2>
                            {/* <h2 className='data-value'>Decades: <span>{rosary.decades}</span></h2> */}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div >
                <div className="form-section">
                    <label htmlFor="names" className='label' >Enter your name :</label>
                    <input className='input' type="text" id="names" placeholder="John Thomas" onChange={handleInputChange} />
                    <label htmlFor="decades" className='label'>Number of decades prayed :</label>
                    <input className='input' placeholder='0' type="number" id="decades" onChange={handleInputChange} />
                    {/* <h3>{currentLocation.lat}--{currentLocation.long}</h3> */}
                    <p className="note">* Allow location for locating the rosary in the map!</p>
                    <button className="btn" onClick={updatePrayer}>Update Prayer</button>

                </div>
            </div>

        </div>
    );
}

export default Updation;