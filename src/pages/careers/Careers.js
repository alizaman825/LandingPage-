import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar'

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
    text2:{
        textAlign:'center',
        color:'#255F9A',
        fontWeight:'500',
        fontSize:"130%",
    },
    background2:{
        background: "rgba(242, 198, 197, 0.81)",
        boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
         borderRadius: "4px",
         paddingBottom:50,
         marginTop:50,
    },
    background3:{
        background: "#E6D8A8",
        boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        borderRadius:"4px",
        paddingBottom:50,
        marginTop:50,
    },
    background4:{
        background: "#B7DEF4",
        boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        borderRadius:"4px",
        marginTop:50,
        paddingBottom:50,
        marginBottom:80,
    },
    text3:{
        textAlign:'center',
        paddingTop:40,
        color:'#004080',
        fontSize:"150%",
        fontWeight:'500',

    }

});


function Careers() {
    const classes = useStyles();
    return (
        <>
        <Grid>
           <Navbar/> 
        </Grid>
        <Grid className={classes.background}>
            <Typography className={classes.text1}>
                Careers
            </Typography>
            <p className={classes.text2}>
            There are Current opening positions
            </p>
            <Grid container justifyContent="space-evenly">
                <Grid item xs={10} sm={10} md={5} lg={4} xl={4} className={classes.background2}>
                    <p className={classes.text3}>
                    Front-End Developer - React JS
                    </p>
                    <p style={{ textAlign:"center",color:"#527FAD",fontSize:20,fontWeight:'400',paddingTop:20}}>
                    5 positions
                    </p>
                    <p style={{textAlign:"center",color:"#527FAD",fontSize:20,fontWeight:'400',paddingTop:20}} >
                    Location, Lahore
                    </p>
                    <center>
                        <Link to="/careers/ReactJs">
                    <button className="btn" style={{backgroundColor:'#4042E2',color:'white',marginTop:30}}>
                        View Post

                    </button>
                    </Link>
                    </center>

                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={4} xl={4} className={classes.background3}>
                    <p className={classes.text3}>
                    UI/UX Designer
                    </p>
                    <p style={{ textAlign:"center" ,fontSize:20,fontWeight:'400',color:'#527FAD',paddingTop:'20px'}}>
                    3 positions
                    </p>
                    <p style={{ textAlign:"center" ,fontSize:20,fontWeight:'400',color:'#527FAD',paddingTop:'20px'}}>
                    Location, Lahore
                    </p>
                    <center>
                    <button className="btn" style={{backgroundColor:'#4042E2',color:'white',marginTop:30}}>
                        View Post

                    </button>
                    </center>

                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={4} className={classes.background4}>
                    <p className={classes.text3}>
                    Python/Django Developer
                    </p>
                    <p style={{ textAlign:"center" ,fontSize:20,fontWeight:'400',color:'#527FAD',paddingTop:'20px'}}>
                    2 positions
                    </p>
                    <p style={{ textAlign:"center" ,fontSize:20,fontWeight:'400',color:'#527FAD',paddingTop:'20px'}}>
                    Location, Lahore
                    </p>
                    <center>
                    <button className="btn" style={{backgroundColor:'#4042E2',color:'white',marginTop:30}}>
                        View Post
                    </button>
                    </center>

                </Grid>
            </Grid>
            <Footer/>
        </Grid>
        </>
    )
}

export default Careers
