import  './App.css'

import React, { useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

const App=()=>{
    // state={
    //   progress:0
    // }

    const [progress, setProgress] = useState(0)
    

// apiKey=process.env.REACT_APP_NEWS_API
   const apiKey="477e7121ca134a7390b5364dac57a22b"

    return (
      <BrowserRouter>
     
      <Navbar/> 
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
      
      <Routes>

       <Route  path="/" element={ <News setProgress={ setProgress} apiKey={apiKey} key="general" pageSize={5} country='in' category="general"/>}>  </Route>
       <Route  path="/sports"   element={ <News setProgress={ setProgress} apiKey={ apiKey} key="sports"  pageSize={5} country='in' category="sports"/>}> </Route>
       <Route  path="/entertainment"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="entertainment"  pageSize={5} country='in' category="entertainment"/>}>  </Route>
       <Route  path="/health"  element={ <News setProgress={ setProgress} apiKey={ apiKey} key="health"  pageSize={5} country='in' category="health"/>}> </Route>
       <Route  path="/science"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="science"  pageSize={5} country='in' category="science"/>}>  </Route>
       <Route  path="/technology"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology"  pageSize={5} country='in' category="technology"/>}>  </Route>
       <Route  path="/business"  element={ <News setProgress={ setProgress} apiKey={ apiKey} key="business"  pageSize={5} country='in' category="business"/>}> </Route>
      
      </Routes>
      
    
      </BrowserRouter>
    )
  }
  export default App
