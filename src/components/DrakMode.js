import React, { useState } from 'react'

export default function DrakMode(props) {

    const [mybutton, setButton] = useState('Enable Dark Mode')

    const [myTheme, setTheme] = useState({
        color:'#4e7abc',
        backgroundColor:'white'
    })
const changeColor=()=>{
    if (myTheme.color==='#4e7abc'){
        setTheme({
            color:'white',
        backgroundColor:'#4e7abc',
        });
        setButton('Enable Light Mode')
    }
    else{
        setTheme({
            color:'#4e7abc',
        backgroundColor:'white'
        })
        setButton('Enable Dark Mode')
    }

}
    return (
 <div className="container" style={myTheme}>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    <button className="btn btn-primary my-3" onClick={changeColor}>{mybutton}</button>    
 </div>
    )
}
