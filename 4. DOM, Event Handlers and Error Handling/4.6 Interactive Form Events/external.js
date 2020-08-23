function handleOnFocus(event) {
    console.log(event);
    let inputElement = event.target;
    addFocusClass(inputElement);
}

function addFocusClass(element) {
    element.classList.add("inFocus");
}

function handleOnBlur(event) {
    console.log(event);
    let inputElement = event.target;
    removeFocusClass(inputElement);

    let inputText = inputElement.value;
    console.log(`Text entered: ${inputText}`);
}

function removeFocusClass(element) {
    element.classList.remove("inFocus");
}

function handleSubmit() {
    console.log("Form submission recieved");
    if(isFormValid()) {
        alert('Form valid. Continuing submission.');
        return true;
    } else {
        console.log('Form has errors. Stopping submission');
        return false;
    }
}

function isFormValid() {
    return false;               //toggle true or false to control submission
}