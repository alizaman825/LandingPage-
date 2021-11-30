import React from 'react'
import Grid from '@material-ui/core/Grid'
import Taskbg1 from '../items/taskbg1.png'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../items/logo.png'
import Text from '../items/text.png'
import TaskImg1 from '../items/taskimg1.png'
import Taskimg2 from '../items/taskimg2.png'
import Taskimg3 from '../items/taskimg3.png'
import Taskbg2 from '../items/taskbg2.png'
import Taskimg4 from '../items/taskimg4.png'
import Taskimg5 from '../items/taskimg5.png'
import TaskImg6 from '../items/taskimg6.png'
import Footer from '../pages/Footer';

const useStyles = makeStyles({

    background1:{
        background:`url(${Taskbg1})`,
        backgroundSize:'cover',
        backgroundRepeat:"no-repeat"
    
    
    },
    background2:{
        backgroundColor:'rgba(237, 233, 233, 1)',
        paddingTop:70
    },
     background3:{
         background:`url(${Taskbg2})`,
         backgroundSize:'cover',
        backgroundRepeat:"no-repeat",
        backgroundColor:'rgba(231, 222, 222, 1)',
    



    }



});

function TaskCalculation() {
    const classes = useStyles();
    return (
        <>
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
        <Link class="nav-link mr-3"   href="#" style={{color:"#0B5395"}} >Advisors</Link>
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
<Grid className={classes.background1}>
    <Grid item xs={12}>
        <center>
        <img src={TaskImg1} width="90%"/>
        </center>
    </Grid>
</Grid>
<Grid className={classes.background2}>
    <Grid item xs={12}>
        <center>
            <img src={Taskimg2} width="90%"/>
        </center>

    </Grid>
    <Grid container >
        <Grid item xs={12}>
            <p style={{color:"rgba(0, 58, 98, 1)",textAlign:'center',fontSize:'150%',fontWeight:'bolder',paddingTop:70,paddingBottom:70}}>
            Typography and Colors
            </p>
        </Grid>
        </Grid>
        <Grid container justifyContent="space-around" >
        <Grid item xs={10} sm={10} md={4} lg={3}>
            <p style={{color:'rgba(226, 95, 22, 1)',fontSize:24,fontWeight:"400",textAlign:'justify'}}>
            Aa(Poppins Semi bold)
            </p>
     
            <p style={{color:'rgba(28, 28, 40, 0.84)',fontSize:22,fontWeight:'600'}}>
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
            </p>
            </Grid>
            <Grid item xs={10} sm={10} md={4} lg={3}>
            <p style={{color:'rgba(226, 95, 22, 1)',fontSize:24,fontWeight:"400",textAlign:'justify'}}>
            Aa(Poppins Semi bold)
            </p>
     
            <p style={{color:'rgba(28, 28, 40, 0.84)',fontSize:22,fontWeight:'600'}}>
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
            </p>
            </Grid>
            <Grid item xs={10} sm={10} md={4} lg={3}>
            <p style={{color:'rgba(226, 95, 22, 1)',fontSize:24,fontWeight:"400",textAlign:'justify'}}>
            Aa(Poppins Semi bold)
            </p>
     
            <p style={{color:'rgba(28, 28, 40, 0.84)',fontSize:22,fontWeight:'600'}}>
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.
            </p>
            </Grid>
        </Grid>
        <Grid container>
            <Grid xs={12} style={{marginTop:70,marginBottom:70}}>
                <center>
                    <img src={Taskimg3} width="80%"/>
                </center>
            </Grid>
        </Grid>
</Grid>
<Grid container className={classes.background3}>
<Grid item xs={12}>
            <p style={{color:"rgba(0, 58, 98, 1)",textAlign:'center',fontSize:'150%',fontWeight:'bolder',paddingTop:70,paddingBottom:70}}>
            Project Icons
            </p>
        </Grid>
        <Grid item xs={12} style={{marginBottom:90}}>
            <center>
                <img src={Taskimg4} width="35%"/>
            </center>
        </Grid>
</Grid>
<Grid container justifyContent="space-around">
    <Grid item xs={10} sm={10} md={10} lg={5} style={{marginTop:70,marginBottom:70}}>
        <center>
        <img src={Taskimg5} width="100%"/>
        </center>
    </Grid>
    <Grid item xs={10} sm={10} md={10} lg={5} style={{marginTop:70,marginBottom:70}}>
        <center>
        <img src={TaskImg6} width="100%"/>
        </center>
 </Grid>
</Grid>
<Footer/>
        </>
    )
}

export default TaskCalculation
