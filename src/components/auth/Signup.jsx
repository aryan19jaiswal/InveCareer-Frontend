import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: null
    });

    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Input change handler
    const changeEventHandler = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // File input handler
    const changeFileHandler = (e) => {
        setInput(prev => ({ ...prev, file: e.target.files?.[0] }));
    };

    // Form submit handler
    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Signup error:", error);
            toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    // Redirect user if already logged in
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navbar />
            <div className='flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8'>
                <div className="w-full max-w-md">
                    <form 
                        onSubmit={submitHandler} 
                        className='bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in'
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className='font-poppins font-bold text-3xl text-gray-800 mb-2'>Create Account</h1>
                            <p className="font-inter text-gray-600">Join us today</p>
                        </div>

                        {/* Full Name Field */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Full Name</Label>
                            <Input
                                type="text"
                                name="fullname"
                                value={input.fullname}
                                onChange={changeEventHandler}
                                placeholder="Enter your full name"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={changeEventHandler}
                                placeholder="abc@gmail.com"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Phone Number</Label>
                            <Input
                                type="text"
                                name="phoneNumber"
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                                placeholder="8080808080"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={changeEventHandler}
                                placeholder="Enter a strong password"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                                required
                            />
                        </div>

                        {/* Role Selection */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-3">I am a</Label>
                            <RadioGroup className="flex gap-6">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer accent-yellow-400"
                                        required
                                    />
                                    <Label className="font-inter font-medium text-gray-700 cursor-pointer">Student</Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer accent-yellow-400"
                                        required
                                    />
                                    <Label className="font-inter font-medium text-gray-700 cursor-pointer">Recruiter</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* File Input */}
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Profile Picture</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80 cursor-pointer"
                            />
                        </div>

                        {/* Submit Button */}
                        {loading ? (
                            <Button 
                                disabled
                                className="w-full py-3 font-inter font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg shadow-lg transition-all duration-300"
                            > 
                                <Loader2 className='mr-2 h-5 w-5 animate-spin' /> 
                                Signing up...
                            </Button>
                        ) : (
                            <Button 
                                type="submit" 
                                className="w-full py-3 font-inter font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 rounded-lg shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-[1.02]"
                            >
                                Sign Up
                            </Button>
                        )}

                        {/* Footer */}
                        <div className="text-center mt-6">
                            <span className='font-inter text-gray-600'>
                                Already have an account? 
                                <Link 
                                    to="/login" 
                                    className='text-yellow-600 hover:text-yellow-700 font-semibold ml-1 transition-colors duration-300'
                                >
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;