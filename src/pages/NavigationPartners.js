import { Grid } from '@material-ui/core'
import React from 'react'
import Bleed from '../items/bleed.png'
import Engro from '../items/engro.png'
import Atics from '../items/atics.png'
import NBP from '../items/NBP.png'
import Black from '../items/black.png'
import LUMS from '../items/LUMS.png'
import Crescent from '../items/crescent.png'
import Punjab from '../items/punjab.png'
import Mehran from '../items/mehran.png'
import SS from '../items/SS.png'
import './NavigationPartners.css'
function NavigationPartners() {
    return (
        <div>
            <section id="tabs" className="project-tab">
          <div >
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Technology Partners</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Academic partners</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Grid container justifyContent="space-evenly">
                        <Grid item xs={12} sm={12} md={12} lg={2} >
                            <center>
                            <img src={Bleed} style={{margin:50}}/>
                            </center>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2}>
                            <center>
                            <img src={Engro} style={{marginLeft:30,marginTop:50}}/>
                            </center>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}  lg={2}>
                                <center>
                            <img src={Atics} style={{marginTop:50,paddingLeft:30}}/>
                            </center>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={2}>
                                <center>
                            <img src={NBP} style={{marginTop:50}}/>
                            </center>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={3}>
                                <center>
                            <img src={Black} style={{margin:50}}/>
                            </center>
                            </Grid>
                            
                    </Grid>
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <Grid container justifyContent="space-evenly">
                        <Grid item xs={12} sm={12} md={12} lg={2} >
                            <center>
                            <img src={LUMS} style={{margin:50}}/>
                            </center>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2}>
                            <center>
                            <img src={Crescent} style={{marginTop:50}}/>
                            </center>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}  lg={2}>
                                <center>
                            <img src={Punjab} style={{marginTop:50,}}/>
                            </center>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={2}>
                                <center>
                            <img src={Mehran} style={{marginTop:50}}/>
                            </center>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={2}>
                                <center>
                            <img src={SS} style={{margin:50}}/>

                            </center>
                            </Grid>
                            
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default NavigationPartners
