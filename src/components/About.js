import { useNavigate } from "react-router-dom";
import '../Who.css';
import { Make_Active } from './Navbar';
import { styles2 } from "./who";
import { css,StyleSheet } from "aphrodite";

function About(){ 
  const nvigate= useNavigate();
  function x(){
    Make_Active("projects");
    nvigate("/projects");

  }
  
  
return(
    <>
     <div className="container  mt-3     ">
       <div className='row '>
       <a className={`Text_Big ${css(styles2.Text_Double)}  `}>
        About Me
        </a>
        </div>
       <div className='row'>
        <div className='  col-md-1 col-lg-1 col-xl-1 col-2'>
          <div className='Big_Line'></div>
        </div>
       </div>
       <div className='row '>
        <div className=' col-md-1 col-lg-1 col-xl-1 col-2'>
          <div className='Small_Line'></div>
        </div>
       </div>
        
        <div className='row mt-5'>
          <div className="col-11">
          <b className={`Text_Small ${css(styles2.Text_Big)}`} >I am Nehad Shretah from Latakia, Syria ,  I study artificial intelligence in the  faculty  of  Information  Engineering, I am also a front-end developer and I am good at using html, css, bootstrap, js and react.js, I can develop and maintain front-ends, create responsive website designs,  implement website design for mobile and desktop devices, I also manage software workflows, fix bugs, and test websites for usability , you can see my projects :
          </b></div>
          </div>
       <div className='row mt-4 justify-content-center  '>
        <div className="col-5 ">
        <button className={`More col-xs-12 col-ms-12 col-5  ${css(styles2.Moro)}`} onClick={x} >My Projects</button>
       </div>
       </div>
       </div>
    </>
)
}
export default About;