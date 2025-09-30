import jPhoto from "./assets/j.jpg";
import yPhoto from "./assets/y.png";
import aPhoto from "./assets/a.jpg";
import ePhoto from "./assets/e.jpg";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
    const [intro, setIntro] = useState("default");
    const groupIntroduction = {
        "Jianping": "Hi! I am Jianping, also go by Alan. Currently a senior majoring in Computer Science. Hope to know you more!",
        "Yiming": "Hi! I am Yujin Kim. I am a senior majoring in Computer Science. Nice to meet you!",
        "Ardit": "Hi! I am Alan Chen. I am a senior majoring in Computer Science. Looking forward to working with you!",
        "Emmanuel": "Hi! I am Emmanuel Oyelade. I am a senior majoring in Computer Science. Excited to collaborate!",
        "default": "Click on our avatar to know more about us!"
    }


    
    return (
        <>
            <h1>Project Team - EYJA</h1>
            <div className="card">
                <a onClick={e=>setIntro("Jianping")}><img src={jPhoto} className="logo react" alt="Jianping's photo" /></a>
                <a onClick={e=>setIntro("Yiming")}><img src={yPhoto} className="logo react" alt="Yiming's photo" /></a>
                <a onClick={e=>setIntro("Ardit")}><img src={aPhoto} className="logo react" alt="Ardit's photo" /></a>
                <a onClick={e=>setIntro("Emmanuel")}><img src={ePhoto} className="logo react" alt="Emmanuel's photo" width="100" height="110"/></a>
            </div>
            <div className="card">
                <p>{groupIntroduction[intro]}</p>
                {intro !== "default" && <Link to={`/${intro.toLowerCase()}`}>Learn more about {intro}</Link>}
                
            </div>
        </>
    );
}

export default App;
