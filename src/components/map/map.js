import React, {useEffect} from 'react';
import Header from '../header/header.js'
import mapboxgl from 'mapbox-gl';
import PaymentRef from '../paymentref/paymentref.js'
import { connect } from 'react-redux';
import RouteConstructor from '../routecontructor/routeconstructor.js';

mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`;

function Map(props) {
    let mapRef = React.createRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v9'
        });
    })
    
    return (
        <>
            <Header />
            <div style={{height: '100vh'}} ref={mapRef} data-testid='mapTest'/>
            {!props.hasPaymentInfo ? (
                <RouteConstructor />
            ) : (
                <PaymentRef />
            )}
            
        </>
    )
}

const mapStateToProp = state => {
    return {
        hasPaymentInfo: state.hasPaymentInfo
    }
}

export default connect(mapStateToProp)(Map)