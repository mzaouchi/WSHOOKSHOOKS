import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={()=> setShow(!show)}>Show</button>
      {
        show && <Counter/>
      }
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={4} readOnly />
    </div>
  );
}

export default App;
