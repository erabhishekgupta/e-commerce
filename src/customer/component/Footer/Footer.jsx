import { Grid, Typography, Button, Collapse } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Grid
                container
                sx={{ bgcolor: 'black', color: 'white', py: 2, px: { xs: 2, sm: 4, md: 6 }, mt: 2 }}
                spacing={2}
                justifyContent="center"
                alignItems="flex-start"
            >
                {/* Collapsible Section for Mobile View */}
                <Grid item xs={12}>
                    <Collapse in={open} sx={{ width: '100%' }}>
                        <Grid
                            container
                            spacing={2}
                            sx={{ bgcolor: 'black', color: 'white', py: 2, px: { xs: 2, sm: 4, md: 6 } }}
                        >
                            {/* Section 1: Get to Know Us */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h6' gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mb: 1 }}>
                                    Get to Know Us
                                </Typography>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    About
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Careers
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Press Releases
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Becho-kharido Motive
                                </Button>
                            </Grid>

                            {/* Section 2: Connect with Us */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h6' gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mb: 1 }}>
                                    Connect with Us
                                </Typography>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Facebook
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Twitter
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Instagram
                                </Button>
                            </Grid>

                            {/* Section 3: Make Money with Us */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h6' gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mb: 1 }}>
                                    Make Money with Us
                                </Typography>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Sell on Becho-Kharido
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Sell under Becho-Kharido Accelerator
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Protect and Build Your Brand
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Amazon Global Selling
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Supply to Becho-Kharido
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Become an Affiliate
                                </Button>
                            </Grid>

                            {/* Section 4: Let Us Help You */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h6' gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mb: 1 }}>
                                    Let Us Help You
                                </Typography>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Your Account
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Returns Centre
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Recalls and Product Safety Alerts
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    100% Purchase Protection
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Becho-Kharido App Download
                                </Button>
                                <Button variant='text' sx={{ textTransform: 'none', color: 'white', display: 'block', mb: 1, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                    Help
                                </Button>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>

                {/* Toggle Button for Mobile View */}
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="success"
                        onClick={handleToggle}
                        sx={{ display: { xs: 'block', sm: 'none' }, mt: 2 }}
                        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    >
                        {open ? 'Hide' : 'Show'}
                    </Button>
                </Grid>
            </Grid>

            {/* Footer Bottom with Copyright Section */}
            <Grid
                container
                sx={{ bgcolor: 'black', color: 'white', py: 1, px: { xs: 2, sm: 4, md: 6 }, mt: 2, justifyContent: 'center' }}
            >
                <Grid item xs={12} textAlign="center">
                    <Typography variant='body2'>
                        &copy; {new Date().getFullYear()} Becho-Kharido. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
