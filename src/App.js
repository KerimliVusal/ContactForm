import { useState ,useEffect} from 'react';
import './App.css';
import Container from './containers/container';
import MyContext from './context';
import Load from './components/loading';
import { HashRouter } from 'react-router-dom';

function App() {
  const[loadingtimer,setLoadingtimer]=useState(true)
  const[contactdata,setContactdata]=useState([])
  const sharedData = {
    contactdata,
    setContactdata
  };
  useEffect(()=>{
setTimeout(()=>{
setLoadingtimer(false)
},4000)

  },[])
  useEffect(() => {
    const storedFormData = localStorage.getItem('form');
    if (storedFormData) {
      setContactdata(JSON.parse(storedFormData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(contactdata));
  }, [contactdata]);


  return (
    <div className="App">
      {loadingtimer?<Load/>
      :
       <MyContext.Provider value={sharedData}>
   <Container/>
   </MyContext.Provider> 
  }
    </div>
  );
}

export default App;
