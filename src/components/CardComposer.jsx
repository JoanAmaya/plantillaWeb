import "./styles/cardHome.css";
import CardHome from "./CardHome";
import {useState} from "react";
import {useEffect} from "react";

function CardComposer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://my.api.mockaroo.com/deportes.json?key=8d138f80")
        .then(response => response.json())
        .then(data => {setData(data);});
    }, []);
    const valuesRunning = () => {
    let valuesRunning = [];
    let valuesCycling = [];
    let valuesSwimming = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].deporte === "running") {
            valuesRunning.push(<CardHome imageUrl="https://plus.unsplash.com/premium_photo-1669021454415-1e4d4d55af33?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                deporte="Running" horas={data[i].horas} minutos={data[i].minutos} ciudad={data[i].ciudad} distancia={data[i].longitud}  />    )
        }
        if (data[i].deporte === "cycling") {
            valuesCycling.push(<CardHome imageUrl="https://www.trainerroad.com/blog/wp-content/uploads/2021/11/benefits-of-cycling.jpg"
                deporte="Cycling" horas={data[i].horas} minutos={data[i].minutos} ciudad={data[i].ciudad} distancia={data[i].longitud}  />    )
        }
        if (data[i].deporte === "swimming") {
            valuesSwimming.push(<CardHome imageUrl="https://i0.wp.com/blog.myswimpro.com/wp-content/uploads/2023/10/freestyle-stroke-breathing-technique-myswimpro.jpeg?fit=1500%2C1000&ssl=1"
                deporte="Swimming" horas={data[i].horas} minutos={data[i].minutos} ciudad={data[i].ciudad} distancia={data[i].longitud}  />    )
        }
    }
    return [valuesRunning, valuesCycling, valuesSwimming];  
}
  return (
    <div className="row">
        <div className="col-4"><h1 className="custom-title" >Running</h1>
        <div className="row">
        {valuesRunning()[0]}
        </div>
        </div>
        <div className="col-4"><h1 className="custom-title">Cycling</h1>
        <div className="row">
        {valuesRunning()[1]}
        </div>
        </div>
        <div className="col-4"><h1 className="custom-title">Swimming</h1>
        <div className="row">
        {valuesRunning()[2]}
        </div>
        </div>
    </div>
    
    

    
  );
}

export default CardComposer;