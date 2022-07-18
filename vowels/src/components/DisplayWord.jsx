// Component to display the useState onto the document

function DisplayWord(props) {

    let count = 0
    const highlightVowels = () => {
        let elements = []
        let li = []
        let word_list = []
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        for(let i=0; i<props.word.length; i++) {
            word_list.push(props.word[i])
        }
        
        for(let word of word_list) {
            for(let i=0; i<word.length; i++) {
                if(vowels.includes(word[i])) {
                    elements.push(<span className="vowel" key={count}>{word[i]}</span>)
                    count++
                } else {
                    elements.push(word[i])
                }
            }
            if(elements.length > 0) {
                elements.push(`: ${count} vowels`)
            }

            li.push(<li key={word}>{elements}</li>)
            count = 0
            elements = []
        }

        return li
    }

    return (
        <ul className="vowel-history">
            {highlightVowels()}
        </ul>
    )

}

export default DisplayWord