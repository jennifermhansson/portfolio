import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact({ onClose }) {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_tse40dd",
        "template_6z1vdf6",
        form.current,
        { publicKey: "py8_xDhI9QA2xq1UF" }
      );
      setSuccess(true);
      setTimeout(() => onClose(), 3500); // Stäng popup efter 2 sekunder
    } catch (error) {
      console.log("FAILED...", error.text);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {success ? (
          <h2>✅ Message sent successfully!</h2>
        ) : (
          <>
            <h2>Contact Me</h2>
            <p>
              Have a question or want to get in touch? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Message</label>
              <textarea name="message" required />
              <div className="modal-buttons">
                <input type="submit" value="Send" />
                <button type="button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
