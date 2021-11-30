import React from 'react'
import ML from '../items/ML.png'
import WD from '../items/WD.png'
import UI from '../items/UIUX.png'
import WA from '../items/WA.png'
import Python from '../items/python.png'
import Redis from '../items/redis.png'
import Nginx from '../items/nginx.png'
import Nodejs from '../items/nodejs.png'
import Nestjs from '../items/nestjs.png'
import Mongo from '../items/mongo.png'
import Rx from '../items/rx.png'
import Kafka from '../items/kafka.png'
import Flask from '../items/Flask.png'
import Reacts from '../items/react.png'
import Redux from '../items/redux.png'
import Vue from '../items/vue.png'
import Angular from '../items/angular.png'
import Ngrx from '../items/ngrx.png'
import Laravel from '../items/laravel.png'
import Javascript from '../items/javascript.png'
import Typescript from '../items/typescript.png'
import Docker from '../items/docker.png'
import Material from '../items/materialui.png'
import Bootstrap from '../items/bootstrap.png'
import Vuetify from '../items/vuetify.png'
import Web from '../items/webrtc.png'
import Socket from '../items/socket.png'
import AWS from '../items/aws.png'
import AWSLambda from '../items/awslambda.png'
import AwsDB from '../items/awsdb.png'
import AWSKinesis from '../items/awskinesis.png'
import Hadoop from '../items/hadoop.png'
import Footer from './Footer'
import { Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Inverted from '../items/invertedcommas.png'
import Ava from  '../items/avatar.png'
import Ava2 from '../items/avatar2.png'
import Ava3 from '../items/avatar3.png'
import Rating from '../items/star.png'
import ReactDOM from "react-dom";
import $ from 'jquery'
import Carousel from '../Carousel'

const useStyles = makeStyles({
  container:{
    display:'flex',
    flexDirection:'row'
  },
  container2:{
    display:'flex',
    flexDirection:'row',
    background: "linear-gradient(108.64deg, #17A7E1 37.44%, #14EDC6 88.82%)",
  },
  root: {
    minWidth: 275,
    boxShadow:'2px 4px 3px 3px #bfafb2'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop:30
  },
  card:{
    height:"80%",
    width:'60%',
    margin:50,
  },
  ava:{
    display:'flex',
    flexDirection:'row',
  },
  webText:{
    fontSize:'150%',fontWeight:'400',paddingTop:30,color:'white',fontFamily:"SofiaPro",paddingBottom:40,
    alignItems:'center'

  },
  webHead:{
    paddingTop:50,
    color:'white',
    fontSize:"200%"

  }

}) 

function Services() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
        <div style={{backgroundColor:"#E5E5E5",width:'100%'}}>
            <p style={{color:"#004080",textDecorationLine:"underline",textDecorationThickness:3,fontWeight:'600',fontSize:40,textAlign:"center",textDecorationColor:"#FFBA38",marginBottom:"auto",paddingTop:80,paddingBottom:80}}>Our Services</p>
        </div>
        <div style={{background: "radial-gradient(71.91% 560.83% at 83.33% 50%, #77EF2E 0%, #61BC29 100%)"}}> 
        <Grid container className={classes.container} >

            <Grid item xs={12}  style={{fontWeight:'600',fontSize:'180%',paddingTop:50,color:'white',paddingLeft:80}} className="col-12">
                Machine Learning
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} alignItems="center" style={{fontSize:'180%',fontWeight:'400',paddingTop:40,color:'white',fontFamily:"SofiaPro",paddingBottom:40,paddingLeft:80}} className="col-sm-12" >
              <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate ex nec ex imperdiet, vitae bibendum nibh sodales. In hac habitasse platea dictumst. Quisque aliquam porta velit vel sagittis. Cras pharetra odio a tempus laoreet.Nulla euismod sit amet elit id aliquet. Donec at risus accumsan, accumsan justo nec, tincidunt felis. Praesent id turpis quis nisl hendrerit porta ut at lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut ligula sed magna facilisis accumsan interdum sit amet diam. Curabitur condimentum ullamcorper mauris, a el
            </Typography>
            </Grid>
           
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
               <center style={{paddingBottom:"70px"}}> <img src={ML} width="80%"/></center>
            </Grid>
           
            </Grid>
    

        </div>
        <Grid container className={classes.container2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
              <center style={{paddingBottom:"70px"}}><img src={WD} width="80%" height="80%" style={{margin:50}}/></center>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography className={classes.webHead}>
             Web Development
            </Typography>
         <Grid item xs={12} sm={12} md={12} lg={10} alignItems="center " className={classes.webText}>
            <Typography > 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate ex nec ex imperdiet, vitae bibendum nibh sodales. In hac habitasse platea dictumst. Quisque aliquam porta velit vel sagittis. Cras pharetra odio a tempus laoreet.Nulla euismod sit amet elit id aliquet. Donec at risus accumsan, accumsan justo nec, tincidunt felis. Praesent id turpis quis nisl hendrerit porta ut at lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut ligula sed magna facilisis accumsan interdum sit amet diam. Curabitur condimentum ullamcorper mauris, a el
            </Typography>
            </Grid>
            </Grid>
       
          
          </Grid>  
        <Grid container xs={12}>
        <Grid item xs={12} sm={12} lg={6} style={{background: "linear-gradient(118.42deg, #D251E7 6.23%, rgba(231, 81, 81, 0.79) 100.38%)"}}>
            <Grid item xs={12} sm={11} lg={11}>
            <Grid item xs={12} style={{color:"white",fontWeight:'600',fontSize:36,textAlign:'center',paddingTop:50}}>
                UI/UX Design
            </Grid>
            <Grid item xs={12} sm={12} lg={12} style={{fontSize:20,fontWeight:'400',textAlign:'center',color:'white', padding:50}} className="text-justify">
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. 
            </Grid>
            <center><img src={UI}/></center>
            </Grid>

        </Grid>
        <Grid item xs={12} sm={12} lg={6} style={{background: "linear-gradient(118.15deg, #FFBD31 0%, #ECEF61 135.12%)",width:"49%"}} >
            <Grid item xs={12} sm={11} lg={11}>
            <Grid item xs={12}style={{color:"white",fontWeight:'600',fontSize:36,textAlign:'center',paddingTop:50}}>
                Web Application
            </Grid>
            <Grid item xs={12} sm={12} lg={12}style={{fontSize:20,fontWeight:'400',textAlign:'center',color:'white',padding:50}} className="text-justify">
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. 
            </Grid>
            <center>
                <img src={WA} width="80%"/>
                </center>
            </Grid>

        </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"#E5E5E5",}}>
            <Grid item xs={12} justifyContent="center" style={{color:"#004080",textDecorationLine:"underline",textDecorationThickness:3,fontWeight:'600',fontSize:'180%',textDecorationColor:"#FFBA38",marginBottom:"auto",paddingBottom:50,paddingTop:50,}}>
              <center> See Our Recent Work</center>
            </Grid>
        </Grid>
        <div style={{background: "linear-gradient(102.14deg, #E0E0E0 0%, #D6A4A4 104.21%)"}}>
        <center><nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={{width:'100%',justifyContent:'center',paddingTop:50,fontWeight:'500',fontSize:24}}>
            
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" style={{color:"#004080",fontSize:"90%"}} className="m-5">Machine Learning <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"#004080",fontSize:"90%"}} className="m-5">Web Development</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"#004080",fontSize:"90%"}} className="m-5">UI/UX Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"#004080",fontSize:"90%"}} className="m-5">Web Apps</a>
      </li>
    </ul>
