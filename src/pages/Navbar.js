import React from 'react'
import Services from './Services'
import Logo from '../items/logo.png'
import Text from '../items/text.png'
import Background from '../items/bg-image.png'
import { Grid } from '@material-ui/core'
import { BrowserRouter, Link } from 'react-router-dom'

function Navbar() {
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
        <Link class="nav-link mr-3" href="" to="/" style={{color:"#0B5395"}}>Home</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-3" href="#"style={{color:"#0B5395"}} >Dashboard</a>
      </li>
      <li class="nav-item">
        <Link class="nav-link mr-3" href="#" to='/partners' style={{color:"#0B5395"}} >Partners</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link mr-3" href="#" style={{color:"#0B5395"}} >Advisors</Link>
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
<div style={{backgroundImage:`url(${Background})`,opacity:0.8,
backgroundSize:"100% 100%;",
backgroundRepeat:'no-repeat',

}}
>
<p style={{fontWeight:'600',fontSize:"56px",paddingTop:200,textAlign:'center',height:56,color:'white'}}>Ekkel AI</p>
    <p style={{fontWeight:'500',fontSize:'30px',height:450,paddingTop:80,color:'white',marginBottom:0,paddingBottom:20,textAlign:"center"}}>Nullam euismod placerat mi, vel congue nunc tristique eget.<br/> Sed sit amet dui ut ipsum commodo sollicitudin et sed elit.
    <br/>
    <button className="btn" style={{color:"white", backgroundColor:"#FFBA38",marginTop:50}}>
        Get Started

    </button>
    </p>
</div>
 
        </>
    )
}

export default Navbar
