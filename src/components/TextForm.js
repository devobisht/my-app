import React ,{useState} from 'react'

export default function TextForm(props) {

    const clickfunction=() =>{
        let newText=text.toUpperCase();
        setText(newText)// 12 line is to use add text in setText box by  event listner set trget and put value
    };
    //convert to lower case latter
    const chnglowerCase=() =>{
        let newText=text.toLowerCase();
        setText(newText)// 12 line is to use add text in setText box by  event listner set trget and put value
    };

    //text clear
    const heandleClearText = ()=>{
        let clearText='';
        setText(clearText);
    };
    //remove extra spaces by DEvbisht RegexFunction
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));

    }
    const onChangeText=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
<>
 <div>
     
     <div className="container">
     <h1> {props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" id="myForm" rows="8" value={text} onChange={onChangeText}></textarea>

        </div>  
        <button className="btn btn-warning mx-2" onClick={clickfunction}>convert to uprcase</button> 
        <button className="btn btn-primary mx-2" onClick={chnglowerCase}>convert to lwrcase</button> 
        <button className="btn btn-danger mx-2" onClick={heandleClearText}>clear</button> 
        <button className="btn btn-danger mx-2" onClick={handleExtraSpaces}>removeExtraSpaces</button> 
        
    </div>         
 </div>

 <div>
     <h2>Summery</h2>
     <p>{text.split(' ').length-1} word and {text.length} text</p>
     <h3>Priview</h3>
     <p>{text.length>0?text:"Enter text here"}</p>
 </div>
 </>
    )
}
