
import './App.css'
import DogPicture from './components/DogPicture'
import DogFacts from './components/DogFacts'
import SetCopyrightDate from './components/CopyrightDate'
import DogHeading from './components/DogHeading'

function App() {

  return (
    <>
        <DogHeading />
        <DogPicture />
        <DogFacts />
        <br />
        <SetCopyrightDate />
    </>
  )
}

export default App
