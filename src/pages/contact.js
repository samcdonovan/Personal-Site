
export default function Contact() {
    /*
     <form
            action="https://formsubmit.co/c2108a5bb15a8e233f4479c680186dbe"
            method="POST"
        >
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <input type="hidden" name="_captcha" value="false" />

            <div className="form-container">
                <p>
                    Want to write me an email? Fill in the form below and I should respond
                    within 1 to 3 working days!
                </p>
                <div className="name-fields">
                    <div className="name-container">
                        <input
                            type="text"
                            placeholder="First name"
                            id="first-name"
                            name="first-name"
                            required="required"
                        /><br />
                    </div>

                    <div className="surname=container">
                        <input
                            type="text"
                            placeholder="Surname"
                            id="surname"
                            name="surname"
                            required="required"
                        /><br />
                    </div>
                </div>

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                        required="required"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Your email address"
                        id="email"
                        name="email"
                        required="required"
                    /><br />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Write your message here..."
                        id="message"
                        name="message"
                    />
                </div>
                <button type="submit">Send!</button>
            </div>
        </form>
        */
    return (

        <div className="middle-container">

            <div className="contact-container container-fluid">
                <form id="contact-form">

                    <div class="row">
                        <div class="col-md-6">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Your name" />
                        </div>

                        <div class="col-md-6">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" className="form-control" placeholder="Your email" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field">
                            <label for="message">Message</label>
                            <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea" placeholder="Your message"></textarea>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg">SEND</button>
                </form>
                {/*
        
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>London, UK</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                */}
            </div>
        </div>
    )
}