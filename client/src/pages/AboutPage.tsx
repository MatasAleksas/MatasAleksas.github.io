import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className="page-content">
            <h1>About Me</h1>
            <p>
                Hello and welcome to my portfolio! I'm Matas.
            </p>
            <p>
                Currently I'm a Computer Science student at the University Of New Hampshire. I have a deep passion
                for creating and programming. My journey into technology and development started all the way back
                in middle school and high school when I would create games for fun. And since it expanded into different
                subjects in the field of programming.
            </p>
            <p>
                I'm currently not focused on a specific field in computer science currently but I'm in the process in
                figuring it out. But in general I enjoy programming in languages such as Java, Python, C, and C#. I also
                do some HTML, CSS, React, and TypeScript if you couldn't tell by the website...
            </p>
            <p>
                When I'm not at my computer or phone, I'm usually in the outdoors, hanging out with my friends, playing with my
                cats, or experiencing new things.
            </p>
            <p>
                I'm always eager to learn, grow, and collaborate with people on exciting projects. Feel free to check
                out some of my <Link to="/projects">projects</Link> to see what I've been up to, view my
                <Link to={"/resume"}> resume</Link> for a detailed look at my experience, or
                <Link to={"/contact"}> get in touch</Link> with me to say hello!
            </p>
        </div>
    );
}

export default AboutPage;