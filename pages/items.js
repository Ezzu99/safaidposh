import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Items = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh' }}>
                <Tabs orientation='vertical' sx={{ borderColor: 'divider' }}>
                    <Tab label='Fridge' {...a11yProps(0)}>

                    </Tab>
                    <Tab label='Book Shelves' {...a11yProps(1)}>

                    </Tab>
                </Tabs>
                <TabPanel index={0}>

                </TabPanel>
                <TabPanel index={1}>

                </TabPanel>
            </Box>
        </>
    )
}

export default Items;