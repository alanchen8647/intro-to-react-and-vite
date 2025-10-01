import react from 'react';
import jpPhoto from '../assets/j.jpg'; // Ensure you have an image in the specified path
import './jianping.css';
import { Link } from 'react-router-dom';

function Jianping() {
    return (
        <>
            <div className="jianpingPage">
                <Link to="/"><button className='back-button'>Back</button></Link>
                <h2>Jianping (Also go by Alan)</h2>
                <img src={jpPhoto} alt="Jianping's photo" className='jianping-photo' />
                <p>Hi! I am Jianping. I am a senior majoring in Computer Science.</p>
                <div className="jianping-info-section">
                    <h2>Skills</h2>
                    <hr />
                    <ul>
                        <li>Proficient in Java, JS, Python, and beginner C++.</li>
                        <li>Experience with web development using React and Node.js, along with libraries such as Bootstrap and Tailwind.</li>
                        <li>Familiar with database management and SQL.</li>
                        <li>Strong problem-solving and fast learning skills.</li>
                    </ul>
                </div>
                <div className="jianping-info-section">
                    <h2>Hobbies</h2>
                    <hr />
                    <ul>
                        <li>Coding and building personal projects</li>
                        <li>Playing badminton and gaming</li>
                        <li>Working with people who are passionate about technology</li>
                        <li>Traveling with friends</li>
                    </ul>
                </div>
                <div className="jianping-info-section">
                    <h2>Goals of taking Web Engineering</h2>
                    <hr />
                    <ul>
                        <li>Fill knowledge gaps in web development, hopefully backend development.</li>
                        <li>Gain hand-on experience on industry level project and gain collaboration experience.</li>
                        <li>Learn best practices and modern tools in web development.</li>
                        <li>Secure a full-time job offer when I graduate (hopefully in a web development role).</li>
                    </ul>
                </div>
                <div className="jianping-info-section">
                    <h2>Experience</h2>
                    <hr />
                    <ul>
                        <li>Beta-Tester and User Experience Intern at Start-up Unadat (Summer 2024)</li>
                        <li>Part-Time tax assistant and tech support at W.C. Tax (Spring 2024 - Present)</li>
                        <li>Codepath Intermediate Web Development Fellow (Spring 2024)</li>
                        <li>Cuny Tech Prep Full-Stack Web Development Fellow (Jun 2024 - May 2025)</li>
                        <li>Tech Leadership Development Program Fellow (September 2025 - Present)</li>
                    </ul>
                </div>
                <button className="portfolio-button" onClick={() => window.open("https://alanchen8647.github.io/Profolio-website/website.html", "_blank")}>Check out my Portfolio Page!</button>
            </div>
        </>
    );
}

export default Jianping;
