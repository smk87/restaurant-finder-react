// Library imports
import React, { ReactElement } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from '@react-google-maps/api';

// File imports
import { MapProps } from './Map.types';
import { useStyles } from './Map.styles';
import { envs, map } from 'configs';

const { DEFAULT_ZOOM, YOUR_LOCATION } = map;

export const Map = ({ center, zoom = DEFAULT_ZOOM, markers }: MapProps): ReactElement => {
	const { yourLocation, mapContainer } = useStyles();

	return (
		<LoadScript googleMapsApiKey={envs.GOOGLE_MAP_API_KEY || ''}>
			<GoogleMap mapContainerClassName={mapContainer} center={center} zoom={zoom}>
				{/* Child components, such as markers, info windows, etc. */}
				<InfoWindow position={center}>
					<div className={yourLocation}>
						<h4>{YOUR_LOCATION.LABEL}</h4>
					</div>
				</InfoWindow>

				<Circle
					center={center}
					options={{
						strokeColor: 'blue',
						strokeOpacity: 1,
						strokeWeight: 2,
						fillColor: 'blue',
						fillOpacity: 0.5,
						clickable: false,
						draggable: false,
						editable: false,
						visible: true,
						zIndex: 2,
					}}
					radius={8}
				/>

				<Circle
					center={center}
					options={{
						strokeColor: 'blue',
						strokeOpacity: 0.5,
						strokeWeight: 2,
						fillColor: 'blue',
						fillOpacity: 0.2,
						clickable: false,
						draggable: false,
						editable: false,
						visible: true,
						zIndex: 1,
					}}
					radius={100}
				/>

				{markers?.map((markerPosition, index) => (
					<Marker key={index} position={markerPosition} />
				))}
			</GoogleMap>
		</LoadScript>
	);
};
