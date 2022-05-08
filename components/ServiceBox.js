import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { amber, blue, grey, brown, deepOrange, lime } from '@mui/material/colors';

export default function ServiceBox(props={}) {
	const service = props?.service ?? 'water';
	const availability = props?.availability ?? false;

	const serviceColors = {
		'water': blue["400"],
		'bookshelf': brown["400"],
		'fridge': deepOrange["800"],
		'washroom': amber["600"],
		'clothes':  lime["A700"],
	};

	const serviceIcons = {
		'water': <LocalDrinkIcon sx={{ color: availability ? serviceColors['water'] : grey["600"] }} />,
		'bookshelf': <LocalLibraryIcon sx={{ color: availability ? serviceColors['bookshelf'] : grey["600"] }} />,
		'fridge': <RestaurantIcon sx={{ color: availability ? serviceColors['fridge'] : grey["600"] }} />,
		'washroom': <ShowerIcon sx={{ color: availability ? serviceColors['washroom'] : grey["600"] }} />,
		'clothes':  <CheckroomIcon sx={{ color: availability ? serviceColors['clothes'] : grey["600"] }} />,
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography sx={{ fontSize: 16 }}>
					{
						serviceIcons[service]
					}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color={availability ? serviceColors[service] : "text.secondary" } gutterBottom>
					{ service.toUpperCase() }
				</Typography>
			</CardContent>
		</Card>
	);
};
