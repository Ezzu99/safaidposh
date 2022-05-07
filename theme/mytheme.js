import { createTheme } from '@aws-amplify/ui';
import { grey, purple, orange } from '@mui/material/colors';

const mytheme = createTheme({
    name: 'my-theme',
    tokens: {
        colors: {
            font: {
                dark: { value: grey[800] },
                light: { value: grey[600] },
                primary: { value: purple[600] },
                secondary: { value: orange[600] }
            },
        },
    },
});

export default mytheme;