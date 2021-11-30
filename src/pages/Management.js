import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Img1 from '../items/1.png'
import Img2 from '../items/2.png'
import Img3 from '../items/3.png'
import Footer from './Footer'
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
        backgroundColor:"#E5E5E5",width:'100%'
    }

}) 

function Management() {
    const classes = useStyles();
    return (
        <>
        <Grid>
            <Grid>
                <Navbar/>
            </Grid>
            <Grid className={classes.background}>
                <Typography className={classes.text1}>
                Management
                </Typography>
            </Grid>
            <Grid container>
            <Grid item xs={12} sm={12} md={12}  lg={6}>
                <img src={Img1} width="100%"/>
                <img src={Img2} width="100%"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}  lg={6}>
                <img src={Img3} width="100%" height="100%"/>

            </Grid>
            </Grid>
<Footer/>

        </Grid>


        </>
    )
}

export default Management
