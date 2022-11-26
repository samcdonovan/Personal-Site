
export default function Contact() {

    return (

        <div className="middle-container">

            <div className="contact-container container-fluid">
                <form id="contact-form" action="https://formsubmit.co/c2108a5bb15a8e233f4479c680186dbe"
                    method="POST"
                >
                    {/* Honeypot */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    {/* Disable captcha */}
                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_next" value="https://samcdonovan.netlify.app/contact" />

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