import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import { MapStyles } from './MapStyles';

export default function Map() {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_MAP_API,
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 40.628, lng: -73.968 },
        zoom: 10,
      });

      const marker = new google.maps.Marker({
        position: { lat: 40.628, lng: -73.968 },
        map: map,
      });
    });
  });

  return (
    <MapStyles>
      <h2>find us</h2>
      <div className='map-wrap'>
        <div id='map' ref={googlemap} />
      </div>
    </MapStyles>
  );
}
