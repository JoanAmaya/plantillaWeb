import './styles/loginCard.css';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function LoginCard() {
  return (
    <div className="card" style={{width : "30rem"}}>
    <div className="card-body">
    <h5 className="card-title custom-text">Log In</h5>
    <h6 className="card-subtitle mb-2 text-muted custom-values">Email</h6>
    <Form.Group className="mb-6" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email"/>
    </Form.Group>
    <h6 className="card-subtitle mb-2 text-muted custom-values">Password</h6>
    <Form.Group className="mb-6" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Enter password"/>
    </Form.Group>
    <Link to ="home">
    <button className='btn btn-primary custom-buttom'>Log In</button></Link>
  </div>
</div>
  );
}

export default LoginCard;