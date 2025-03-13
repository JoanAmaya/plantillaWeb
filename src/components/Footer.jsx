import props from 'prop-types';
import "./styles/footer.css"
import {useState} from 'react';
import {useEffect} from 'react';
function Footer() {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/usuarios2.json?key=8d138f80").then(response => response.json()).then(data => setData(data))
    },[]);
    const handleData = () =>{
        if(data){
            return data;
        }
    }
    return(

        <footer className="footer custom-footer">
        <div className="container">
          <span className='custom-span'>{data ? data.nombre : ""}</span>
          <span className='custom-span'>{data ? data.horasRunning : ""}:{data ? data.minutosRunning: ""}</span>
          <span className='custom-span'>{data ? data.horasCycling: ""}:{data ? data.minutosCycling: ""}</span>
          <span className='custom-span'>{data ? data.horasSwimming: ""}:{data ?data.minutosSwimming: ""}</span>
          

        </div>
      </footer>
    );
  }
  
  export default Footer;