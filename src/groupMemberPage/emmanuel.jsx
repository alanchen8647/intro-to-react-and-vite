import react from 'react';
import ePhoto from "../assets/e.jpg"; 
import "./emmanuel.css";

function Emmanuel() {
    return (
        <>
            <div className="profileContainer">
                <img className="profilePic" src={ePhoto}></img>
            </div>
            <div className="infoContainer">
                <h2>Emmanuel's Page</h2>
                <p>Hi! I am Emmanuel. I am a senior majoring in Computer Science. Looking forward to working with you!</p>
                <div>
                    <h2>My Background</h2>
                    <p>I originally came to Baruch as an accounting major, because it seemed like a major that I was capable 
                        of doing. However, after seeing peoples programming projects online and researching what one can do
                        with programming, I fell in love with it. So, I quickly changed my major from accounting to computer 
                        science as soon as it became an official major. Now, I am a computer science senior that has taken
                        various classes in math and cis in with the sole purpose of picking up as many programming skills as 
                        possible while I am still in Baruch.</p>
                </div>
                <div>
                    <h2>Skills</h2>
                </div>
                <div>
                    <h2>What I Want to Learn</h2>
                </div>
            </div>
        </>
    );
}

export default Emmanuel;
