import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { amber, blue, grey, brown, deepOrange, lime } from '@mui/material/colors';

import Button from '@mui/material/Button';
import { DataStore } from 'aws-amplify';
import { Books, FridgeItems, Fridges, Bookshelves } from '../src/models';

export default function ServiceBox(props={}) {
	const service = props?.service ?? 'water';
	const availability = props?.availability ?? false;
	const { itemsHandler, serviceHandler, zone } = props;

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

	async function fetchItems() {
		console.log(zone);
		const data = (await DataStore.query(service === 'fridge' ? FridgeItems : Books)).filter(c => service === 'fridge' ? (c.fridgeItemsFridgesId === zone.zonesFridgesId) : (c.booksBookshelvesId === zone.zonesBookshelvesId));
		console.log(data);
		const bookData = data.map((d, index) => ({
			id: index,
			title: d.title,
			author: d.author,
			barcode: d.barcode,
			type: d.bookType
		}));
		const fridgeData = data.map((d, index) => ({
			id: index,
			name: d.name,
			barcode: d.barcode,
			type: d.itemType
		}));
		itemsHandler(service === 'fridge' ? fridgeData : bookData);
		serviceHandler(service === 'fridge' ? "Fridge" : service === "bookshelf" ? "Bookshelf" : "");
	}

	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Button variant="outline" onClick={fetchItems}>
					<Typography sx={{ fontSize: 16 }}>
						{
							serviceIcons[service]
						}
					</Typography>
					<Typography sx={{ fontSize: 14 }} fontWeight={"bold"} color={availability ? serviceColors[service] : "text.secondary" } gutterBottom>
						{ service.toUpperCase() }
					</Typography>
				</Button>
			</CardContent>
		</Card>
	);
};
