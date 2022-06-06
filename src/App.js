import { Route } from 'react-router-dom';
import logo1 from './images/logo1.svg' ;

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';

function App() {
  return (
   
   
<div className='container'>
<div className='top'>
<div><MainHeader />
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
   
</div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
