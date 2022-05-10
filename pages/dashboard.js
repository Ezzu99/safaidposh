import { useAuthenticator, View } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import Map from "../components/Map";
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import ItemTable from "../components/ItemTable";
import { useState } from 'react';
import { Box } from "@mui/material";

export default function Dashboard() {
	const { user, signOut } = useAuthenticator((context) => [context.user]);
	const [selectedService, setSelectedService] = useState();
	const [itemData, setItemData] = useState([]);
	const router = useRouter();

	async function handleSignOut(e) {
		try {
			await signOut();
			router.replace('/');
		} catch (err) {
			console.error('Error signing out', err);
		}
	}

	return (
		<>	
			<Head>
				<title>SafaidPosh</title>
				<meta name="description" content="" />
			</Head>
			<Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
				<AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #dedede' }}>
					<Container maxWidth="xl" sx={{ marginLeft: "0px" }}>
						<Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Typography color={'teal'} fontWeight={"bold"} variant="h5">
								<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>S</Typography>AFAID<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>P</Typography>OSH
							</Typography>
							<Button variant="contained" color="error" onClick={handleSignOut}>Sign Out</Button>
						</Toolbar>
					</Container>
				</AppBar>
				<Box sx={{ padding: '12px', paddingX: '24px', display: 'flex', gap: '18px', justifyContent: 'center', alignItems: 'flex-start' }}>
					<Box sx={{ width: '120%', height: '380px'}}>
						<Map interactiveMode={true} itemsHandler={setItemData} serviceHandler={setSelectedService} />
					</Box>
					<Box sx={{ width: '80%' }}>
						{ selectedService && ["Fridge", "Bookshelf"].includes(selectedService) && (
							<ItemTable tableType={selectedService} tableRows={itemData} />
						)}
					</Box>
				</Box>
					
			</Box>
		</>
	);
}