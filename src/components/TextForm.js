import React,{useState} from 'react'



export default function TextForm(props){
    const handleUpClick=()=>{
    //    console.log("upper case was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("convrtd to upper case,", "success")
    }
    const handleDownClick=()=>{
      //    console.log("upper case was clicked" +text);
          let newText=text.toLowerCase();
          setText(newText);
          props.showAlert("convrtd to lower case,", "success")
      }
      const handleClear=()=>{
        //    console.log("upper case was clicked" +text);
            let newText='';
            setText(newText);
        }
        const handleCopy=()=>{
          //    console.log("upper case was clicked" +text);
            
             navigator.clipboard.writeText(text);
             
             props.showAlert("copied to clipboard","success");

          }
          const handleExtraSpaces=()=>{
            //    console.log("upper case was clicked" +text);
                let newText=text.split(/[ ]+/);
                setText(newText.join(" "));
                props.showAlert("extra spaces removed","success")
                
            }
    const handleOnChange=(event)=>{
      //  console.log("On change");
        setText(event.target.value);
    }
    
    const[text,setText]=useState('');
   // text="nex text"//wrong way to change the state
  //  setTest("new text");
    return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='my-4'>{props.heading}</h1>
       <div className="mb-3">
        {/* {{ }}do braces qki javascrpt m object dle h styl wale line me*/}
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0}  className="btn btn-primary mx- 1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button >
    <button disabled={text.length===0} className="btn btn-primary mx- 1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx- 1 my-1" onClick={handleClear}>Clear Text</button >
    <button disabled={text.length===0} className="btn btn-primary mx- 1 my-1" onClick={handleCopy}>Copy Text</button >
    <button disabled={text.length===0} className="btn btn-primary mx- 1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button >
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
    )
}