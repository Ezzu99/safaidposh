import { Text, useTheme } from "@aws-amplify/ui-react";

export default function Logo() {
	const { tokens } = useTheme();

	return (
		<>
			<Text color={tokens.colors.background.tertiary} style={{ textShadow: "0px 0px 0px rgba(255, 255, 255, 1)", padding: "4px 3px", border: "1px solid", borderColor: `${tokens.colors.teal[60]}` }} backgroundColor={tokens.colors.teal[60]} fontSize={"1.5em"} fontWeight={"normal"} as="span">
				<Text as="span" color={tokens.colors.background.tertiary} fontSize={"1.55em"} style={{ position: "relative", top: "0.04em" }}>S</Text>AFAID
			</Text>
			<Text as="span" backgroundColor={tokens.colors.background.tertiary} color={tokens.colors.teal[60]} fontWeight={"bolder"}  style={{ textShadow: "0px 0px 0px rgba(236, 64, 122, 0.5)", padding: "3px 3px 3px 1px", border: "2px solid", borderColor: `${tokens.colors.teal[40]}`, borderLeft: "none" }} fontSize={"1.5em"}>Posh</Text>
		</>
	);
}
