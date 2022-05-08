import { Auth } from 'aws-amplify';
import NextLink from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Zones } from '../src/models';
import { Flex, Text, View, Grid, MapView, Geocoder, Divider, Authenticator, useTheme, useAuthenticator } from '@aws-amplify/ui-react';
import  { Marker } from 'react-map-gl';
import Logo from '../components/Logo';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Map from '../components/Map';
import { useRouter } from 'next/router';

export default function Index() {
	const router = useRouter();
	const { user, signOut } = useAuthenticator((context) => [context.user]);
	
	const { tokens } = useTheme();
	const [zones, setZones] = useState([]);
	const [viewport, setViewport] = useState({
		latitude: 24.85,
		longitude: 67.26,
		zoom: 14
	});

	useEffect(() => {
		router.prefetch('/dashboard')
	}, []);

	// Move the waiting process to a loading page, where it tries to get the user, if user is available, then renders
	// the dashboard page, else the Index page

	const services = {
		async handleSignIn(formData) {
			let { username, password } = formData;
			try {
				const user = await Auth.signIn(username, password);
				console.log(user);
				// router.push('/dashboard');
				return user;
			} catch (err) {
				console.error("Error signing in", err);
			}
		}
	}

	// useEffect(() => {
	// 	async function fetchZones() {
	// 		const zoneData = await DataStore.query(Zones);
	// 		setZones(zoneData);
	// 		console.log(zoneData[0].location.latitude)
	// 	}
	// 	fetchZones();
	// 	const subscription = DataStore.observe(Zones).subscribe(() => fetchZones());
	// 	return () => subscription.unsubscribe();
	// }, []);

	// {
	// 	user ? (<button onClick={signOut}>Sign Out</button>) : ""
	// }

	if (user) {
		router.replace('/dashboard');
	} else {
		return (
			<>
				<Head>
					<title>SafaidPosh</title>
					<meta name="description" content="" />
				</Head>
				<AppBar position="static">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<Typography>
								<Logo />
							</Typography>
						</Toolbar>
					</Container>
				</AppBar>
				<Grid
					templateColumns={"2fr 1.5fr"}
					autoRows={"10vh"}
					gap={"10px"}
					margin={"10px 20px"}
				>
					<View rowSpan={7} backgroundColor={tokens.colors.purple[40]}>
						<Typography variant="h4" color={"#FFF"}>
							Message in bold goes here
						</Typography>
						<Typography>
							Other text about mission etc. goes here
						</Typography>
						<Authenticator services={services} />
					</View>
					<View rowSpan={7}>
						<Map />
					</View>
					<View columnSpan={2} rowSpan={1}>
						<Divider orientation="horizontal" />
						Footer goes here
					</View>
				</Grid>
			</>
		// <>
		// 	<Head>
		// 		<meta name="viewport" content="width=device-width, initial-scale=1" />
		// 	</Head>
		// 	<View as='div' padding='8px'>
		// 		<Flex direction='row' justifyContent='space-between' alignItems='center'>
		// 			<View as='div'>
		// 				<Text fontSize='32px' variation='primary' >SafaidPosh</Text>
		// 			</View>
		// 			<View as='div'>
		// 				<Flex direction='row'>
		// 					<Link href='/signup'>
		// 						<a>Signup</a>
		// 					</Link>
		// 					<Link href='/login'>
		// 						<a>Login</a>
		// 					</Link>
		// 				</Flex>
		// 			</View>
		// 		</Flex>
		// 	</View>

		// 	<Grid
		// 		templateColumns="1fr 1fr"
		// 		templateRows="40rem 40rem"
		// 		gap="var(--amplify-space-small)"	
		// 	>
		// 		<View backgroundColor="var(--amplify-colors-blue-10)"></View>
		// 		<View backgroundColor="var(--amplify-colors-blue-20)">
		// 			<MapView
		// 				initialViewState={viewport}
		// 				style={{
		// 					width: "100%",
		// 					height: "100%"
		// 				}}
		// 			>
		// 				<Geocoder />
		// 				{
		// 					zones.map((zone) => <Marker key={zone.id} latitude={zone.location.latitude} longitude={zone.location.longitude} style={{transform: `translate: (${-21/2 + 'px'}, ${-21/2 + 'px'})`}} />)
		// 				}
		// 			</MapView>
		// 		</View>
		// 	</Grid>
		// </>
		);
	}
}