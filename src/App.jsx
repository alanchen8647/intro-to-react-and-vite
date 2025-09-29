import jPhoto from "./assets/j.jpg";
import yPhoto from "./assets/y.png";
import aPhoto from "./assets/a.jpg";
import ePhoto from "./assets/e.png";
import { useState , useEffect } from "react";
import "./App.css";

function App() {
    const [intro, setIntro] = useState("default");
    const groupIntroduction = {
        "Jianping": "Hi! I am Jianping, also go by Alan. Currently a senior majoring in Computer Science. Hope to know you more!",
        "Yujin": "Hi! I am Yujin Kim. I am a senior majoring in Computer Science. Nice to meet you!",
        "Alan": "Hi! I am Alan Chen. I am a senior majoring in Computer Science. Looking forward to working with you!",
        "Eunice": "Hi! I am Eunice Lee. I am a senior majoring in Computer Science. Excited to collaborate!",
        "default": "Click on our avatar to know more about us!"
    }


    
    return (
        <>
            <h1>Project Team - EYJA</h1>
            <div className="card">
                <a onClick={e=>setIntro("Jianping")}><img src={jPhoto} className="logo react" alt="Jianping's photo" /></a>
                <a onClick={e=>setIntro("Yujin")}><img src={yPhoto} className="logo react" alt="Yujin's photo" /></a>
                <a onClick={e=>setIntro("Alan")}><img src={aPhoto} className="logo react" alt="Alan's photo" /></a>
                <a onClick={e=>setIntro("Eunice")}><img src={ePhoto} className="logo react" alt="Eunice's photo" /></a>
            </div>
            <div className="card">
                <p>{groupIntroduction[intro]}</p>
                <button></button>
            </div>
        </>
    );
}

export default App;
