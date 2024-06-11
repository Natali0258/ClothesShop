//https://docs.2gis.com/ru/mapgl/examples/react
import { load } from '@2gis/mapgl';
import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'OZea-KstQyenwgZcUrpK5Ba4wdBfooj6aEz6xgePYjAeoDo2ePPobXK3sq3AHqIK',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
export default Map;

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);