import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './index.css'

export default function Navbar() {
  const [time, setTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {setTime(1)}, 1500);
    }, [time]);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, []);
  if(time === 1){
    return (
      <nav>
        {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className='items'><Link to={`/home`} className='link'>HOME</Link></li>
      <li className='items'><Link to={`/favoritos`} className='link'>FAVORITOS</Link></li>
      <li className='items'><Link to={`/`} className='link'>SAIR</Link></li>
    </ul>)
    }
  
    <button onClick={toggleNav} className="btn">____<br/> ____<br/> ____</button>
    </nav>
    );}
    else {
      return(<p></p>)
    }
  }