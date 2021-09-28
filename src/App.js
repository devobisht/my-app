
import './App.css';
import DrakMode from './components/DrakMode';
import Nbar from './components/Nbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'



function App() {
  const [mode, setDarkMode] = useState('dark')

  const toogleMode= ()=>{
    if (mode==='light') {
      setDarkMode('dark')
    } else {
      setDarkMode('light')
    }
  }

  return (
    <>
    
<Nbar title='TitleProps' togMode={toogleMode} aboutchng='AboutProps'link='LinkProps' allMode={mode}/>


<TextForm heading='My Heading'/>
<DrakMode/>

    </>
  );
}

export default App;
