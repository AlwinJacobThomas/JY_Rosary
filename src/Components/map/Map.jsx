import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { icon, divIcon } from 'leaflet';

const MapFinal = ({ rosaryData }) => {
  const [center, setCenter] = useState([10.23604, 76.51952]);
  const zoom = 6;

  const [currentLocation, setCurrentLocation] = useState(
    { lat: 10.7618, long: 76.3459 }
  );

  // const loca = props.MyLoc;
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     // console.log(position.coords.latitude+"----"+position.coords.longitude)
  //     setCurrentLocation([position.coords.latitude, position.coords.longitude])
  //   })
  // }, [])

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div>${cluster.getChildCount()}</div>`,
      className: 'cluster-icon',
      // iconSize: point(33,33,true),
    });
  };

  const getDefaultIcon = () =>
    icon({
      iconUrl: '/assets/images/pin.svg',
      iconSize: [30, 50],
      iconAnchor: [15, 30],
    });

  const getLastLocationIcon = () =>
    icon({
      iconUrl: '/assets/images/rosary-marker.svg', // Change this to your last marker icon
      iconSize: [45, 45],
      iconAnchor: [15, 30],
    });

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
          {/* "icon={customIcon}" use this for custom icon */}

          {/* {rosaryData.map((locationData, index) => {
            if (locationData.locations) {
              return locationData.locations.map((location, subIndex) => (
                <Marker
                  key={`marker-${index}-${subIndex}`}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>{locationData.name}</Popup>
                </Marker>
              ));
            }
            return null;
          })}
           */}

          {/* chunkedLoading is used to avoid massive loading */}

          {/* {rosaryData.map((locationData, index) => {
            const locations = locationData.locations || [];
            const lastLocation =
              locations.length > 0
                ? locations[locations.length - 1]
                : null;

            // Map default locations
            const defaultMarkers = locations.map((location, subIndex) => (
              <Marker
                key={`marker-${index}-${subIndex}`}
                position={[location.latitude, location.longitude]}
                icon={getDefaultIcon()}
              >
                <Popup>{locationData.zone}</Popup>
              </Marker>
            ));

            // Map last location with a different icon
            const lastMarker =
              lastLocation && (
                <Marker
                  key={`last-marker-${index}`}
                  position={[
                    lastLocation.latitude,
                    lastLocation.longitude,
                  ]}
                  icon={getLastLocationIcon()}
                >
                  <Popup>{`${locationData.zone}`}</Popup>
                </Marker>
              );

            return [...defaultMarkers, lastMarker];
          })} */}

          {rosaryData.map((locationData, index) => {
            const locations = locationData.locations || [];
            const lastLocation =
              locations.length > 0 ? locations[locations.length - 1] : null;

            // Map default locations
            const defaultMarkers = locations
              .slice(0, locations.length - 1) // Exclude the last location
              .map((location, subIndex) => (
                <Marker
                  key={`marker-${index}-${subIndex}`}
                  position={[location.latitude, location.longitude]}
                  icon={getDefaultIcon()}
                >
                  <Popup>{locationData.zone}</Popup>
                </Marker>
              ));

            // Map last location with a different icon
            const lastMarker =
              lastLocation && (
                <Marker
                  key={`last-marker-${index}`}
                  position={[
                    lastLocation.latitude,
                    lastLocation.longitude,
                  ]}
                  icon={getLastLocationIcon()}
                >
                  <Popup>{`${locationData.zone}`}</Popup>
                </Marker>
              );

            return [...defaultMarkers, lastMarker];
          })}
        </MarkerClusterGroup>



      </MapContainer>

    </div>
  )

}
export default MapFinal;