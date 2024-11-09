
"use client";

import React, { useState, useEffect } from 'react';
import GithubIcon from "../../../public/images/github-icon.jpeg";
import LinkedinIcon from "../../../public/images/li.png";
import Link from 'next/link';
import Image from "next/image";

const ContactForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only runs on client side
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ email: '', subject: '', message: '' });
    }
  };

  if (!isClient) return null; // Prevents SSR

  return (
    <section id="ContactForm" className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='socials flex gap-2'>
          <Link href="https://github.com/NEHADEC" target="_blank">
            <Image src={GithubIcon} alt='GitHub Icon' width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/neha-bilal-7abab22b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bg%2B7SDXZJTCmeJtf2cOGMTQ%3D%3D" target="_blank">
            <Image src={LinkedinIcon} alt='LinkedIn Icon' width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          {submitted && <p className="text-green-500 mb-4">Message sent successfully!</p>}
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
            <input 
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Email'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
            <input 
              type='text'
              id='subject'
              value={formData.subject}
              onChange={handleChange}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
            <textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type='submit'
            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
