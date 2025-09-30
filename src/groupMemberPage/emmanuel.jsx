import react from 'react';
import ePhoto from "../assets/e.jpg"; 
import "./emmanuel.css";

function Emmanuel() {
    return (
        <>
            <div className="emmanuelPage">
                <div className="profileContainer">
                    <img className="profilePic" src={ePhoto}></img>
                </div>
                <div className="infoContainer">
                    <h1 className="heading">Emmanuel Oyelade</h1>
                    <div className="subtitlesContainer">
                        <h2 className="subtitle">Computer Science</h2>
                        <h2>&bull;</h2>
                        <h2 className="subtitle">Senior</h2>
                        <h2>&bull;</h2>
                        <h2 className="subtitle">Baruch</h2>
                    </div>
                    <div className="backgroundContainer">
                        <h2 className="sectionHeading">My Background</h2>
                        <p className="backgroundDescription">
                            I originally came to Baruch as an accounting major, because it seemed fairly interesting and I thought 
                            that it was a major that I was capable of doing. However, after seeing peoples programming projects online 
                            and researching what one can do with programming, I fell in love with it. So, I quickly changed my major from 
                            accounting to computer science as soon as it became an official major. Now, I am a computer science senior that 
                            has taken various classes in math and cis in with the sole purpose of picking up as many programming skills as 
                            possible while I am still in Baruch.
                        </p>
                    </div>
                    <div className="skillsContainer">
                        <h2 className="sectionHeading">Skills</h2>
                        <p className="skill">1. Beginner HTML:</p>
                        <p className="skillDescription">
                            I learned how to use HTML about 2 years ago. I know that there are a ton of
                            tags/elements that represent something on a web page. To be honest, I don't know 
                            most of the tags (some of them seem ultra-specfic), but I do know the most common tags
                            that can be used in pretty much all web pages (e.g. div, list, heading, etc.). I haven't
                            worked on any major original projects using HTML, but after a lot of practice I know how 
                            to break down websites by looking at them and then making clones of them by recreating 
                            their HTML.
                        </p>    

                        <p className="skill">2. Beginner CSS:</p>
                        <p className="skillDescription">
                            I learned CSS 2 years ago. I know how to use the different types of selectors to style specific 
                            elements, and how to link CSS to HTML in all the different ways (inline, internal, external). I'm 
                            also aware of the common types of styles (text, color, alignment), how to make pages responsive and 
                            fluid (flexbox, grid, media queries), and how to use developer tools to inspect the CSS of a website. 
                            Aside from the basic knowledge and application of CSS, I haven't used it to work in any major projects 
                            or collaborations.  
                        </p>

                        <p className="skill">3. Beginner JavaScript:</p>
                        <p className="skillDescription">
                            I learned how to use JavaScript a few months ago. I was able to make quick progress with the language 
                            by itself because I have used Python a few years before picking up JavaScript. Due to this, I know the 
                            syntax of Javascript, how to do loops, how to use conditionals, make functions, make arrays, and make objects.
                            When it comes to using JavaScript to complement HTML and make interactive websites, I don't have too much 
                            experience. I know how to use JS to effect elements in the DOM using query selectors and event listeners, but 
                            I have only used HTML + JavaScript to make very basic programs (e.g. rock, paper, scissors) and nothing complicated.
                        </p>
                            

                        <p className="skill">4. Git:</p>
                        <p className="skillDescription">
                            I learned how to use git 1 year ago. I originally learned how to use git on linux in the terminal by emulating 
                            linux on my windows device with a virtual linux machine. I eventually learned how to use git in windows by using 
                            git bash (it comes with git). Like my other skills, I don't have a lot of experience with git. However, I understand 
                            enough of it to confidently work on projects and maintain a history of my progress on projects that I may work on. I 
                            know how to use the commands that are part of the standard git workflow like <code>git add</code> to stage commits,  
                            <code>git commit</code> to make commits, and <code>git push</code> to push my commits to github. I The only thing from 
                            the git workflow that I don't know how to do yet is make pull requests.
                        </p>
                            

                        <p className="skill">5. Github:</p>
                        <p className="skillDescription">
                            I made my github account 1 year ago and learned how to use some of the basic features of github as well. I know how to 
                            make new repositories and keep them updated with <code>git push</code>, and I know how to use my ssh key to clone my 
                            repositories. I also know how to fork repositories so that I can work on other people's projects without ruining their 
                            original projects. For the most part, I am compfortable with the important features of github, however, I need to start 
                            being consistent with making projects in github because My github is a barren desert at the moment...
                        </p>
                    </div>
                    <div className="learnContainer">
                        <h2 className="sectionHeading">What I Want to Learn</h2>
                        <div className="skillDescription">
                            <p>
                                What I want to learn in this specific course is how to use industry strandard technologies
                                that most software developers use. I also want to collaborate with a team to make complex and 
                                useful projects that can be used by others. I hope that by the end of this course I aquire the 
                                necessary skills to start my own projects in an efficient manner and contribute to existing 
                                projects in meaningful ways.
                            </p>
                            <p>
                                In the context of what I want to learn at Baruch college in general, I honestly don't have a
                                definitive answer. But if I had to start with something I want to learn at the moment, I want to 
                                learn how to make the most out of the resources that I have access to in order to become a more
                                well rounded person.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Emmanuel;
