import { AmplifyProvider, createTheme, Flex, Text, View } from '@aws-amplify/ui-react';
import Link from 'next/link';
import '@aws-amplify/ui-react/styles.css'; // default theme;
import mytheme from '../src/mytheme.js';

const Index = () => {
	return (
		<AmplifyProvider theme={mytheme}>
			<View as='div' padding='8px'>
				<Flex direction='row' justifyContent='space-between' alignItems='center'>
					<View as='div'>
						<Text fontSize='32px' variation='primary' >SafaidPosh</Text>
					</View>
					<View as='div'>
						<Flex direction='row'>
							<Link href='/signup'>
								<a>Signup</a>
							</Link>
							<Link href='/login'>
								<a>Login</a>
							</Link>
						</Flex>
					</View>
				</Flex>
			</View>
		</AmplifyProvider>
	);
}

export default Index;