</nav>
</center>
<center>
<div style={{height:"900px"}}>
<Carousel/>
</div>
 </center>
  </div>
  <div style={{backgroundColor:"#E5E5E5",}}>
      <center>
  <iframe width="80%" height="415" src="https://www.youtube.com/embed/MqkrKsPaYKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{marginTop:80,marginBottom:80,borderRadius:50}}></iframe>
  </center>
<Grid container >
    <Grid item xs={12} justifyContent="center"  style={{color:"#004080",textDecorationLine:"underline",textDecorationThickness:3,fontWeight:'600',fontSize:"150%",textAlign:"center",textDecorationColor:"#FFBA38",marginBottom:"auto",paddingBottom:80,width:'70%',}}>
        Expertise/Services/Technologies
    </Grid>
</Grid>
  </div>
  <div style={{background: "rgba(182, 175, 181, 0.51)"}}>
    <center>
    <div className="container" >
      
      <div className="row" style={{justifyContent:'space-between',paddingTop:100}}>
        <img src={Python} width="70px" height="100px"/>
        <img src={Redis} width="70px" height="100px"/>
        <img src={Nginx} width="70px" height="100px"/>
        <img src={Nodejs} width="70px" height="100px"/>
        <img src={Nestjs} width="70px" height="100px"/>
      </div>

    </div>
    <div className="container" >
      <div className="row" style={{justifyContent:'space-between',marginTop:100}}>
        <img src={Mongo} width="80px" height="100px"/>
        <img src={Rx} width="70px" height="100px"/>
        <img src={Kafka} width="70px" height="100px"/>
        <img src={Flask} width="70px" height="100px"/>
        <img src={Reacts} width="70px" height="100px"/>
      </div>

    </div>
    <div className="container" >
      <div className="row" style={{justifyContent:'space-between',marginTop:100}}>
        <img src={Redux} width="70px" height="100px"/>
        <img src={Vue} width="70px" height="100px"/>
        <img src={Angular} width="70px" height="100px"/>
        <img src={Ngrx} width="70px" height="100px"/>
        <img src={Laravel} width="70px" height="100px"/>
      </div>

    </div>
    <div className="container" >
      <div className="row" style={{justifyContent:'space-between',marginTop:100}}>
        <img src={Javascript} width="70px" height="100px"/>
        <img src={Typescript} width="70px" height="100px"/>
        <img src={Docker} width="70px" height="100px"/>
        <img src={Material} width="70px" height="100px"/>
        <img src={Bootstrap} width="70px" height="100px"/>
      </div>

    </div>
    <div className="container" >
      <div className="row" style={{justifyContent:'space-between',marginTop:100}}>
        <img src={Vuetify} width="70px" height="100px"/>
        <img src={Web} width="70px" height="100px"/>
        <img src={Socket} width="70px" height="100px"/>
        <img src={AWS} width="70px" height="100px"/>
        <img src={AWSLambda} width="70px" height="100px"/>
      </div>

    </div>
    <div className="container" >
      <div className="row" style={{justifyContent:'space-around',marginTop:100}}>
        <img src={AwsDB} width="70px" height="100px"/>
        <img src={AWSKinesis} width="70px" height="100px"/>
        <img src={Hadoop} width="70px" height="100px"/>
        
      </div>
     
    </div>
    </center>
  </div>
  <Grid container justifyContent="center" direction="row" style={{backgroundColor:"#E5E5E5"}}>
    <Grid xs={12} sm={12} md={12} lg={3} className={classes.card} >
  <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <img src={Inverted}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Renesis delivered the talent and expertise needed to launch a brand new fan engagement platform.Thank you for your expertise and we will connect later for an another project
        </Typography>
        <Typography variant="body2" component="p">
          <img src={Ava}/>
        </Typography>
        <Typography>
          Tim Marshall
            </Typography>
            <Typography>
            Founder & CEO,  Calendly
              </Typography>
              <img src={Rating}/>
      </CardContent>
    </Card>
    </Grid>
    <Grid xs={12} sm={12} md={12} lg={3} className={classes.card} >
  <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <img src={Inverted}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Renesis delivered the talent and expertise needed to launch a brand new fan engagement platform.Thank you for your expertise and we will connect later for an another project
        </Typography>
        <Typography variant="body2" component="p">
          <img src={Ava2}/>
        </Typography>
        <Typography>
          Tim Marshall
            </Typography>
            <Typography>
            Founder & CEO,  Calendly
              </Typography>
              <img src={Rating}/>
      </CardContent>
    </Card>
    </Grid>
    <Grid xs={12} sm={12} md={12} lg={3} className={classes.card} >
  <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <img src={Inverted}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Renesis delivered the talent and expertise needed to launch a brand new fan engagement platform.Thank you for your expertise and we will connect later for an another project
        </Typography>
        <Grid container direction="row"  className={classes.ava}>
        <Typography variant="body2" component="p" >
          <img src={Ava3}/>
        </Typography>
        </Grid>
        <Grid item >
        <Typography>
          Tim Marshall
            </Typography>
            <Typography>
            Founder & CEO,  Calendly
              </Typography>
              <img src={Rating}/>
              </Grid>
              
      </CardContent>
    </Card>
    </Grid>
        </Grid>
        <div>
          <Footer/>
        </div>
      
        </>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Services />, rootElement);


export default Services