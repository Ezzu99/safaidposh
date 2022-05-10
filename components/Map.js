import { useEffect, useState } from 'react';

import { MapView, Geocoder } from '@aws-amplify/ui-react';
import { Marker } from 'react-map-gl';

import { DataStore } from 'aws-amplify';
import { Zones } from '../src/models';
import Services from './Services';

export default function Map(props={}) {
	const { interactiveMode, itemsHandler, serviceHandler } = props;
	const [zones, setZones] = useState([]);
	const [selectedZone, setSelectedZone] = useState("");
	const [iMode, setIMode] = useState(interactiveMode ?? false);
	const [showServices, setShowServices] = useState(false);

	async function handleMarkerClick(originalEvent, zoneId) {
		originalEvent.stopPropagation();

		if (iMode) {
			setShowServices(true);
			const zone = zones.filter((z) => z.id === zoneId).pop();
			setSelectedZone(zone);
		}
	}

	async function fetchZones() {
		const zoneData = await DataStore.query(Zones);
		console.log(zoneData);
		setZones(zoneData);
	}

	useEffect(() => {
		fetchZones();

		const subscription = DataStore.observe(Zones).subscribe(() => fetchZones());
		return () => subscription.unsubscribe();
	}, []);

	return (
		<>
			<MapView
				initialViewState={{
					latitude: 24.8565,
					longitude: 67.2645,
					zoom: 15.5
				}}
				style={{
					width: "100%",
					height: "100%",
					borderRadius: '12px',
					boxShadow: '0 0 18px 8px #eeeeee',
					marginBottom: "20px"
				}}
			>
				<Geocoder />
				{
					zones.map((zone) => <Marker key={zone.id} latitude={zone.location.latitude} longitude={zone.location.longitude} color={'teal'} onClick={({ originalEvent }) => handleMarkerClick(originalEvent, zone.id)} />)
				}
			</MapView>
			{ showServices && <Services services={selectedZone.services} zone={selectedZone} itemsHandler={itemsHandler} serviceHandler={serviceHandler} /> }
		</>
	);
}