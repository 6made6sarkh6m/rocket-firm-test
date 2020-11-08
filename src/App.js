import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"
import Navbar from './components/Navbar';
import PhotoCardList from './components/PhotoCardList';

function App() {
  const apikey = "563492ad6f91700001000001bb28cd089e304f1db7c3ea1dc6bd09b1";
  const url = "https://api.pexels.com/v1/search?query=";
  const [state, setState] = useState({
    search: "",
    results: [],
    history:[]
  });




  //const [search, setSearch] = useState("");

  const typeSearch =(e) =>{
    let search = e.target.value;

    setState(prevState=>{
      return{...prevState, search:search}


    });
    
    //setSearch(search);

    //console.log(search);
  }
  
  

  const parseSearch =(e)=>{
    if(e.key==="Enter"){
      
      //console.log(state.history);
      axios.get(url + state.search+"&per_page=30&page=1",{
        headers:{
          "Authorization" : `${apikey}`
        }  
      }).then(({data})=>{
        let results = data.photos;
        //console.log(data.photos);
        setState(state=>{
          return{...state, results:results}
        })
        
      });
      let history = state.search;
      setState(state=>{
        return{...state, history:history}
      })
    }
  }
  useEffect(()=>{
    console.log(state.history)
  });
 



  return (
    <div className="App">
      
      <main>
        <Navbar typeSearch={typeSearch}  parseSearch ={parseSearch}></Navbar>
        <PhotoCardList results={state.results}  ></PhotoCardList>
      </main>
    </div>
  );
}

export default App;
