import React, { useRef, useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "../../App.css"

interface ContactProps {
  onClose: () => void;
}

function Contact({ onClose }: ContactProps) {
  // Typa refen som HTMLFormElement | null
  const form = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);

    const sendEmail = async (e: FormEvent) => {
      e.preventDefault();

      if (!form.current) return;

      try {
        await emailjs.sendForm(
          "service_tse40dd",
          "template_6z1vdf6",
          form.current,
          { publicKey: "py8_xDhI9QA2xq1UF" }
        );
        setSuccess(true);
        setTimeout(() => onClose(), 3500);
      } catch (error: any) {
        console.error("FAILED...", error.text);
      }
    };

  // ✅ Lyssna på Escape & Enter
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); // stäng modalen
      }

      // Enter = skicka (men inte i textarea!)
      if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.tagName !== "TEXTAREA") {
        const formEl = form.current;
        if (formEl) {
          event.preventDefault();
          formEl.requestSubmit(); // triggar onSubmit
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
