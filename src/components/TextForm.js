import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');
  const handleupClick = () => {
    console.log("Clicked button ")
    let newText = text.toUpperCase();
    setText(newText)
    props.alertin(" Converted to Upper Case","success")
  }
  const handlelowClick = () => {
    console.log("Clicked button ")
    let newText2 = text.toLowerCase();
    setText(newText2)
    props.alertin(" Converted to Lower Case","success")

  }
  const handleonchange = (event) => {
    // console.log("on change ")
    setText(event.target.value)
  }
  const handlecolorchange =()=>{
   let colorch = document.getElementById('writetext').style.color = "green";
    setText(colorch)
    props.alertin(" Changed The Color","success")

  }

  
  
  return (
    <>
      <div className='container' >

        <h2 className='my-2 text-center'style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h2>
        <div className="my-3">
          <textarea className="form-control"  id="writetext" value={text} onChange={handleonchange} rows="8"></textarea>
          
        </div>
        <button  className="btn btn-primary my-2" onClick={handleupClick}>Convert to Uppercase</button>
        <button  className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button  className="btn btn-success my-2 mx-2" onClick={handlecolorchange}>Change color of text</button>
        
        



      <div className='container2 my-3 ' >
        <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          Your text details
        </h2>
        <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Total {text.split(" ").length} Words and {text.length} characters</p>
      </div>
      </div> 

    </>
  )
}
