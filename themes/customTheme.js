import { createTheme } from '@aws-amplify/ui';
import { deepPurple, pink, grey, common, teal  } from '@mui/material/colors';

export default createTheme({
    name: 'custom-theme',
    tokens: {
        colors: {
            background: {
                primary: {
                    value: grey["100"]
                },
                tertiary: {
                    value: common['white']
                }
            },
            purple: {
                "10": {
                    value: deepPurple[200]
                },
                "20": {
                    value: deepPurple[300]
                },
                "40": {
                    value: deepPurple[400]
                },
                "60": {
                    value: deepPurple[600]
                },
                "80": {
                    value: deepPurple[800]
                },
                "90": {
                    value: deepPurple["A400"]
                },
                "100": {
                    value: deepPurple["A700"]
                }
            },
            black: {
                "10": {
                    value: grey["700"]
                },
                "20": {
                    value: grey["800"]
                },
                "40": {
                    value: grey["900"]
                }
            },
            pink: {
                "10": {
                    value: pink["400"]
                },
                "20": {
                    value: pink["500"]
                },
                "40": {
                    value: pink["600"]
                },
                "60": {
                    value: pink["700"]
                },
                "80": {
                    value: pink["A200"]
                }
            },
            teal: {
                "10": {
                    value: teal[100]
                },
                "20": {
                    value: teal[200]
                },
                "40": {
                    value: teal[400]
                },
                "60": {
                    value: teal[600]
                },
                "80": {
                    value: teal[800]
                }
            },
            font: {
                primary: {
                    value: common["black"]
                },
                secondary: {
                    value: grey["500"]
                }
            }
        }
    },
});
