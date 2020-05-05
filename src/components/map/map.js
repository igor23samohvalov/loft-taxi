import React, {useEffect, useState} from 'react';
import Header from '../header/header.js'
import mapboxgl from 'mapbox-gl';
import PaymentRef from '../paymentref/paymentref.js'
import { connect } from 'react-redux';
import RouteConstructor from '../routecontructor/routeconstructor.js';


mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`;

function Map(props) {
    let mapRef = React.createRef();

    const [viewport, setViewport] = useState([30.2860, 59.9659])

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [viewport[0], viewport[1]],
        zoom: 10
        });    
    })
  
    return (
        <>
            <Header />
            <div style={{height: '100vh'}} ref={mapRef} data-testid='mapTest'/>
            {!props.hasPaymentInfo ? (
                <RouteConstructor onMapChange={setViewport}/>
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