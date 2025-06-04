import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
        <nav 
            
            className="bg-gradient-to-r from-[#1A1A40] to-[#3A3A92] text-white shadow-md py-4 px-6"
        >
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                {/* Logo */}
                <Link to="/" className="text-3xl font-extrabold tracking-wide">
                    Job<span className="text-[#FFD700]">Nest</span>
                </Link>

                {/* Navigation Links */}
                <ul className='hidden md:flex items-center gap-8 text-lg font-medium'>
                    {
                        user && user.role === 'recruiter' ? (
                            <>
                                <li><Link to="/admin/companies" className="hover:text-[#FFD700] transition">Companies</Link></li>
                                <li><Link to="/admin/jobs" className="hover:text-[#FFD700] transition">Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" className="hover:text-[#FFD700] transition">Home</Link></li>
                                <li><Link to="/jobs" className="hover:text-[#FFD700] transition">Jobs</Link></li>
                                <li><Link to="/browse" className="hover:text-[#FFD700] transition">Browse</Link></li>
                            </>
                        )
                    }
                </ul>

                {/* Auth Section */}
                {
                    !user ? (
                        <div className='flex items-center gap-4'>
                            <Link to="/login"><Button variant="outline" className="text-black  border-white hover:bg-[#FFD700] hover:text-[#1A1A40]">Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#FFD700] text-[#1A1A40] hover:bg-[#FFC107]">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer border-2 border-[#FFD700]">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-white text-gray-800 shadow-lg rounded-lg">
                                <div className='p-4'>
                                    <div className='flex gap-4 items-center border-b pb-3'>
                                        <Avatar className="border-2 border-[#FFD700]">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-semibold text-lg'>{user?.fullname}</h4>
                                            <p className='text-sm text-gray-600'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-3 text-gray-700'>
                                        {user.role === 'student' && (
                                            <Link to="/profile" className='flex items-center gap-2 hover:text-[#FFD700] transition py-2'>
                                                <User2 /> View Profile
                                            </Link>
                                        )}
                                        <button onClick={logoutHandler} className='flex items-center gap-2 hover:text-[#F83002] transition py-2'>
                                            <LogOut /> Logout
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
