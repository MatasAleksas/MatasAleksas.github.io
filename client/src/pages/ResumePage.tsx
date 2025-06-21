import {Link} from "react-router-dom";

function ResumePage() {
    return (
        <div className="page-content">
            <div className={"resume-header"}>
                <h1>Resume</h1>
                <a href={"/Matas_Aleksas_Resume_JUN_25_2.pdf"} className="download-button" target={"_blank"}
                   rel={"noopener noreferrer"}>
                    Download Full Resume (PDF)
                </a>
            </div>

            <section className={"resume-section"}>
                <p></p>
                <h2>Professional Summary</h2>
                <p>A passionate developer focused on building user-friendly websites and apps</p>
            </section>

            <section className={"resume-section"}>
                <h2>Experience</h2>
                <div className={"job"}>
                    <h3>IT/Digital Intern - L'Oréal</h3>
                    <p className={"job-date"}>Jun 2025 - Present</p>
                    <ul>
                        <li>Developed and maintained internal tools for various R&I teams</li>
                        <li>Collaborated with said teams to translate their ideas into high-quality apps</li>
                        <li>Utilized Microsoft PowerApps/Automate/Power BI to develop apps</li>
                    </ul>
                    <p></p>
                </div>

                <div className={"job"}>
                    <h3>Athletic Event Staff - University Of New Hampshire</h3>
                    <p className={"job-date"}>Sep 2024 - Present</p>
                    <ul>
                        <li>Collaborated with game day operations staff to ensure smooth event execution</li>
                        <li>Scanned tickets and managed crowd flow at entry points in a team of 3 people serving over 100 customers</li>
                        <li>Delivered exceptional customer service by assisting spectators with questions and concerns</li>
                    </ul>
                    <p></p>
                </div>

                <div className={"job"}>
                    <h3>Brand Representative - AllWork</h3>
                    <p className={"job-date"}>Dec 2024 - Mar 2025</p>
                    <ul>
                        <li>Provided personalized fragrance recommendations to customers, enhancing shopping experience</li>
                        <li>Collaborated with team members to optimize customer engagement strategies led to a 15% increase in sales</li>
                    </ul>
                    <p></p>
                </div>
            </section>

            <section className={"resume-section"}>
                <h2>Education</h2>
                <div className="education-item">
                    <h3>B.S. in Computer Science</h3>
                    <p>University Of New Hampshire | 2024 - 2028 | GPA: 3.03/4.00</p>
                    <p>Course work:</p>
                    <ul>
                        <li>Intro to Computer Science I (Python, JetBrains, Git)</li>
                        <li>Intro to Internet Technologies (HTML/CSS/JS, Networking)</li>
                        <li>Intro to Computer Science II (Java, OOP, Data Structures/Algorithms)</li>
                        <li>System Design (C, Memory Management, Low-level Programming)</li>
                    </ul>
                    <p></p>
                </div>
            </section>

            <section className={"resume-section"}>
                <h3>Like what you see?<Link to={"/contact"}> Get in contact</Link></h3>
            </section>
        </div>
    );
}

export default ResumePage;