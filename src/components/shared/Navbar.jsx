import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10 shadow-2xl">
            <div className='flex items-center justify-between max-w-7xl mx-auto px-6 py-4'>
                {/* Logo */}
                <Link to="/" className="group">
                    <div className="text-3xl font-bold font-poppins bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent hover:animate-glow transition-all duration-300">
                        Inve<span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Career</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <ul className='hidden md:flex items-center gap-8 font-inter font-medium'>
                    {
                        user && user.role === 'recruiter' ? (
                            <>
                                <li>
                                    <Link 
                                        to="/admin/companies" 
                                        className="text-white/90 hover:text-yellow-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        Companies
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/admin/jobs" 
                                        className="text-white/90 hover:text-yellow-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        Jobs
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link 
                                        to="/" 
                                        className="text-white/90 hover:text-yellow-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        Home
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/jobs" 
                                        className="text-white/90 hover:text-yellow-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        Jobs
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/browse" 
                                        className="text-white/90 hover:text-yellow-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        Browse
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            </>
                        )
                    }
                </ul>

                {/* Auth Section */}
                {
                    !user ? (
                        <div className='flex items-center gap-4'>
                            <Link to="/login">
                                <Button 
                                    variant="outline" 
                                    className="font-inter font-medium border-2 border-white/20 text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="font-inter font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer border-3 border-yellow-400 hover:border-yellow-300 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-400/25">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                    <AvatarFallback className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 text-slate-900 font-semibold">
                                        {user?.fullname?.charAt(0)?.toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl animate-fade-in">
                                <div className='p-6'>
                                    <div className='flex gap-4 items-center border-b border-gray-200 pb-4'>
                                        <Avatar className="border-2 border-yellow-400 shadow-lg">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                            <AvatarFallback className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 text-slate-900 font-semibold">
                                                {user?.fullname?.charAt(0)?.toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h4 className='font-poppins font-semibold text-lg text-gray-800'>{user?.fullname}</h4>
                                            <p className='font-inter text-sm text-gray-600 mt-1'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-4 space-y-2'>
                                        {user.role === 'student' && (
                                            <Link 
                                                to="/profile" 
                                                className='flex items-center gap-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 py-3 px-3 rounded-lg font-inter font-medium'
                                            >
                                                <User2 size={18} /> View Profile
                                            </Link>
                                        )}
                                        <button 
                                            onClick={logoutHandler} 
                                            className='flex items-center gap-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 py-3 px-3 rounded-lg font-inter font-medium w-full text-left'
                                        >
                                            <LogOut size={18} /> Logout
                                        </button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;
