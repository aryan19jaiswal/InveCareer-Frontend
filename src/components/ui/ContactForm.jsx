import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // FORM SUBMISSION KE API KO YAHA PAR ADD KARENGE
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl font-inter text-gray-300 max-w-2xl mx-auto">
            Have questions about your career journey? 
            <br/>
            We're here to help you succeed.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-inter font-semibold text-lg">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-14 bg-white/10 border-white/30 text-white placeholder:text-gray-300 font-inter text-lg rounded-xl focus:border-yellow-400 focus:ring-yellow-400 transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-inter font-semibold text-lg">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-14 bg-white/10 border-white/30 text-white placeholder:text-gray-300 font-inter text-lg rounded-xl focus:border-yellow-400 focus:ring-yellow-400 transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white font-inter font-semibold text-lg">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="h-14 bg-white/10 border-white/30 text-white placeholder:text-gray-300 font-inter text-lg rounded-xl focus:border-yellow-400 focus:ring-yellow-400 transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white font-inter font-semibold text-lg">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                className="w-full p-4 bg-white/10 border border-white/30 text-white placeholder:text-gray-300 font-inter text-lg rounded-xl focus:border-yellow-400 focus:ring-yellow-400 transition-all duration-200 resize-none"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-slate-900 font-poppins font-bold text-lg rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white mb-2">Email Us</h3>
            <p className="font-inter text-gray-300">contact@invecareer.com</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white mb-2">Call Us</h3>
            <p className="font-inter text-gray-300">+91 93040 99**2</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white mb-2">Visit Us</h3>
            <p className="font-inter text-gray-300">India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
