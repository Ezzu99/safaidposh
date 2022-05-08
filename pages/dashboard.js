import { useAuthenticator, View } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import Map from "../components/Map";

export default function Dashboard() {
	const { user, signOut } = useAuthenticator((context) => [context.user]);
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
			<button onClick={handleSignOut}>Sign Out</button>
			<View style={{ width: '500px', height: '500px '}}>
				<Map interactiveMode={true} />
			</View>
		</>
	);
}