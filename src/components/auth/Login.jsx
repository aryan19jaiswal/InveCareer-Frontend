import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navbar />
            <div className='flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8'>
                <div className="w-full max-w-md">
                    <form onSubmit={submitHandler} className='bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in'>
                        <div className="text-center mb-8">
                            <h1 className='font-poppins font-bold text-3xl text-gray-800 mb-2'>Login</h1>
                            <p className="font-inter text-gray-600">Welcome back</p>
                        </div>
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="xyz@gmail.com"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                        </div>
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-2">Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="Enter your password"
                                className="font-inter w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                        </div>
                        <div className='mb-6'>
                            <Label className="font-inter font-medium text-gray-700 block mb-3">Select your role</Label>
                            <RadioGroup className="flex gap-6">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer accent-yellow-400"
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
                                    />
                                    <Label className="font-inter font-medium text-gray-700 cursor-pointer">Recruiter</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        {
                            loading ? (
                                <Button disabled className="w-full py-3 font-inter font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg shadow-lg transition-all duration-300">
                                    <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Logging in...
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full py-3 font-inter font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 rounded-lg shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-[1.02]">
                                    Login
                                </Button>
                            )
                        }
                        <div className="text-center mt-6">
                            <span className='font-inter text-gray-600'>
                                Don't have an account?
                                <Link to="/signup" className='text-yellow-600 hover:text-yellow-700 font-semibold ml-1 transition-colors duration-300'>
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login