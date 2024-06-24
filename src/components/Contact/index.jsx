import { useState } from "react";
import { validatePhoneNumber, validateEmail } from "../../utils/helpers";

const ContactForm = () => {
  const [ formState, setFormState ] = useState({ name: "", phone: "", email: "", message: "" });
  const { name, phone, email, message } = formState;
  const [ errorMessage, setErrorMessage ] = useState("");

  function validateContactForm(event) {
    let error = ""; // Initialize error message variable

    if (event.target.name === "phone") {
        const isValidPhone = validatePhoneNumber(event.target.value);
        error = isValidPhone ? "" : "Enter a valid phone number";
    } else if (event.target.name === "email") {
        const isValidEmail = validateEmail(event.target.value);
        error = isValidEmail ? "" : "Enter a valid email";
    } else {
        error = event.target.value.length ? "" : `${event.target.name} required`;
    }

    setErrorMessage(error); // Update error message state immediately

    if (!error) {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }
}

const submitContactForm = (event) => {
  event.preventDefault();
  
  // Validate the phone number before setting error message and logging form state
  const isValidPhone = validatePhoneNumber(phone);
  if (!isValidPhone) {
      setErrorMessage("Enter a valid phone number");
      return; // Prevent form submission if phone number is invalid
  }
  
  setErrorMessage("This form isn't hooked up to the backend just yet, please reach out via LinkedIn.");
  console.log(formState);
}

  return (
    <section className="contact content">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={submitContactForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={validateContactForm} name="name" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" defaultValue={phone} onBlur={validateContactForm} name="phone" required />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={validateContactForm} name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={validateContactForm} rows="5" required />
        </div>
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;
