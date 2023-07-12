import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  AOS.init();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_t6zwu94', 'template_skvqo61', form.current, '1CDfBIXIOOVcW28dr');
      setSubmitSuccess(true);
      resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className="my-20 md:w-3/4 mx-auto">
      <h3 data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200" className="text-center text-4xl font-bold mb-10">Contact Us</h3>
      <div className="">
        
        <div data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400" className="md:w-full">
          <div className="shadow-2xl bg-slate-500 p-6 my-4 rounded-lg mt-10">
            {submitSuccess ? (
              <div className="text-green-600 font-semibold mb-4">
                Your message has been sent successfully!
              </div>
            ) : null}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Form fields */}
              <div className="form-control">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <input
                  className="input input-bordered p-2 w-full rounded-xl"
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="block mb-2">
                  Email:
                </label>
                <input
                  className="input input-bordered w-full p-2 rounded-xl"
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-control">
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  className="input input-bordered p-2 w-full rounded-xl mb-2"
                  id="message"
                  name="message"
                  rows="4"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`btn  ${isSubmitting ? 'btn-disabled' : 'btn-primary'
                    } border-2 w-1/2 p-2 mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
