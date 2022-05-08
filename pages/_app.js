import '@aws-amplify/ui-react/styles.css';
import '../styles/globals.css'

import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react';
import customTheme from '../themes/customTheme';

Amplify.configure({
	...awsconfig, ssr: true
});

function MyApp({ Component, pageProps }) {
	return (
		<AmplifyProvider theme={customTheme}>
			<Authenticator.Provider>
				<Component {...pageProps} />
			</Authenticator.Provider>
		</AmplifyProvider>
	);
}

export default MyApp
