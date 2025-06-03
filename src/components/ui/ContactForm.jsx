import React from 'react'
import { Button } from './button';
import { Search, Briefcase, Globe, Users, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
 
        <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='my-20 bg-white text-gray-900 py-12 px-6 rounded-xl shadow-lg max-w-4xl mx-auto'
            >
                <h2 className='text-4xl font-bold mb-6 text-center text-[#1A1A40]'>Contact JobNest</h2>
                <p className='text-center text-gray-600 mb-8'>Have queries? Reach out to us and we'll assist you!</p>
                <form className='flex flex-col gap-6'>
                    <input type="text" placeholder='Your Name' className='px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD700] outline-none' required />
                    <input type="email" placeholder='Your Email' className='px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD700] outline-none' required />
                    <textarea placeholder='Your Message' rows='5' className='px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD700] outline-none' required></textarea>
                    <Button className='bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#1A1A40] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg'>Send Message</Button>
                </form>
                <div className='mt-8 text-center'>
                    <p className='text-gray-600 flex justify-center items-center gap-2'><Mail className='w-5 h-5 text-[#FFD700]' /> support@jobnest.com</p>
                    <p className='text-gray-600 flex justify-center items-center gap-2 mt-2'><Phone className='w-5 h-5 text-[#FFD700]' /> +91 9898998567</p>
                    <p className='text-gray-600 flex justify-center items-center gap-2 mt-2'><MapPin className='w-5 h-5 text-[#FFD700]' /> Mullana, Ambala, India</p>
                </div> 
            </motion.div>

  )
}

export default ContactForm
