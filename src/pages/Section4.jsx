import React, { useEffect, useState } from 'react'

// import { useParams } from 'react-router-dom';
import Map from '../Components/map/Map'
import MapFinal from '../Components/map/Map'
import firebase from './../firebase/config';


const Section4 = () => {
  // const { token } = useParams();
  const token = 'LkzihpaHgcVJvsnHfgzg';
  const [rosaryData, setRosaryData] = useState([]);
  // Create a reference to the 'rosary' collection
  const rosaryCollection = firebase.firestore().collection('rosary');


  const fetchRosaryData = async () => {
    try {
      const snapshot = await rosaryCollection.orderBy('name').get();
      const data = snapshot.docs.map((doc) => doc.data());
      setRosaryData(data);
    } catch (error) {
      console.error('Error fetching rosaries:', error);
    }
  };

  // useEffect(() => {
  //   fetchRosaryData();
  // }, []);
  const fillTable = () => {
    return rosaryData.map((rosary, index) => (
      <div className="table-row" key={`row-${index}`}>
        <p className='table-value value-zone'>{rosary.zone}</p>
        <p className='table-value value-name'>{rosary.name}</p>
        <p className='table-value value-count'>{rosary.decades}</p>
      </div>
    ));
  };


  return (
    <div className="section4">
      <div className="title">
        <h1>Statistics</h1>
        <h3>Locations</h3>
        <button className="btn" onClick={fetchRosaryData} >Click</button>
      </div>
      <div className="table">
        <div className="table-head">
          <h3 className='value-zone'>Zone</h3>
          <h3 className='value-name'>Rosary Name</h3>
          <h3 className='value-count'>Rosary Count</h3>
          {/* document.decades/5(round of to int) */}
        </div>
        <div className="table-body">
             {fillTable()}
           
          
        </div>
      </div>
    </div>
  )
}

export default Section4;
