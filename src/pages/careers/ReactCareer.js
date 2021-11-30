import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from '../Navbar'
import Bullet from '../../items/bullet.png'
import Footer from '../Footer';

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
    formbox:{
        background:"linear-gradient(180deg, #CBF5C8 0%, #C8F5F0 100%)",
        borderRadius: "10px",
        width:'58%',
        marginTop:80,
        marginBottom:80,
    }
});

function ReactCareer() {
    const classes = useStyles();
    return (
        <>
        <Grid>
            <Navbar/>
        </Grid>
        <Grid>
            <Grid>
            <Typography className={classes.text1}>
                Careers
            </Typography>
            <p className={classes.text2}>
            There are Current opening positions
            </p>
            </Grid>
            <p style={{

textAlign:'center',
paddingTop:40,
color:'#004080',
fontSize:"150%",
         fontWeight:'500',

            }}>
            Front-End Developer - React JS
            </p>/
            <p style={{

textAlign:'justify',
paddingTop:40,
color:'#004080',
fontSize:"110%",
         fontWeight:'400',
         width:"80%",
         fontSize:'18px',
         paddingLeft:'22%',
            }}>
            We are looking for a Frontend/UI developer. We need someone who is a technology enthusiast and filled with passion, energy to create an impact. We are looking for a motivated and creative Developer who enjoys creating a great user experience and understands the importance of the user interaction.
            </p>
       <h5 style={{

textAlign:'justify',
paddingTop:40,
color:'#004080',
fontSize:"170%",
         fontWeight:'bolder',
         paddingLeft:"8%"
       }}>
       Job Responsibilities
       </h5>
       <ul style={{color:"#004080",paddingLeft:"10%",paddingTop:30,listStyleImage:`url(${Bullet})`}}>
           <li >Develop PSD to HTML 5/CSS3/Responsive</li>
           <li>Prescribe strategy to improve the usability, performance, and effectiveness of existing user interfaces</li>
           <li>Design the organizational structure behind a website and make certain interactive components of a site can be achieved</li>
           <li>Develop front end solutions in collaboration with a development team supporting the application backend</li>
           <li>Assist development in integrating front end presentation layer code with application backend</li>
       </ul>
<h5
style={{
    textAlign:'justify',
paddingTop:40,
color:'#004080',
fontSize:"170%",
         fontWeight:'bolder',
         paddingLeft:"8%"

}}
>
Job Requirements
</h5>
            <ul style={{color:"#004080",paddingLeft:"10%",paddingTop:30,listStyleImage:`url(${Bullet})`}}>
                <li >BSc degree in Computer Science or similar relevant field.</li>
                <li>Minimum 1 year working experience as a UI/UX Developer.</li>
                <li>Experience with frontend technologies such as HTML5, CSS3, LESS/SASS and AJAX</li>
                <li>Strong understanding of responsive design and supporting frameworks such as BootStrap</li>
                <li>Experience of using browser developer tools to audit performance issues</li>
            </ul>
            <center>

            <div   className={classes.formbox}>
            <form style={{padding:'10%'}}>
          <div className="form-group">
            <label className="form-text text-muted" style={{textAlign:'justify'}}>Full Name</label>
            <input type="name" className="form-control" placeholder="Enter Text" style={{
                minWidth:'80%',
            
            }}  />
          </div>
          <div className="form-group">
            <label className="form-text text-muted"style={{textAlign:'justify'}}>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Text" />
          </div>
          <div className="form-group">
            <label className="form-text text-muted" style={{textAlign:'justify'}}>Mobile No</label>
            <input type="phone" className="form-control" placeholder="Enter Text" />
          </div>
          <div className="form-group">
            <label className="form-text text-muted" style={{textAlign:'justify'}}>Upload Your Resume</label>
            <div class="custom-file">
    
    <input type="file" class="custom-file-input" id="customFile"/>
    <label class="custom-file-label" for="customFile" style={{textAlign:'justify'}}>Choose file</label>
    <div className="form-text text-muted" style={{textAlign:'justify'}}>Only Pdf file Allowed with &nbsp; <font color="red" style={{fontWeight:'bold'}}>Max size 5Mb</font></div>
  </div>
          </div>
<center>
          <button type="submit" className="btn" style={{background: "linear-gradient(0deg, #DC9C23, #DC9C23), #FFFFFF",
borderRadius: "12px",color:'white',width:100}}>Submit</button>
</center>
            </form>
            </div>
            </center>
            <Footer/>



        </Grid>
        </>
    )
}

export default ReactCareer
