import '../App.css';
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
    state = {
        selectedPlace: { name: 'Nashik, Maharashtra' } // Initialize selectedPlace with Nashik
    };
    
      onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props
        });
      };
    
      onInfoWindowClose = () => {
        this.setState({
          selectedPlace: null
        });
      };

  render() {
    return (
      <div className='map-container'>
        <Map google={this.props.google} zoom={6} initialCenter={{ lat: 20.011247, lng: 73.790962 }}>
 
 <Marker onClick={this.onMarkerClick}
     name={'Nashik, Maharashtra'}
     position={{ lat: 20.011247, lng: 73.790962 }} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       {this.state.selectedPlace && <h1>{this.state.selectedPlace.name}</h1>}
     </div>
 </InfoWindow>
</Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCqKB7jWrQLdSWn7IKtolvxRyx3kDDS7cM")
})(MapContainer)