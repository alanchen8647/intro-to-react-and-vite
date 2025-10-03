import React from "react";

function Ardit() {
    return (
        <div className="ardit-background">
            <style>
                {`
                .ardit-background {
                    min-height: 100vh;
                    width: 100vw;
                    background: linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ardit-card {
                    background: rgba(255,255,255,0.97);
                    border-radius: 18px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
                    padding: 40px 32px;
                    max-width: 420px;
                    width: 90vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .interest-message {
                    color: #fff;
                    background: #007acc;
                    padding: 12px 20px;
                    border-radius: 8px;
                    margin: 16px 0 0 0;
                    font-weight: bold;
                    font-size: 1.1rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    width: 100%;
                    text-align: center;
                }
                .goal-message {
                    color: #222;
                    background: #ffe066;
                    padding: 12px 20px;
                    border-radius: 8px;
                    margin: 16px 0 0 0;
                    font-weight: bold;
                    font-size: 1.1rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    width: 100%;
                    text-align: center;
                }
                h1, h2 {
                    margin: 0.5em 0;
                    text-align: center;
                }
                p {
                    max-width: 500px;
                    text-align: center;
                }
                `}
            </style>
            <div className="ardit-card">
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
        </div>
    );
}

export default Ardit;

