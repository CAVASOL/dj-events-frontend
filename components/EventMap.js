import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import Geocode from 'react-geocode';

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: '100%',
    height: '500px',
    zoom: 12,
  });

  useEffect(() => {
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

  if (loading) return false;

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src="/image/pin.svg" width={30} height={30} />
      </Marker>
    </ReactMapGl>
  );
}
