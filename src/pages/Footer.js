import React from 'react'
import Phone from '../items/smartphone.png'
import Mail from '../items/mail.png'
import Map from '../items/map-pin.png'
import AI from '../items/Ai.png'
import Ui from '../items/Ui.png'
import WebIcon from '../items/webicon.png'
import WebDevIcon from '../items/WebDevicon.png'
import MLIcon from '../items/MLicon.png'
import MobileApp from '../items/mobileappicon.png'
import LinkedIn from '../items/linkedin.png'
import Facebooks  from '../items/facebook.png'
import Instagram from '../items/instagram.png'
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import Demo from '../items/demo.png'
const useStyles = makeStyles({
root:{
    background: "linear-gradient(96.98deg, rgba(78, 75, 217, 0.89) 0.39%, rgba(182, 124, 183, 0.75) 100%)",
    display:"flex"
},
container:{
  backgroundColor:"white",
  display:"flex",

},
container2:{
  backgroundColor:'white',
  display:"flex",
},
quotetext:{
  fontSize:"140%",
  color:"white",
  padding:"50px",
  fontWeight:'bolder',

},
fillText:{
  paddingLeft:50,
  paddingBottom:50,
  fontWeight:"500",
  color:"white"
},
phonetext:{
  color:"white",
  padding:50,

},
mailText:{
  color:'white',
  paddingLeft:50
},
addressText:{
  color:'white',
  padding:50,
},
problemText:{
  textAlign:'center',
  color:"white",
  paddingBottom:20,
  fontSize:'110%'
},
footertext:{
  paddingLeft:50,
  display:"flex",
},
ftext:{
  paddingLeft:30,
},
itext:{
paddingLeft:30,
},
icons:{
  display:"flex",
  paddingTop:40,
  justifyContent:'center'
},
policytext:{
  color:'white',
  padding:50,
  fontSize:"57%"

}
})

function Footer() {
    const classes = useStyles();

    return (
        <>
        <Grid container className={classes.root}>
        <Grid item direction="column">
            <Grid item xs={12} lg={12}>
                <Typography className={classes.quotetext}>
                    Get a quote
                </Typography>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={12}> 
                <Typography className={classes.fillText}>
                    Fill up the form and our team will<br/> get back to you wihtin 24 hours 
                </Typography>
            </Grid>
        </Grid>
        <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={3}>
                <Typography className={classes.phonetext}>
                    <img src={Phone}/> &nbsp;  +92 301 4567894
                </Typography>
                <Typography className={classes.mailText}>
                    <img src={Mail}/> &nbsp; info.ekkel@gmail.com
                </Typography>
                <Typography className={classes.addressText}>
                    <img src={Map}/>&nbsp; Flats 39-42 First Floor<br/>
                                           Garden Heights,Aibak Block,<br/>
                                          New Garden Town,Lahore,54000
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
            <center><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13605.695606143245!2d74.3427611!3d31.5125154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb89bd5ee6471c!2sEkkel%20AI%20(Private)%20Limited!5e0!3m2!1sen!2s!4v1630933658229!5m2!1sen!2s" width="70%" height="376px" style={{borderRadius:10,margin:50,}} allowfullscreen="" loading="lazy"></iframe></center> 
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={4}>
              <Typography className={classes.problemText}>
                What is the problem you want to solve?
                </Typography>
                <center style={{paddingTop:30}}><img src={Demo} width="100%" height="100%"/></center>
                
               
            </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={2} className={classes.icons}  >
        <Typography className={classes.footertext}>
          <img src={LinkedIn}/>
          </Typography>
          <Typography className={classes.ftext}>
          <img src={Facebooks}/>
          </Typography>
          <Typography className={classes.itext}>
          <img src={Instagram}/>
          </Typography>
          </Grid> 
      </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6}>
      <Typography className={classes.policytext}>
        &copy;2021 Ekkel.ai All Rights Reserved. Terms of Use. Privacy Policy.
      </Typography>

    </Grid>
        </Grid>
        </>
        
    )
}

export default Footer
