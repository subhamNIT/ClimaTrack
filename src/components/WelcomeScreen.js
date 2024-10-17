import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeScreen = () => {
    return (
        <>
            <Box mt={8} mb={4}>
                <Typography variant="h4" color="primary.main">
                    ClimaTrack
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    Type above to know the weather of your area
                </Typography>
            </Box>
            <Box>
                <Box
                    component="img"
                    src="/img/weather-img.svg"
                />
            </Box>
        </>
    );
};

export default WelcomeScreen;