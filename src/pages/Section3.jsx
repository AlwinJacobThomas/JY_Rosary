import React, { useEffect, useState } from 'react'
import Map from '../Components/map/Map'
import firebase from './../firebase/config';

const Section3 = () => {
  const token = 'LkzihpaHgcVJvsnHfgzg';
  const [rosaryData, setRosaryData] = useState([]);
  // Create a reference to the 'rosary' collection
  const rosaryCollection = firebase.firestore().collection('rosary');
  
  const fetchRosaryData = async () => {
    try {
      const snapshot = await rosaryCollection.get();
      const data = snapshot.docs.map((doc) => doc.data());
      setRosaryData(data);
    } catch (error) {
      console.error('Error fetching rosaries:', error);
    }
  };

  useEffect(() => {
    fetchRosaryData();
  }, []);
  
  return (
    <div className="section3" id='map'>
      <div className="title">
        <h1>Rosary Map</h1>
        <h3>See where the rosary is right now!</h3>
      </div>

      <Map rosaryData={rosaryData} />
    </div>
  )
}

export default Section3
