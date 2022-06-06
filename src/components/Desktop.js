import React from 'react'
import { Route } from 'react-router-dom';
import logo1 from '../images/logo1.svg' ;
import Welcome from '../pages/Welcome';
import Products from '../pages/Products';
import MainHeader from './MainHeader';
import './desktop.css';


const Desktop = () => {
    return (
        <div className="desktop">
           
   
<div className='container'>
<div className='top'>
<div>
<MainHeader />
 <main>
   <Route path='/welcome'>
     <Welcome />
   </Route>
   <Route path='/products'>
     <Products />
   </Route>
 </main>
 </div>
</div>

<img className='img' src={logo1} />
<div className='center'>Our Commitment<br/>to Quality</div>
      <div className='center2'>We offer Ready to Assemble (RTA) cabinets that are KCMA certified.<br/> KCMA certified cabinets are recognized in the marketplace as a <br/>quality product able to perform after a rigorous battery to tests<br/> simulating years of household use.</div>
      <div className='center3'>BROWSE OUR CABINES</div>
 
  
</div>
 
        </div>
    )
}
export default Desktop;
