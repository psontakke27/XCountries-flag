import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  // const countries = [{"name":"Afghanistan","flag":"https://flagcdn.com/w320/af.png","abbr":"af"},
  //   {"name":"Albania","flag":"https://flagcdn.com/w320/al.png","abbr":"al"},
  //   {"name":"Algeria","flag":"https://flagcdn.com/w320/dz.png","abbr":"dz"},
  //   {"name":"Andorra","flag":"https://flagcdn.com/w320/ad.png","abbr":"ad"}
  //   ]
  const [countries, setCountries] = useState([]);
  
  useEffect(()=>{
    fetch(" https://xcountries-backend.azurewebsites.net/all")
       .then((res)=>{
        return res.json();
       })
       .then((data)=>{
        setCountries(data);
       })
       .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (

    <>
      {countries.length ? (<div style={{
            display: "flex",
            flexWrap: "wrap",
            gap:'2rem 2rem',
            margin:'20px'
      }}
    >
      
        {countries.map((country) => (
          <div 
            style={{
              border : '2px solid grey',
              width: '200px',
              height: '200px',
              display : 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems:'center',
              borderRadius:'5px',
              
              }}
          >
            <img src={country.flag}
             style={{
              width:"100px",
              height: "100px",
             }}
             alt={country.name}/>
            <h5 style={{textAlign :"center" }}>{country.name}</h5>
          </div>
        ))}

    </div>):(
      <h4>Loading....</h4>
    )}
    </>
    
  );
}

export default App;
