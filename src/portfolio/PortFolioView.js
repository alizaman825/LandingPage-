import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../items/logo.png'
import Text from '../items/text.png'
import Background1 from '../items/background1.png'
import Img1 from '../items/img1.png'
import Background2 from '../items/background2.png'
import Img2 from '../items/img2.png'
import Img3 from '../items/img3.png'
import Background3 from '../items/background3.png'
import Img4 from '../items/img4.png'
import Img5 from '../items/img5.png'
import Img6 from '../items/img6.png'
import Img7 from '../items/img7.png'
import Footer from '../pages/Footer'

const useStyles = makeStyles({


  background1:{
    background:`url(${Background1})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    paddingBottom:'20%'
  },
  background2:{
    background:`url(${Background2})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    paddingBottom:'20%'

  },
  background3:{
    background:`url(${Background3})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    paddingBottom:'10%',
    marginTop:100

    
  }

 
})

function PortFolioView() {
  const classes = useStyles();
      return (
        <>
        <Grid>
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white" >
<div style={{display:"grid"}}>
  <img src={Logo}/>
  <img src={Text}/>
  </div>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link mr-3" href="" to="/" style={{color:"#FFBA38"}}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-3" href="#"style={{color:"#0B5395"}} >Dashboard</a>
      </li>
      <li class="nav-item">
        <Link class="nav-link mr-3" href="#" to='/partners' style={{color:"#0B5395"}} >Partners</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link mr-3"  href="#" style={{color:"#0B5395"}} >Advisors</Link>
      </li>
      
      <li class="nav-item">
        <a className="nav-link mr-3" href="/management" style={{color:"#0B5395"}} >Management</a>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link mr-3" to="/careers" href="#" style={{color:"#0B5395"}} >Careers</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link mr-3" to="/blogs"  href="#" style={{color:"#0B5395"}} >Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link mr-3" to="/portfolio"  href="#" style={{color:"#0B5395"}} >Portfolio</Link>
      </li>
      <button className="btn" style={{backgroundColor:"#FFBA38",color:'white',marginLeft:20}}>
Contact Us
</button>

    </ul>
  </div>
</nav>
</div>
        </Grid>
        <Grid container className={classes.background1} justifyContent="space-between">
          <Grid item  lg={4} style={{margin:60}}>
            <p style={{color:"rgba(251, 0, 109, 1)",fontSize:'130%',fontWeight:'bold'}}>
            Craftly.ai
            </p>
            <p style={{fontSize:"110%",fontWeight:'300',textAlign:'justify',color:'white',padding:20}}>
            Craftly is a smart copywriting tool that uses cutting edge artificial algorithm GPT-3 to generate copywriting content for a variety of use cases. Currently it is host to over 20 tools ranging from real estate content creation for your business to product description creations..
            </p>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={6} style={{marginTop:50}}>
            <img src={Img1} width="100%"/>
          </Grid>
        </Grid>
        <Grid container className={classes.background2}>
          <Grid item  lg={12} style={{marginTop:100,}}>
            <center>
              <img src={Img2} width="90%"/>
            </center>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={10} sm={12} md={4} lg={4}>
            <p style={{fontSize:"130%",fontWeight:'bold',padding:50,color:'#DF357F',textAlign:'center'}}>
            Typography and Colors
            </p>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={10} md={5} lg={7}>
            <center>
            <p style={{color:"#284573",fontSize:150,fontWeight:"500",textAlign:'center'}}>
            Aa
            </p>
            </center>
          </Grid>
          <Grid item xs={10} sm={10} md={6} lg={5}>
            <p style={{color:"#284573", fontSize:'bold',fontWeight:'400',padding:10,}}>
            SF UI Text
            </p>
            <p style={{color:"#284573", fontSize:'bold',fontWeight:'400',padding:10}}>
            Regular &nbsp; Medium &nbsp; Semibold &nbsp; Bold
            </p>
            <p style={{color:"#284573", fontSize:'15px',fontWeight:'400',padding:10}}>
            Aa &nbsp; Bb &nbsp; Cc &nbsp; Dd b&nbsp; Ee &nbsp; Ff &nbsp; Gg &nbsp; Hh &nbsp; Ii  &nbsp; Jj <br/> Kk  &nbsp; Ll &nbsp; Mm &nbsp; Nn &nbsp; Oo  &nbsp; Qq &nbsp;  Rr &nbsp; Ss &nbsp; Tt <br/> Uu &nbsp; Vv &nbsp; Ww &nbsp; Xx &nbsp; Yy &nbsp; Zz
            </p>
          </Grid>
          </Grid>
          <Grid container>
            <Grid item  lg={12} style={{marginTop:50}}>
              <center>
              <img src={Img3} width="70%"/>
              </center>
            </Grid>
          </Grid>
          <Grid container className={classes.background3}>
            <Grid item lg={12}>
              <center>
                <img src={Img4} width="90%"/>
              </center>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10} sm={10} md={6} lg={5}>
              <p style={{fontSize:"130%",fontWeight:'bold',padding:50,color:'#DF357F',textAlign:'center'}}>
              Design Process
            </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={11}>
              <center>
              <img src={Img5} width="70%"/>
              </center>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} style={{marginTop:70}}>
              <center>
                <img src={Img6} width="95%"/>
              </center>
            </Grid>
            <Grid lg={10}>
              <center>
              <img src={Img7} width="90%"/>
              </center>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12}>
              <p style={{color:"#6D30E2",fontSize:30,fontWeight:'500',padding:70,textAlign:'center'}}>
              Thanks For Watching
              </p>
            </Grid>
          </Grid>
          <Footer/>
        </>
    )
}

export default PortFolioView
