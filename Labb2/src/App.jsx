import { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button';

import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import DogPicture from './components/DogPicture'
import DogFacts from './components/DogFacts'
import SetCopyrightDate from './components/CopyrightDate'
import DogHeading from './components/DogHeading'

function App() {

    const [exist, setExist] = useState(false);

    const handleColor = useCallback(() => {
        const styleBak = {
            display: exist ? 'none' : ''
        }
        return styleBak;
      }, [exist]);

  return (
    <>
        <Button variant="outline-danger" onClick={() => setExist(e => !e)}>
            Remove everything
        </Button>
        <br />
        <br />
        <div style={handleColor()}>
            <DogHeading />
            <DogPicture />
            <br />
            <br />
            <DogFacts />
            <br />
            <SetCopyrightDate />
        </div>
    </>
  )
}

export default App
