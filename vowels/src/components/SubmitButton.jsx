// Component to add a submit button to the document.
// It has a property that tells React to set the word from the input field and set it as the useState

function SubmitButton(props) {

    // Renders a submit button
    return (
        <button type="submit" onClick={props.handleClick}>Enter</button>
    )

}

export default SubmitButton