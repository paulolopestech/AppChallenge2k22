import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './tipo.css'
import { withTheme } from '@emotion/react';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      className = "botaoContainer"    
    >
      <ToggleButton value="web" className='botao' >TODOS</ToggleButton>
      <ToggleButton value="android" className='botao'>CABEADA</ToggleButton>
      <ToggleButton value="ios" className='botao'>RADIO</ToggleButton>
      <ToggleButton value="ios"className='botao'>SATÉLITE</ToggleButton>
    </ToggleButtonGroup>
  );
}
