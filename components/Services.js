import Grid from '@mui/material/Grid';
import ServiceBox from './ServiceBox';

export default function Services(props={}) {
	const services = props?.services ?? {};
	const { itemsHandler, serviceHandler, zone } = props;

	return (
		<Grid
			container
			spacing={2}
		>
			{
				services && Object.keys(services).map((service, index) => (
					<Grid
						item
						xs={4}
						key={index}
					>
						<ServiceBox service={service} availability={services[service]} zone={zone} itemsHandler={itemsHandler} serviceHandler={serviceHandler} />
					</Grid>
				))
			}
		</Grid>
	)
}
