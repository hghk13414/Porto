import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGithub, faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons'
import { styles2 } from './who';
import { css } from 'aphrodite';
import{faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Who.css';
import { Link } from 'react-router-dom';
function Contact(){
return(
    <>
    <div className="container  mt-3">
    <div className='row '>
       <a className={`Text_Big ${css(styles2.Text_Double)}  `}>
    Contact With Me
        </a>
        </div>
        <div className='row'>
        <div className=' col-md-1 col-lg-1 col-xl-1 col-2'>
          <div className='Big_Line'></div>
        </div>
       </div>
       <div className='row '>
        <div className=' col-md-1 col-lg-1 col-xl-1 col-2'>
          <div className='Small_Line'></div>
        </div>
       </div>
       <div className='row mt-5'>
        <div className={`text-center Text_Hav ${css(styles2.Text_Double)} `}> Have You Any Qestions?</div>
       </div>
       <div className='row mt-4'>
        <div className={`text-center Text_Small ${css(styles2.Text_small)}`} > I'M AT YOUR SERVICE</div>
    </div>
    <div className='row  text-center'>
      <div className='col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-5 mt-lg-5 mt-md-5 mt-4'>
      <Link to="https://www.facebook.com/nehad.shretah.31" target='_blank'>
         <FontAwesomeIcon icon={faFacebook} id='Facebook'  /> 
      </Link>
         </div>
      
      <div className='col-xl-3 col-lg-3 col-md-3 col-12 mt-5'>
      <Link to="https://t.me/nehadshretah" target='_blank'>
        <FontAwesomeIcon icon={faTelegram} id='Env'  />
      </Link>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-3 col-12  mt-5 '> 
      <Link to="https://www.linkedin.com/in/nehad-shretah-059379252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} id='Linked'  />
      </Link>
      </div>
      <div className='col-xl-3 col-lg-3 col-md-3 col-12 mt-5'><FontAwesomeIcon icon={faGithub}  id='Git' /></div>
     
    </div>
    </div>
    
   
     
    </>
)

}
export default Contact;