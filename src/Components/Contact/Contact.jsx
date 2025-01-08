import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validName = () => {
    let textReg = /\w{3,}/gi;
    const validText = textReg.test(name);
    setIsNameValid(validText);
  };

  const validEmail = () => {
    let emailReg = /\w+(\d{2})?@\w+\.\w+/gi;
    const validEmail = emailReg.test(email);
    setIsEmailValid(validEmail);
  };

  const validMessage = () => {
    let textReg = /\w{3,}/gi;
    const validText = textReg.test(message);
    setIsMessageValid(validText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validName();
    validEmail();
    validMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
    
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(
          "service_fw03hms",
          "template_i9576s2",
          templateParams,
          "gM0OrpTc1bKuT4vSe"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Form submitted successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("An error occurred. Please try again.");
          }
        );
    } else {
      alert("Please fill in the form correctly.");
    }
  };

  return (
    <>
      <section className="contact" id="Contact">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-container">
                <div className="contact-des">
                  <p>
                    If you have any questions or need further information,
                    please feel free to reach out to me. I'm open to
                    opportunities that match my expertise and interests.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    {!isNameValid && (
                      <p className="error-message" id="name-error">
                        Please enter a valid name with at least 3 characters.
                      </p>
                    )}
                    <label htmlFor="name">Your Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={validName}
                        className={!isNameValid ? "invalid" : ""}
                      />
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                  <div className="input">
                    {!isEmailValid && (
                      <p className="error-message" id="email-error">
                        Please enter a valid email address.
                      </p>
                    )}
                    <label htmlFor="email">Your Email</label>
                    <div className="input-wrapper">
                      <i className="fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={validEmail}
                        className={!isEmailValid ? "invalid" : ""}
                      />
                    </div>
                  </div>
                  <div className="input">
                    {!isMessageValid && (
                      <p className="error-message" id="message-error">
                        Please enter a valid message with at least 3 characters.
                      </p>
                    )}
                    <label htmlFor="message">Your Message</label>
                    <div className="input-wrapper message">
                      <i className="fa-solid fa-paragraph"></i>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={validMessage}
                        className={!isMessageValid ? "invalid" : ""}
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit">
                    <button type="submit" id="submit">
                      Send Message
                      <i className="fa-solid fa-envelope"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <div className="contact-items">
                  <ul>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a
                        href="mailto:hager.atia2@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-white"
                      >
                        <span>hager.atia2@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <span>01067896055</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Elgharbia, Egypt </span>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <div className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/hager-atia-9a5423245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://github.com/hageratia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/HagerAtia4?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
