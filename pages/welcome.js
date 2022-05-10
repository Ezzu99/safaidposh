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
import '@aws-amplify/ui-react/styles.css';
import { teal } from '@mui/material/colors';

export default function Welcome() {
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

	if (user) {
		router.replace('/dashboard');
	} else {
		return (
			<>
				<Head>
					<title>SafaidPosh</title>
					<meta name="description" content="" />
				</Head>
				<AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #dedede' }}>
					<Container maxWidth="xl" sx={{ marginLeft: "0px" }}>
						<Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Typography color={'teal'} fontWeight={"bold"} variant="h5">
								<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>S</Typography>AFAID<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>P</Typography>OSH
							</Typography>
							<Button sx={{ color: 'teal' }}>About us</Button>
						</Toolbar>
					</Container>
				</AppBar>
				<Grid
					templateColumns={"2fr 1.75fr"}
					autoRows={"9vh"}
					gap={"10px"}
					padding={"10px 20px 0px 20px"}
				>
					<View rowSpan={7}>
						<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
							<Box sx={{ position: 'relative' }}>
								<Typography variant="h4" fontWeight='bold' color={"#333"} sx={{ marginRight: '46px' }}>
									SafaidPosh: A <Typography style={{display: 'inline-block'}} sx={{ color: 'teal' }} variant="h4" fontWeight='bold'>Helping Hand</Typography> For Those In Need
								</Typography>
								<Typography color={"#555"} sx={{ marginRight: '46px' }}>
									{`We aim to provide SafaidPosh Centers, a concept that combines multiple facilities, ranging from Wall of Kindness' to Community Fridges, all in a single zone, that allows you to take whatever you want, no questions asked. It also allows donators to do walk-in donations.`}
								</Typography>
								<Typography color={"#555"} sx={{ marginRight: '46px', marginTop: '10px', marginBottom: '20px' }}>
								{`Everyone deserves clean water, good food, good clothes and a good life.`}
								</Typography>
							</Box>
							<Authenticator services={services} />
						</Box>
					</View>
					<View rowSpan={7}>
						<Map />
					</View>
				</Grid>
				<Box sx={{ width: '100%', height: '60px', position: 'absolute', bottom: '0', borderTop: '1px solid #dedede', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography sx={{ color: teal[400], whiteSpace: 'pre' }}>
						DevDay      |      2022
					</Typography>
				</Box>
			</>
		);
	}
}