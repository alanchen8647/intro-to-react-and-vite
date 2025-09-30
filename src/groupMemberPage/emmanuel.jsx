import react from 'react';
import ePhoto from "../assets/e.jpg"; 

function Emmanuel() {
    return (
        <>
            <div>
                <img className="profilePic" src={ePhoto}></img>
            </div>
            <div>
                <h2>Emmanuel's Page</h2>
                <p>Hi! I am Emmanuel. I am a senior majoring in Computer Science. Looking forward to working with you!</p>
            </div>
        </>
    );
}

export default Emmanuel;
