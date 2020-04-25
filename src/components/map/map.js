import React, {useEffect, useContext} from 'react';
import Header from '../header/header.js'
import './map.css';
import mapboxgl from 'mapbox-gl';
import App from '../../App.js';
import { AuthContext } from '../../AuthContext';
import PaymentRef from '../paymentref/paymentref.js'

mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`;

function Map(props) {
    const value  = useContext(AuthContext)

    let mapRef = React.createRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v9'
        });
    })

    const mapOn = {
        width: '100%',
        height: '100vh'
    };
        
    return (
        <>
            {value.isLoggedIn ? (
                <>
                    <Header onSwitch={props.onSwitch}/>
                    <div style={mapOn} ref={mapRef}/>
                    <PaymentRef onSwitch={props.onSwitch}/>
                </>
            ) : (
                <>
                    <App />
                </>
            )}
        </>
    )
}

export default Map