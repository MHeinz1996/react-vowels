// Component to display the useState onto the document

function DisplayWord(props) {

    // Initiate a counter
    let count = 0

    // Function that will highlight and count vowels
    const highlightVowels = () => {
        let elements = []   // used to create elements ex. Test -> [T, <span>e</span>, s, t]
        let li = [] // used to hold a list of all of the elements, acts as a word history
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        
        // Loops through each word in the props.word list
        for(let word of props.word) {
            // Loops through each letter in that word
            for(let i=0; i<word.length; i++) {
                if(vowels.includes(word[i])) {
                    // If that letter is a vowel, push a span with className="vowel" to the elements array
                    // in index.css, create a style for .vowel so that those letters are red
                    elements.push(<span className="vowel" key={count}>{word[i]}</span>)
                    // increment the vowel counter
                    count++
                } else {
                    // if its not a vowel, just push that letter to the elements array
                    elements.push(word[i])
                }
            }

            // This just adds the vowel counter to the end of the elements array
            if(elements.length > 0) {
                elements.push(`: ${count} vowels`)
            }

            // Once the element array is filled, we will push that element to the li array so that it can print out our history
            // and reset both the counter and the elements array for the next loop
            li.push(<li key={word}>{elements}</li>)
            count = 0
            elements = []
        }

        // Once the li array is filled (the history)
        return li
    }

    return (
        <ul className="vowel-history">
            {highlightVowels()}
        </ul>
    )

}

export default DisplayWord