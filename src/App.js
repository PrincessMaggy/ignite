import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
