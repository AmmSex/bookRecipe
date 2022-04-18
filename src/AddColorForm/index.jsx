import React, {useRef, useState} from 'react'
import useInput from '../UseInput/index.jsx'
import useColors from '../ColorProvider'

const AddColorForm = () => {

    const [txtTitle, setTxtTitle] = useInput('')
    const [hexColor, setHexColor] = useInput('#000000')
    //const txtTitle = useRef(); //ссылка на текстовое поле
    //const hexColor = useRef(); // ссылка на 16-ый код
    const {onNewColor} = useColors();

    const submit = e => {
        e.preventDefault();
        // const title = txtTitle.current.value;
        // const color = hexColor.current.value;
        onNewColor(txtTitle.value, hexColor.value);
        setTxtTitle();
        setHexColor();
    }

    return(
        <form onSubmit={submit}>
            <input {...txtTitle} type='text' placeholder='color title...' required/>
            <input {...hexColor} type='color' required/>
            <button>ADD</button>
        </form>
    );
}

export default AddColorForm