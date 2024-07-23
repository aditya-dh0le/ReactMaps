
  // MapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    const mapStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: 200
      };;

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 40.854885, lng: -88.081807 }}
      >
        <Marker position={{ lat: 40.854885, lng: -88.081807 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCqKB7jWrQLdSWn7IKtolvxRyx3kDDS7cM'
})(MapContainer);

  