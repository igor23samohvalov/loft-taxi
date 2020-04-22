import React from 'react';
import Header from '../header/header.js'
import './map.css';
import mapboxgl from 'mapbox-gl';
import LogScreen from '../logscreen/logscreen.js';
import { AuthContext } from '../../AuthContext';

mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`;


class Map extends React.Component {

    mapRef = React.createRef();

    //useEffect?
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v9'
        });
    }

    render() {

        const mapOn = {
            width: '100%',
            height: '90vh'
        };
        
        const mapOff = {
            display: 'none'
        }
        return (
            <AuthContext.Consumer>
                {(values) => {

                    return (
                        <>
                            {values.isLoggedIn ? (
                                <div>
                                    <Header onClick={this.props.onClick}/>
                                    <div style={mapOn} ref={this.mapRef}/>  
                                </div>
                            ) : (
                                <>
                                    <h1>Log In to see the map!</h1>
                                    <a data-id="toLogScreen" onClick={this.props.onClick}>Вернуться на экран авторизации</a>
                                    <div style={mapOff} ref={this.mapRef}/>
                                </>
                            )}
                        </>
                    )
                }}
            </AuthContext.Consumer>
       )
    }
}

export default Map