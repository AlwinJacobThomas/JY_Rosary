import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon ,divIcon} from 'leaflet';
export default function Map() {
  const [center, setCenter] = useState([10.23604, 76.51952]);
  const zoom = 6;
  const markers = [
    {
      geocode: [10.0122, 76.3562],
      title: "Thiruvananthapuram"
    },
    {
      geocode: [10.5328, 76.2149],
      title: "Kollam"
    },
    {
      geocode: [10.6766, 76.8422],
      title: "Pathanamthitta"
    },
    {
      geocode: [10.0862, 76.3423],
      title: "Alappuzha"
    },
    {
      geocode: [10.5941, 76.6413],
      title: "Kottayam"
    },
    {
      geocode: [10.1520, 76.4088],
      title: "Idukki"
    },
    {
      geocode: [10.8505, 76.2711],
      title: "Ernakulam"
    },
    {
      geocode: [10.4505, 76.1232],
      title: "Thrissur"
    },
    {
      geocode: [10.9785, 76.5761],
      title: "Palakkad"
    },
    {
      geocode: [10.3276, 76.1244],
      title: "Malappuram"
    },
    {
      geocode: [10.5256, 76.2664],
      title: "Kozhikode"
    },
    {
      geocode: [10.2054, 76.1915],
      title: "Wayanad"
    },
    {
      geocode: [10.4020, 76.5389],
      title: "Kannur"
    },
    {
      geocode: [10.7618, 76.3459],
      title: "Kasaragod"
    }
  ];
  const [currentLocation,setCurrentLocation] = useState([10.7618, 76.3459]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position.coords.latitude+"----"+position.coords.longitude)
      setCurrentLocation([position.coords.latitude,position.coords.longitude])
    })
  },[])

  const createCustomClusterIcon= (cluster)=>{
    return new divIcon({
      html:`<div>${cluster.getChildCount()}</div>`,
      className:"cluster-icon",
      // iconSize: point(33,33,true),
    })
  }
  // const customIcon = new Icon({
  //   iconUrl:"https://cdn-icons-png.flaticon.com/128/484/484167.png",
  //   iconSize:[38,38]
  // })

  return (
    <div id='map-container'>
      <MapContainer
        center={center}
        zoom={zoom}>
        <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        
        {/* chunkedLoading is used to avoid massive loading */}
        <MarkerClusterGroup 
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}> 
          {/* {markers.map(marker => */}
             {/* "icon={customIcon}" use this for custom icon */}
            <Marker position={currentLocation}>
              <Popup>
                blaah
                {/* {marker.title} */}
              </Popup>
            </Marker>
          {/* )} */}
        </MarkerClusterGroup>



      </MapContainer>

    </div>
  )

}
