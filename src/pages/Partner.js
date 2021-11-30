import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
import Navigation from './NavigationPartners';

const useStyles = makeStyles({
 
    text1:{
        color:"#004080",
        textDecorationLine:"underline",
        textDecorationThickness:3,
        fontWeight:'600',
        fontSize:"180%",
        textAlign:"center",
        textDecorationColor:"#FFBA38",
        marginBottom:"auto",
        paddingTop:50,
        paddingBottom:50
    },
    background:{
        backgroundColor:"#E5E5E5",width:'100%',
    }
})
function Partner() {
    const classes = useStyles();
    return (
        <>
        <Grid>
            <Grid>
                <Navbar/>
            </Grid>
            <Grid className={classes.background}>
                <Grid >
                    <Typography className={classes.text1}>
                        Partners
                    </Typography>
                </Grid>
                <Grid>
                    <Navigation/>

                </Grid>

            </Grid>
            <Footer/>

        </Grid>
        </>
    )
}

export default Partner
