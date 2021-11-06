import { useState } from 'react';
import './App.css';
import Image from './Components/Image';
import Search from './Components/Search';
import Button from './Components/Button';


function App() {
  const[text, setText] = useState("");
  const changeText = (e) =>{
    setText(e.target.value);
  }
  return (
    <div className="App">
      <div className="wrapper">
        {text ? <h2>{text}</h2> : <Image />}
      </div>
      <div className="search">
        <Search Change={changeText} />
      </div>
      <div className="buttons">
        <Button name="Google Search"/>
        <Button name="I'm Feeling Lucky"/>
      </div>
    </div>
  );
}

export default App;
