import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import Blog1 from '../items/blog1.png'
import Blog2 from '../items/blog2.png'
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
        paddingBottom:100
    },
    background1:{
        backgroundImage:`url(${Blog1})`,
        width:'100%',height:'80%',
        borderRadius:40,
        marginTop:70,
    },
    blogtext1:{
        paddingTop:"65%",
        paddingLeft:50,
        color:"white",
        fontWeight:'300',

    },
    text2:{
        fontWeight:'200',
        paddingLeft:50,
        color:'#FFFFFF',
    },
    
    background2:{
        backgroundImage:`url(${Blog2})`,
        width:'100%',height:'80%',
        borderRadius:40,
        marginTop:70,
    },

})

function Blogs() {
    const classes = useStyles();
    return (
        <>
        <Grid mb={5}>
            <Grid>
                <Navbar/>
            </Grid>
            <Grid className={classes.background}>
                <Typography className={classes.text1}>
                    Blogs
                </Typography>
            <Grid container style={{justifyContent:'space-around'}}  >
            <Grid item xs={10} sm={5} md={5} lg={5} className={classes.background1}>
                <p className={classes.blogtext1}>
                Morbi tincidunt ex ac lectus feugiat gravida.<br/> Ut ut mattis sghjh
                <button className='btn' style={{color:"#FFBA38",background:"transparent"}}> Read More</button>                
                </p>
                <p className={classes.text2}>
                    24 June 2021
                </p>
            </Grid>
            <Grid item xs={10} sm={5} md={5} lg={5} className={classes.background2}>
                <p className={classes.blogtext1}>
                Morbi tincidunt ex ac lectus feugiat gravida.<br/> Ut ut mattis sghjh
                <button className='btn' style={{color:"#FFBA38",background:"transparent"}}> Read More</button>                
                </p>
                <p className={classes.text2}>
                    24 June 2021
                </p>
            </Grid>
            </Grid>
            <Grid container style={{justifyContent:'space-around'}} >
            <Grid item xs={10} sm={5} md={5} lg={5} className={classes.background1}>
                <p className={classes.blogtext1}>
                Morbi tincidunt ex ac lectus feugiat gravida.<br/> Ut ut mattis sghjh
                <button className='btn' style={{color:"#FFBA38",background:"transparent"}}> Read More</button>                
                </p>
                <p className={classes.text2}>
                    24 June 2021
                </p>
            </Grid>
            <Grid item xs={10} sm={5} md={5}  lg={5} className={classes.background2}>
                <p className={classes.blogtext1}>
                Morbi tincidunt ex ac lectus feugiat gravida.<br/> Ut ut mattis sghjh
                <button className='btn' style={{color:"#FFBA38",background:"transparent"}}> Read More</button>                
                </p>
                <p className={classes.text2}>
                    24 June 2021
                </p>
            </Grid>
            </Grid>
            </Grid> 
            <Footer/>
            
        </Grid>
        </>
    )
}

export default Blogs
