
import './App.css';

import React  from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Switch } from 'react-router-dom';



// export default class App extends Component {
  const App =() =>{
   const pageSize = 15;
  // apiKey = "8b3f07da7b644fa7a5081eea23dc3e26" ;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <LoadingBar
        color='#f11946'
        progress={10}
       
      /> */}
         {/* <Switch> */}
         {/* <Link to ="/"> general</Link> 
         <Link to ="/business"> business</Link> 
         <Link to ="/entertainment"> entertainment</Link> 
         <Link to ="/health"> health</Link> 
         <Link to ="/general"> general</Link> 
         <Link to ="/science"> science</Link>
         <Link to ="/sports"> sports</Link> 
         <Link to ="/technology"> technology</Link>   */}
        {/* <Route exact  path="/" ><News  pageSize ={9}  country ="in" category ="general"/></Route>
        <Route exact path="/business"><News    pageSize ={9}  country ="in"category ="business"/></Route>
        <Route exact path="/entertainment"><News    pageSize ={9}  country ="in" category ="entertainment"/></Route>
        <Route exact path="/general" ><News  pageSize ={9}  country ="in" category ="general"/></Route>
        <Route exact path="/health" ><News   pageSize ={9}  country ="in" category ="health"/></Route>
        <Route exact path="/science" ><News   pageSize ={9}  country ="in" category ="science"/></Route>
        <Route exact path="/sports" ><News pageSize ={9}  country ="in" category ="sports"/></Route>
        <Route exact path="/technology" ><News   pageSize ={9}  country ="in"category ="technology"/ ></Route> */}
         <Routes>
              <Route exact path="/entertainment" element={<News apiKey ={apiKey} key="entertainment"   pageSize ={pageSize} country="in" category="entertainment" />}/>
              <Route exact path="/business" element={<News apiKey ={apiKey} key="business"   pageSize ={pageSize} country="in" category="business" />}/>
              <Route exact path="/" element={<News apiKey ={apiKey} key="general"   pageSize ={pageSize} country="in" category="general" />}/>
              <Route exact path="/general" element={<News apiKey ={apiKey} key="general"   pageSize ={pageSize} country="in" category="general" />}/>
              <Route exact path="/health" element={<News apiKey ={apiKey} key="health"  pageSize ={pageSize} country="in" category="health" />}/>
              <Route exact path="/science" element={<News apiKey ={apiKey} key="science"   pageSize ={pageSize} country="in" category="science" />}/>
              <Route exact path="/sports" element={<News apiKey ={apiKey} key="sports"   pageSize ={pageSize} country="in" category="sports" />}/>
              <Route exact path="/technology" element={<News apiKey ={apiKey} key="technology"   pageSize ={pageSize} country="in" category="technology" />}/>
            </Routes>
          {/* </Switch> */}
       
          
          
        
        </Router>
      </div>
    )
  // }
}

export default App;
// //  <Route exact path="/entertainment"><News key ="entertainment"  pageSize ={9}  country ="in" category ="entertainment"/></Route>
//
// if someone click on health , it get onlky the health news and , ifsomebvody click on sports hey gt\et only spot news . for this we have toseta react router 
// if yoou want ot vlock page loading then use link & to instead of href
