import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"
import Navbar from './components/Navbar';
import PhotoCardList from './components/PhotoCardList';
import History from './components/History';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  const apikey = "563492ad6f91700001000001bb28cd089e304f1db7c3ea1dc6bd09b1";
  const url = "https://api.pexels.com/v1/search?query=";
  const [state, setState] = useState({
    search: "",
    results: [],
    his:[]
    
  });

  const[history, setHistory] = useState([]);
  const [fav, setFav] = useState([]);
  const typeSearch =(e) =>{
    let search = e.target.value;

    setState(prevState=>{
      return{...prevState, search:search}


    });
    
  }
  
  

  const parseSearch =(e)=>{
    if(e.key==="Enter"){
      
      axios.get(url + state.search+"&per_page=30&page=1",{
        headers:{
          "Authorization" : `${apikey}`
        }  
      }).then(({data})=>{
        let results = data.photos;
        
        setState(state=>{
          return{...state, results:results}
        });
        
      });
      
        setHistory([...history, state.search])
      
    }
  }
  const addFav=(e)=>{
    let favorite = e.target.value;
    setFav(fav=>{
      return{...fav, favorite}
    })
  }
  
  
  useEffect(()=>{
    console.log(history);
    console.log(fav);
  });
 



  return (
    <Router>
    <div className="App">
      
      <main>
        <Navbar typeSearch={typeSearch}  parseSearch ={parseSearch}></Navbar>
        
        <PhotoCardList results={state.results} ></PhotoCardList>

        <Route path="/history" render={()=><History history={history}></History>}></Route>

      </main>
    </div>
    </Router>
  );
}

export default App;
