import  { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Process form data (e.g., send it to a server or reset form)
      console.log("Form submitted successfully!", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder='enter your message'
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
