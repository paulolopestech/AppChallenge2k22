import { Link } from 'react-router-dom';
import './index.css';

function Selecionar() {
  return(
    <div className='select'>
        <h1>BEM VINDO!</h1>
        <div className='contain'>
            <h2 className='botao' id='botao'><Link to='/home' className='blink'>Sou um Cliente</Link></h2>
            <h2 className='botao'><Link to='/instalador' className='blink'>Sou Instalador</Link></h2>
        </div>
    </div>
  );
}

export default Selecionar;
