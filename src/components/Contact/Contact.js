import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {useForm} from 'react-hook-form';
import "./Contact.css";


const Contact = () => {

  const { register, handleSubmit, formState: { errors} , reset } = useForm();
  
  
  const form = useRef();

  const  [done, setDone] = useState(false);

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_ov4dsyy",
        "template_km5j2mj",
        form.current,
        "P5IGp-oqsspXc3rMI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
      reset();
      return false
  };

  // console.log(errors);
  

  return (
    <section id="contactPage">
      <span className="contactPageTitle">Get in Touch </span>
      <span className="contactPageTitle2">Contact me</span>
      <p className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </p>
      <form className="contactForm" ref={form} onSubmit={ handleSubmit (sendEmail)}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
          {...register('from_name', { required: true })}
        />
        <p className="error">{errors.from_name?.type === 'required' && "❌ Your Name is required!"}</p>
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
          {...register('from_email', { required: true })}
        />
       <p className="error">{errors.from_email?.type === 'required' && "❌ Your Email is required!"}</p> 
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Write Your Message"
          {...register('message', { required: true })}
        />
        <p className="error">{errors.message?.type === 'required' && "❌ Message is required!"}</p>
        <button type="submit" value="send" className="sendBtn">
          Send
        </button>
        <span className="success">{done && '✅ Thanks for contacting me!'}</span>
      </form>
    </section>
  );
};

export default Contact;
