import { useState } from "react";
import jPhoto from "./assets/j.jpg";
import yPhoto from "./assets/y.png";
import aPhoto from "./assets/a.jpg";
import ePhoto from "./assets/e.png";
import "./App.css";

function App() {
    
    return (
        <>
            <h1>Project Team - EYJA</h1>
            <div className="card">
                    <img src={jPhoto} className="logo react" alt="React logo" />
                    <img src={yPhoto} className="logo react" alt="React logo" />
                    <img src={aPhoto} className="logo react" alt="React logo" />
                    <img src={ePhoto} className="logo react" alt="React logo" />
            </div>

        </>
    );
}

export default App;
