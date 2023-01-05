import { useState } from "react";

function TextArea(props) {
    const [text, setText] = useState('')
    const darkStyle={
        backgroundColor:"black",
        color:'grey',
        border:'none'
    };
    const toUpper = () => {
        let newText = text.toUpperCase()
        setText(newText)
       props.showAlert('success','Text is converted to uppercase')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const toLower=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('success','Text is converted to lowercase')
    }
    const Clear=()=>{
        setText('')
    }
    const Copy=()=>{
        let x=document.getElementById('exampleFormControlTextarea1')
        x.select();
        navigator.clipboard.writeText(x.value);
    }
    const ExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Eg textarea</label>
                <textarea className='form-control'style={{backgroundColor:props.mode==='dark'?'rgb(33,37,41)':'white',color:props.mode==='dark'?'white':'black'}}placeholder='enter your text here'value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} style={darkStyle} onClick={toUpper} >To UpperCase</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={toLower} >To LowerCase</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={Clear} >Clear</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={Copy} ><i className="material-icons" style={{fontSize:20}}>content_copy</i></button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={ExtraSpaces} >Remove ExtraSpaces</button>
        </div>
        <div className="container my-3">
            <h1 style={{color:"black"}}>Your Text Summary</h1>
            <p><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length}-words {text.length}-characters</strong></p>
        </div>
        </>
    )
}

export default TextArea;
