import {matchPath,useLocation} from "react-router-dom";
import { styles2 } from "./who";
import { StyleSheet,css } from 'aphrodite';
import { Navbar,Container,Nav,NavDropdown,Button,Form  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Ph_Dark from '../Nehad_Shretah_Dark.jpg';
import Ph_Light from '../Nehad_Shretah_Light.jpg'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMoon,faSun,faBars } from '@fortawesome/free-solid-svg-icons';
import '../Who.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const styles3=StyleSheet.create({
x:{
  "@media(min-width:1401px)":{
    fontSize:'35px'
  },
  "@media  (min-width:751px) and (max-width:1400px)":{
    fontSize:'25px'},
  "@media  (min-width:501px) and (max-width:750px)":{
    fontSize:'22px'},
  "@media  (min-width:351px) and (max-width:500px)":{
    fontSize:'20px'
  },
  "@media  (min-width:251px) and (max-width:350px)":{
    fontSize:'18px'
  },
  "@media  (min-width:150px) and (max-width:250px)":{
    fontSize:'8px'
  }}
})
global.Helmet = Helmet;
var root = document.querySelector(':root');
function Text_Light(){
  root.style.setProperty('--big','#040404');
  root.style.setProperty('--small','#828d95');
  root.style.setProperty('--texto','#828d95');
  root.style.setProperty('--photos',`url(${Ph_Light})`);
  root.style.setProperty('--moon','#828d95');
  root.style.setProperty('--sun','#f53841');
  root.style.setProperty('--nav','#f8f9fa');
  root.style.setProperty('--scroll','#828d95');

}
function Text_Dark(){
  root.style.setProperty('--big','#f5f5fb');
  root.style.setProperty('--small','#d8dbdf');
  root.style.setProperty('--texto','#f5f5fb');
  root.style.setProperty('--photos',`url(${Ph_Dark})`);
  root.style.setProperty('--moon','#f53841');
  root.style.setProperty('--sun','#f5f5fb');
  root.style.setProperty('--nav','#292828');
root.style.setProperty('--scroll','#f5f5fb');

}

function Light_Md(){
  document.body.style.backgroundColor ='white';
 }
 function Dark_Md(){
  document.body.style.backgroundColor ='#121212';
 }

function Make_Sun(){
  suno();
Light_Md();
Text_Light();
}
function Make_Moon(){
  Moono();
Dark_Md();
Text_Dark();}
const r=['home','about','projects','contact'];
function Moono(){
  for(var i=0; i<r.length;i++){
  if(root.style.getPropertyValue(`--${r[i]}`)=='#f53841')
  {root.style.setProperty(`--${r[i]}`,'#f53841');}
  else{    root.style.setProperty(`--${r[i]}`,'#f5f5fb');}
}

}
  function suno(){
    for(var i=0; i<r.length;i++){
      
      if(root.style.getPropertyValue(`--${r[i]}`)=='#f53841')
      {root.style.setProperty(`--${r[i]}`,'#f53841');
      }
      else{    root.style.setProperty(`--${r[i]}`,'#828d95');}
    }

      }
      function Make_All_UnActive(){
        if(root.style.getPropertyValue(`--big`)=='#f5f5fb')
        {
          for(var i=0; i<r.length;i++){root.style.setProperty(`--${r[i]}`,'#f5f5fb');
          }
        }
        else{
          for(var i=0; i<r.length; i++){
            root.style.setProperty(`--${r[i]}`,'#828d95');
          }

        }
        
      }
      function Make_Active(a){
        Make_All_UnActive();
        root.style.setProperty(`--${a}`,'#f53841');
      }
  export{Make_Active};  

function  Navbaro() {
  useEffect(Make_Home_Active,[]);

  const nvigate= useNavigate();
  
   function Make_About_Active(){
    nvigate("about");
    Make_Active("about");   
   }
   function Make_Home_Active(){
    nvigate("/")
    Make_Active("home");   

   }
  


   function Make_Contact_Active(){
    nvigate("contact");
    Make_Active("contact");   

   }
   function Make_Projects_Active(){
    nvigate("projects");
    Make_Active("projects");   
   }
  return (
    <>
    <Navbar expand="lg" className=" Nav ">
      <Container center>
        <a  className={`port col-2 ${css(styles2.Text_small)}`}>.Portfilio</a>
        <Navbar.Toggle id="toggle">
        <FontAwesomeIcon icon={faBars} aria-controls="navbarScroll" id="scroll"/>
          </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" style={{color:'re'} }>
          <Nav
            className="me-auto my-2 my-lg-0 mt-3"
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <a className='u Home col-8' id="Home" onClick={Make_Home_Active}>Home</a>
            <a className='u About col-8' id="About" onClick={Make_About_Active}>About</a>
            <a className='u Projects col-8' onClick={Make_Projects_Active} >Projects</a>
            <a className='u Contact col-8'  onClick={Make_Contact_Active}>Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div className="d-flex justify-content-end mx-xl-5 mx-3 pt-3">
     <FontAwesomeIcon icon={faSun} id="Sun" className={`mx-xl-5 mx-4  ${css(styles3.x)}`}  onClick={Make_Sun}  />
     <FontAwesomeIcon icon={faMoon} id="Moon" className={`${css(styles3.x)} me-md-5`}  onClick={Make_Moon} />
      </div >
  </>
  );
  }  
    export default Navbaro;