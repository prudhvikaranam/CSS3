const onChangeContainer = (containerId) => {
    if (containerId === 'postions') {
        const postionsInputContainer = document.getElementById('postionsInputCheckbox');
        if (!postionsInputContainer.checked) {
            document.getElementsByClassName('postions-block')[0].classList.add(`hide`);
        } else {
            document.getElementsByClassName('postions-block')[0].classList.remove(`hide`);
        }
    }else if(containerId === 'flexBoxs'){
        const postionsInputContainer = document.getElementById('flexBoxInputCheckbox');
        if (!postionsInputContainer.checked) {
            document.getElementsByClassName('flexBoxes-block')[0].classList.add(`hide`);
        } else {
            document.getElementsByClassName('flexBoxes-block')[0].classList.remove(`hide`);
        }
    }
}