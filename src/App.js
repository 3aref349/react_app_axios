import React ,{ Component } from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter , Route ,Switch} from 'react-router-dom';
import Home from './component/Home'

import About from './component/About'
import Post from './component/post'

import Contact from './component/Contact'
import AddPrice from './component/AddPrice';
import MasterForm from './component/SForm/test'
import ConfirmPrice from './component/SForm/ConfirmPrice';
import Configrations from './component/Configrations';
import reduxForm from './component/PriceForm/form'
import Dashboard from './component/Reports/Dashboard'
import addPriceForm from './component/SForm/addPriceForm';
class App extends Component{


render(){


  return (
    <BrowserRouter>
    
      <Navbar />
      
      <Switch>
      <Route exact path='/home' component={Dashboard} />
      <Route exact path='/addprice' component={MasterForm} />
      
      <Route path='/confirm' component={ConfirmPrice} />
      <Route path='/configration' component={Configrations} />
      {/* <Route path="/:post_id" component={Post} /> */}
      </Switch>
     


    </BrowserRouter>
   

  );
}
}

export default App;
