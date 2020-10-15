import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormAppBarComponent from "./components/Form-AppBar/Form-AppBar.component";
import Grid from '@material-ui/core/Grid';
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./theme";
import {FormComponent} from "./components/Form/Form";
import CompanyDetailsComponent from "./components/Company-Details/Company-Details.component";
import FormTitleComponent from "./components/FormTitle/FormTitle.component";
import AboutComponent from "./components/About/About.component";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(2),
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <FormAppBarComponent/>
                <Container component="main" className={classes.main} maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <FormTitleComponent/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormComponent/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box mb={20}>
                                <Grid item xs={12} md={12}>
                                    <CompanyDetailsComponent/>
                                </Grid>
                            </Box>
                            <Grid item xs={12} md={12}>
                                <AboutComponent/>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </ThemeProvider>
    );
}
