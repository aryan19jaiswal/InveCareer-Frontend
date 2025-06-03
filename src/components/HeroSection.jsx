import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search, Briefcase, Globe, Users } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-b from-[#1A1A40] to-pink text-white py-20 px-6'>
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className='flex flex-col gap-6 max-w-4xl mx-auto'
            >
                <span className='mx-auto px-6 py-3 rounded-full bg-white text-[#3A3A92] font-semibold'>Your Career, Your Future</span>
                <h1 className='text-5xl font-extrabold leading-tight'>Find The Perfect <span className='text-[#FFD700]'>Job</span> That Suits You</h1>
                <p className='text-lg text-gray-300'>Explore thousands of job listings from top companies and start your career journey today.</p>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='relative flex w-full max-w-2xl mx-auto bg-white rounded-full shadow-lg items-center gap-4 px-5 py-3 overflow-hidden border border-gray-300'
                >
                    <input
                        type="text"
                        placeholder='Search for your dream job...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-gray-700 text-lg px-4 py-2 bg-transparent'
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#1A1A40] px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
                    >
                        <Search className='h-6 w-6' />
                        <span>Search</span>
                    </Button>
                </motion.div>
            </motion.div>

            {/* What We Offer Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='my-20'
            >
                <h2 className='text-4xl font-bold mb-8'>What We Offer</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-[90%] max-w-5xl'>
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className='p-8 bg-white rounded-3xl shadow-lg flex flex-col items-center text-gray-800'
                    >
                        <Briefcase className='text-[#FFD700] w-14 h-14 mb-4' />
                        <h3 className='text-2xl font-semibold'>Exclusive Job Listings</h3>
                        <p className='text-gray-600 mt-3 text-center'>Find the best job opportunities from top employers.</p>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className='p-8 bg-white rounded-3xl shadow-lg flex flex-col items-center text-gray-800'
                    >
                        <Globe className='text-[#FFD700] w-14 h-14 mb-4' />
                        <h3 className='text-2xl font-semibold'>Global Reach</h3>
                        <p className='text-gray-600 mt-3 text-center'>Explore job markets worldwide and work from anywhere.</p>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className='p-8 bg-white rounded-3xl shadow-lg flex flex-col items-center text-gray-800'
                    >
                        <Users className='text-[#FFD700] w-14 h-14 mb-4' />
                        <h3 className='text-2xl font-semibold'>Career Growth</h3>
                        <p className='text-gray-600 mt-3 text-center'>Get career development resources to help you grow.</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default HeroSection;