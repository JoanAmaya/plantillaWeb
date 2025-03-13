import props from 'prop-types';
import {useState} from 'react';
import { Modal } from 'react-bootstrap';
function CardHome(props) {
    const imageUrl = props.imageUrl ? props.imageUrl : "";
    const deporte = props.deporte ? props.deporte : "";
    const horas = props.horas ? props.horas : "";
    const minutos = props.minutos ? props.minutos : "";
    const ciudad = props.ciudad ? props.ciudad : "";
    const distancia = props.distancia ? props.distancia : "";
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    function closeModal(){
        setIsOpen(false);
    };

    return (
        <>
        <div class="card custom-margin" style={{width: "18rem", 
                                                backgroundImage: `url(${imageUrl})`,
                                                backgroundSize: "cover",
                                                height: "250px", cursor: "pointer"}} onClick={openModal}>
        <div class="card-body">
          <h5 class="card-title">{deporte}</h5>
          
          <p class="card-text">Recorrido alrededor de la bahía de {ciudad} {distancia}k-{horas}:{minutos}h</p>
          
        </div>
      </div>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Body>
      <div class="card custom-margin" style={{width: "29rem", 
                                                backgroundImage: `url(${imageUrl})`,
                                                backgroundSize: "cover",
                                                height: "250px"}} onClick={openModal}>
        <div class="card-body">
          <h5 class="card-title">{deporte}</h5>
          
          <p class="card-text">Recorrido alrededor de la bahía de {ciudad} {distancia}k-{horas}:{minutos}h</p>
          
        </div>
      </div>
      <button onClick={closeModal} className='btn btn-primary'>close</button>
      </Modal.Body>
    </Modal>
      </>
      
    );
  }
  
  export default CardHome;