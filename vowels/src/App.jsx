import { useState } from 'react'
import './App.css'
import SubmitButton from './components/SubmitButton'
import InputField from './components/InputField'
import DisplayWord from './components/DisplayWord'

function App() {
    
    const [word, setWord] = useState([])
    
    const targetWord = () => {
        let newWord = document.getElementById('input').value
        let newData = [...word, newWord]
        setWord(newData)
    }
    

    return (
        <div className='App'>
            <h1>React Vowels</h1>
            <InputField />
            <SubmitButton handleClick={targetWord}/>
            <div>
                <DisplayWord word={word} />
            </div>
        </div>
    )
}

export default App
