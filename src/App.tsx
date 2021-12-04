import React from 'react';
import './App.css';
import Button, {ButtonTypes} from "./Components/Button";
import {deleteEmpty} from "./Utils/Helpers";


// The return value type is JSX.Element
const App:React.FC=():JSX.Element=> {
  const handleButtonClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{

  }

 // deleteEmpty<{}>({})
  return (
    <div className="App">
      <Button
        type={ButtonTypes.submit}
        text={'Title'}
        onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
