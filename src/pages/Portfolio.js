import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Navbar from './Navbar'
import Portfolio1 from '../items/portfolio1.png'
import Card from '../items/card.png'
import EngFlag from '../items/engflag.png'
import FranceFlag from '../items/france flag.png'
import Background from '../items/view.png'
import Portfolio2 from '../items/portfolio2.png'
import Card2 from '../items/card2.png'
import BackgroundColor from '../items/view2.png'
import Microphone from '../items/microphone.png'
import Recorder from '../items/recoder.png'
import Hello from '../items/hello.png'
import PhoneImg from '../items/mobilephoneimg.png'
import Recorder2 from '../items/recoder2.png'
import HeadPhoneImage from '../items/headphoneimg.png'
import Portfolio3 from '../items/portfolio3.png'
import PortFolio4 from '../items/portfolio4.png'
import PortFolio5 from '../items/portfolio5.png'
import GramError from '../items/gramerror.png'
import SpringError from '../items/springerror.png'
import Correct from '../items/correct.png'
import TextArea from '../items/lasttextarea.png'
import TextArea2 from '../items/textarea2.png'
import PunctuationError from '../items/punctuation.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
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
        paddingBottom:20
    },
    container:{
        background: "linear-gradient(96.39deg, rgba(112, 217, 85, 0.86) 0.56%, rgba(231, 185, 97, 0.91) 77.01%)",
        paddingBottom:'8%',
       

    },
    background1:{
        backgroundImage:`url(${Portfolio1})`,
        marginTop:100,
        backgroundSize:"100%",
        backgroundRepeat:'no-repeat',
    },
    container2:{
        backgroundImage:`url(${Background})`, 
        alignSelf:'center',
        backgroundSize:"cover",
        backgroundRepeat:'no-repeat',
    
        
    },
    box1:{
        backgroundColor:'#EBB44D',
        color:"white",
        marginTop:30

    },
    box3:{
        
        backgroundColor:'#EBB44D',
        color:"white",
        marginTop:30

    },
    boxtranslate:{
        marginTop:100,
        paddingBottom:'20%',

    },
    backgroundf:{
        backgroundImage:`url(${Portfolio2})`,
        backgroundSize:"cover",
        backgroundRepeat:'no-repeat',
        marginTop:100,
        width:'100%'

    },
    background4:{
        background:`url(${BackgroundColor})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",

    },
    speech:{
        marginTop:"70px"
    },
    box4:{
        
        backgroundColor:'#41BDEE',
        color:"white",
        marginTop:30,
        marginLeft:50,
        marginBottom:50

    },
    background5:{
        background: "linear-gradient(96.39deg, rgba(204, 94, 173, 1) 20.39%, rgba(171, 58, 85, 0.92) 77.01%)"
    
    },
    background6:{
        background: "linear-gradient(180deg, rgba(103, 173, 85, 1) , rgba(193, 206, 46, 0.54) )"
    

    },
    background7:{
        marginTop:'8%'
    },
    background8:{
        background: "linear-gradient(96deg, rgba(49, 108, 200, 0.81) , rgba(55, 220, 210, 0.85) )"

    },
    background9:{
        background: "linear-gradient(180deg, rgba(114, 53, 139, 1) , rgba(157, 39, 39, 0.55) )"

    },
    background10:{
        background: "linear-gradient(200deg, rgba(43, 39, 231, 0.68), rgba(52, 177, 101, 0.47) , rgba(55, 220, 62, 0.85) )"

    }, 
    background11:{
        background: "linear-gradient(200deg, rgba(51, 52, 54, 1), rgba(153, 164, 193, 1)  )"


    },
    grammer:{
        paddingTop:50
    }
   
    

})

function Portfolio() {
    const classes = useStyles();
    return (
        <>
        <Grid>
            <Navbar/>
        </Grid>
        <Grid>
            <Typography className={classes.text1}>
                Portfolio
            </Typography>
            <center><nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={{width:'100%',justifyContent:'center',fontWeight:'500',fontSize:24}}>
            
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
        </Grid>
        <Grid container className={classes.container}>
            <Grid item xs={10} sm={10} md={10} lg={5}>
                <p style={{padding:50,fontSize:'180%',fontWeight:'bolder',color:'white'}}>
                Mockup world
                </p>
                <p style={{color:"white",paddingLeft:50,fontSize:'110%',fontWeight:'400'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate 
                </p>
               <center><Link to='/portfolio-view'> <button className="btn" style={{backgroundColor:"#FFBA38",color:"#03396A",marginTop:20}}>
                    <b>View More</b>
                </button></Link></center>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={7}>
                <center><img src={Portfolio1} style={{marginTop:70,}} width="100%"/></center>
            </Grid>
        </Grid>
        <Grid container className={classes.container2} justifyContent="center">
            <Grid item xs={7} sm={7} md={7} lg={5}>
                <p style={{color:"#3A3535",textAlign:'center',fontSize:'180%',fontWeight:'500',paddingTop:50}}>
                Translate Your Sentence 
                </p>
               <center> <p style={{color:'white',textAlign:'center',fontSize:'120%',fontWeight:"400",paddingTop:"20px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, nibh et suscipit efficitur, enim ligula rutrum magna, sit amet consectetur purus metus non felis.

                </p></center>
            </Grid>
            <Grid container justifyContent="space-evenly" className={classes.boxtranslate} >
                <Grid item xs={10} sm={10} md={10} lg={5} >
                    <center>
                <div className="dropdown" >
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent",marginLeft:"10%"}}>
             <img src={EngFlag}/> English
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </div>
         </center>
         <Grid item xs={10}  sm={10}  md={10} lg={12} className={classes.box1}>
             <p style={{color:'white',textAlign:'justify',padding:'10%',fontSize:'100%',fontWeight:"400",paddingBottom:80}}>
             This study was a preliminary study of high school student value changes because of the terrorist attack on the U.S. The major limitations of this study were that the student population was from California and might not truly represent all high school students in the U.S. Further, this study could not be considered a truly longitudinal study because of privacy

             </p>
         </Grid>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={5}>
                    <center>
                <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent",marginLeft:'10%'}}>
             <img src={FranceFlag}/> France
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </div>
         </center>
         <Grid item xs={10} sm={10} md={10} lg={12} className={classes.box3}>
             <p style={{color:'white',textAlign:'justify',padding:'10%',fontSize:'100%',fontWeight:"400", paddingBottom:55}}>
             Cette étude était une étude préliminaire des changements de valeur des élèves du secondaire en raison de l'attaque terroriste aux États-Unis. Les principales limites de cette étude étaient que la population étudiante était originaire de Californie et pourrait ne pas vraiment représenter tous les élèves du secondaire aux États-Unis. De plus, cette étude ne pouvait pas ... </p>
         </Grid>
                </Grid>
            </Grid>
        </Grid >
        <Grid container className={classes.container} justifyContent="center">
            <Grid item xs={10} sm={10} md={10} lg={5} >
                <p style={{padding:50,fontSize:'180%',fontWeight:'bolder',color:'white'}}>
                Mockup world
                </p>
                <p style={{color:"white",paddingLeft:50,fontSize:'110%',fontWeight:'400'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate 
                </p>
               <center><Link to="/portfolio-task-calculation"> <button className="btn" style={{backgroundColor:"#FFBA38",color:"#03396A",marginTop:20}}>
                    <b>View More</b>
                </button></Link></center>
            </Grid>
            <Grid item xs={10} sm={10} md={7} lg={7}>
              <img src={Portfolio2} style={{marginTop:70,}} width="100%"/>
            </Grid>
        </Grid>
        <Grid container className={classes.background4}>
        <Grid container  justifyContent="center">
            <Grid item xs={7} sm={7} md={7} lg={5}>
            <p style={{color:"#EBB44D",textAlign:'center',fontSize:'180%',fontWeight:'500',paddingTop:50}}>
            Speech To Text 
                </p>
               <center> <p style={{color:'white',textAlign:'center',fontSize:'120%',fontWeight:"400",paddingTop:"20px"}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, nibh et suscipit efficitur, enim ligula rutrum magna, sit amet consectetur purus metus non felis.
                </p></center>
            </Grid>
        </Grid>
        <Grid container className={classes.speech} >
        <Grid item xs={11} sm={11} md={7} lg={3} >
            <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent",marginLeft:"10%"}}>
             <img src={EngFlag}/> English
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </div>
         </Grid>
         <Grid item xs={10} sm={10} md={10} lg={1}>
             <center>
         <img  src={Microphone} style={{marginTop:50}}/>
         </center>
         </Grid>
         </Grid>
            <Grid xs={11} sm={11} md={11} lg={11}>
                <center>
                <img src={Recorder} style={{marginTop:"7%"}} width="70%"/>
                </center>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={7}  >
                <div className="dropdown" style={{marginTop:'7%'}}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent",marginLeft:'10%'}}>
             <img src={FranceFlag}/> France
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </div>
         
         </Grid>
         <Grid container className={classes.container3}>
         <Grid item xs={10} sm={10} md={10} lg={5} className={classes.box4}>
             <p style={{color:'white',textAlign:'justify',padding:'10%',fontSize:'100%',fontWeight:"400", paddingBottom:55}}>
             Cette étude était une étude préliminaire des changements de valeur des élèves du secondaire en raison de l'attaque terroriste aux États-Unis. Les principales limites de cette étude étaient que la population étudiante était originaire de Californie et pourrait ne pas vraiment représenter tous les élèves du secondaire aux États-Unis. De plus, cette étude ne pouvait pas ... </p>
         </Grid>
         <Grid item xs={10} sm={10} md={10} lg={6}>
             <center>
             <img src={Hello} width="90%" style={{paddingBottom:"70px",paddingLeft:"10%"}}/>
             </center>

         </Grid>
         </Grid>      
</Grid>

<Grid className={classes.background5}>
    <Grid container>
        <Grid item xs={10} sm={10} md={10} lg={6}>
            <center>
            <img src={PhoneImg} width="100%" style={{marginTop:"70px"}}/>
            </center>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={5}>
        <p style={{padding:50,fontSize:'180%',fontWeight:'bolder',color:'white'}}>
                Mockup world
                </p>
                <p style={{color:"white",paddingLeft:50,fontSize:'110%',fontWeight:'400'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate 
                </p>
               <center> <button className="btn" style={{backgroundColor:"#FFBA38",color:"#03396A",marginTop:20}}>
                    <b>View More</b>
                </button></center>

        </Grid>
    </Grid>

</Grid>
    <Grid className={classes.background6}>
        <Grid container justifyContent="center">
        <Grid item xs={7} sm={7} md={7} lg={10}>
                <p style={{color:"#3A3535",textAlign:'center',fontSize:'180%',fontWeight:'500',paddingTop:50}}>
                Denoiser
                </p>
               <center> <p style={{color:'white',textAlign:'center',fontSize:'120%',fontWeight:"400",paddingTop:"20px"}}>
               Vestibulum tristique augue in risus consectetur, at eleifend nulla mattis. Pellentesque aliquam ullamcorper arcu, posuere aliquam nibh ultricies pellentesque. Donec est odio, ullamcorper ac augue non, consequat consectetur felis. Proin vitae turpis venenatis, tincidunt dui a, lobortis justo. Vivamus pulvinar sem turpis. Nunc tristique lectus eu libero pulvinar suscipit. Praesent consectetur, justo sed consectetur volutpat, neque urna porttitor urna, et lobortis metus tortor id orci. 
                </p></center>
            </Grid>
        </Grid>
        <Grid container justifyContent="center" className={classes.background7}>
            <Grid item xs={10} sm={10} md={10} lg={8}>
                <center>
                    <img src={Recorder2} width="90%"/>
                    </center>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={3}>
                <center>
                <img src={HeadPhoneImage} width="80%" style={{marginTop:"10%"}}/>
                </center>

            </Grid>
        </Grid>

    </Grid>
    <Grid className={classes.background8}>
        <Grid container>
        <Grid item xs={10} sm={10} md={10} lg={6}>
                <p style={{padding:50,fontSize:'180%',fontWeight:'bolder',color:'white'}}>
                Mockup world
                </p>
                <p style={{color:"white",paddingLeft:50,fontSize:'110%',fontWeight:'400'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate 
                </p>
               <center> <button className="btn" style={{backgroundColor:"#FFBA38",color:"#03396A",marginTop:20}}>
                    <b>View More</b>
                </button></center>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={6}>
                <center>
                <img src={Portfolio3} width="100%"/>
                </center>

            </Grid>

        </Grid>

    </Grid>
    <Grid className={classes.background9}>
        <Grid container justifyContent="center">
        <Grid item xs={7} sm={7} md={7} lg={7}>
                <p style={{color:"#3A3535",textAlign:'center',fontSize:'180%',fontWeight:'500',paddingTop:50}}>
                Face Mesh

                </p>
               <center> <p style={{color:'white',textAlign:'center',fontSize:'120%',fontWeight:"400",paddingTop:"20px"}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, nibh et suscipit efficitur, enim ligula rutrum magna, sit amet consectetur purus metus non felis. Sed consectetur sapien vitae felis suscipit blandit. Morbi id consectetur mauris. Aliquam erat volutpat. Phasellus accumsan ligula ac felis hendrerit, ac egestas diam porttitor.
                </p></center>
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={12}>
                <center>
                <img src={PortFolio4} width="100%" style={{marginTop:"1%"}}/>
                </center>
            </Grid>
        </Grid>
    </Grid>
    <Grid className={classes.background10}>
        <Grid container>
        <Grid item xs={10} sm={10} md={10} lg={7}>
                <center><img src={PortFolio5} style={{marginTop:70,}} width="90%"/></center>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={5}>
                <p style={{padding:50,fontSize:'180%',fontWeight:'bolder',color:'white'}}>
                Mockup world
                </p>
                <p style={{color:"white",paddingLeft:50,fontSize:'110%',fontWeight:'400'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ipsum tempor enim aliquam placerat sit amet eget tortor. Sed dictum nisi velit, eu rutrum lectus faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus in nulla varius efficitur. Praesent sed mauris eu sapien imperdiet rhoncus sed non augue. Pellentesque facilisis congue augue sit amet viverra. Aliquam tempor facilisis hendrerit. Vestibulum auctor lorem sit amet lectus finibus, at placerat tellus semper. Nulla vulputate 
                </p>
               <center> <button className="btn" style={{backgroundColor:"#FFBA38",color:"#03396A",marginTop:20}}>
                    <b>View More</b>
                </button></center>
            </Grid>
        </Grid>
    </Grid>
    <Grid className={classes.background11}>
        <Grid container justifyContent="space-evenly" className={classes.grammer}>
            <Grid item xs={10} sm={10} md={10} lg={2}>
                <center><img src={GramError}/></center>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={7}>
            <p style={{color:"#EBB44D",textAlign:'center',fontSize:'180%',fontWeight:'500',paddingTop:50}}>
            GramFormer
                </p>
               <center> <p style={{color:'white',textAlign:'center',fontSize:'120%',fontWeight:"400",paddingTop:"20px"}}>
               Check your English text for grammar, spelling, and punctuation errors with GramFormer checker. </p></center>
            </Grid>
            <Grid item  xs={10} sm={10} md={10} lg={2}>
                <center><img src={SpringError}/></center>

            </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
            <Grid item xs={10} sm={5} md={6} lg={3}>
            <div className="dropdown" >
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent",marginLeft:"30%",color:'#EBB44D',width:'150px',height:"60px",textAlign:'justify'}}>
              English
          </button>
          </div>
            </Grid>
            <Grid item  xs={10} sm={5} md={5} lg={3}>
                <center><img src={Correct}/></center>
            </Grid>

        </Grid>
        <Grid container>
            <Grid item xs={11} sm={11} md={8} lg={8}>
                <center>
               <img src={TextArea} width="100%"/>
                </center>
            </Grid>
            <Grid item xs={11} sm={11} md={4} lg={4}>
                <center>
                <img src={TextArea2} width="100%"/>
                </center>
            </Grid>
        </Grid>
        <Grid container justifyContent="space-around" lg={7}>
            <Grid item xs={11} sm={11} md={5} lg={3}>
                <center><img src={PunctuationError}/></center>
            </Grid>
            <Grid item xs={11} sm={11} md={5} lg={4}>
                <center>
                <button className="btn" style={{backgroundColor:"#EBB44D",color:'white',width:'250px',borderRadius:50,marginTop:50}}>
                    Check Your Text
                </button>
                </center>
            </Grid>
        </Grid>
    </Grid>
    <Footer/>


        </>
    )
}

export default Portfolio
