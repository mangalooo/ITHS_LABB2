import { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import DogHeading from './components/DogHeading'
import DogPicture from './components/DogPicture'
import DogFacts from './components/DogFacts'
import CopyrightDate from './components/CopyrightDate'

function App() {
    const [exist, setExist] = useState(true)

    const welcome = () => {
        return (
            <>
                <h1> Welcome to my dog page </h1>
                <br />
                <h3> Press the button to show the dog page </h3>
                <br />
                <br />
            </>
        )
    }

    const handleButton = useCallback(() => {
        const showOrHide = {
            display: exist ? 'none' : ''
        }
        return showOrHide
    }, [exist])

    return (
        <>
            {exist ? (
                <>
                    {welcome()}
                    <Button
                        variant="outline-success"
                        size="lg"
                        onClick={() => setExist((e) => !e)}
                    >
                        Show
                    </Button>
                </>
            ) : (
                <Button
                    variant="outline-danger"
                    onClick={() => setExist((e) => !e)}
                >
                    Hide
                </Button>
            )}
            <br />
            <br />
            <div style={handleButton()}>
                <DogHeading />
                <DogPicture />
                <br />
                <br />
                <DogFacts />
                <br />
                <CopyrightDate />
            </div>
        </>
    )
}

export default App
