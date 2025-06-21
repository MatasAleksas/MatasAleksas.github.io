import { useForm, ValidationError } from "@formspree/react";
import './ContactPage.css';

function ContactPage() {
    // Hook handles form submission and state
    const [state, handleSubmit] = useForm("xjkredlj");

    // If the form was submitted successfully it shows a thank you message
    if (state.succeeded) {
        return (
            <div className={"contact-success"}>
                <h2>Thank You!</h2>
                <p className={"contact-success-text"}>Your message was sent successfully. I'll try get back to you as soon as possible.</p>
            </div>
        );
    }

    return (
        <div className="page-content">
            <h1>Contact</h1>
            <p className="contact-intro">
                Here is my contact information! I'm currently open to new opportunities and collaborations.
            </p>
            <p>
                If you have a question, idea, or just want to say hello, feel free!
            </p>

            <form onSubmit={handleSubmit} className={"contact-form"}>
                <div className="form-group">
                    <label htmlFor={"name"}>Your Name</label>
                    <input id={"name"} type={"text"} name={"name"} required />
                </div>

                <div className="form-group">
                    <label htmlFor={"email"}>Email Address</label>
                    <input id={"email"} type={"email"} name={"email"} required />
                    <ValidationError
                        prefix={"Email"}
                        field={"email"}
                        errors={state.errors}
                        className="validation-error"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor={"message"}>Message</label>
                    <textarea id={"message"} name={"message"} rows={6} required></textarea>
                    <ValidationError
                        prefix={"Message"}
                        field={"message"}
                        errors={state.errors}
                        className="validation-error"
                    />
                </div>

                <button type="submit" disabled={state.submitting} className={"submit-button"}>
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>

                <div className={"alternative-contact"}>
                    <h2>Other Ways to Connect</h2>
                    <p>You can find me on these platforms:</p>

                    <div className={"social-links"}>
                        <a href={"https://github.com/MatasAleksas"} target="_blank" rel="noopener noreferrer">Github</a>
                        <a href={"https://www.linkedin.com/in/matas-aleksas/"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;