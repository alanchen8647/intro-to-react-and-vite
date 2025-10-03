import React from "react";

function Ardit() {
    return (
        <div>
            <style>
                {`
                .interest-message {
                    color: #fff;
                    background: #007acc;
                    padding: 12px 20px;
                    border-radius: 8px;
                    margin: 16px 0;
                    font-weight: bold;
                    font-size: 1.1rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                .goal-message {
                    color: #222;
                    background: #ffe066;
                    padding: 12px 20px;
                    border-radius: 8px;
                    margin: 16px 0;
                    font-weight: bold;
                    font-size: 1.1rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                `}
            </style>
            <h1>How are you?</h1>
            <h2>Ardit's Page</h2>
            <p>Hi! I am Ardit. I am a Junior majoring in Computer Science. I want to learn to do things that matter in life.</p>
            <div className="interest-message">
                I am interested in learning more JavaScript!
            </div>
            <div className="goal-message">
                I want to become a software engineer, but I want to find the time to really hone my skills.
            </div>
        </div>
    );
}


export default Ardit;

