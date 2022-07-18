import { useState } from 'react'
import './App.css'
import SubmitButton from './components/SubmitButton'
import InputField from './components/InputField'
import DisplayWord from './components/DisplayWord'

function App() {
    
    // Use an array for the state so that we can keep a list of all words entered
    const [word, setWord] = useState([])
    
    // Takes the input from the text box and adds it to the word list whenever the submit button is pressed
    const targetWord = () => {
        let newWord = document.getElementById('input').value
        let newData = [...word, newWord]
        setWord(newData)
    }
    

    return (
        <div className='App'>
            <h1>React Vowels</h1>
            <InputField />
            <SubmitButton handleClick={targetWord}/>    {/* passes a prop called 'handleClick' to the button to trigger the 'targetWord' function */}
            <div>
                <DisplayWord word={word} /> {/* passes the word state as a prop to DisplayWord component */}
            </div>
        </div>
    )
}

export default App
