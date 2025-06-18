import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen py-10 px-6'>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg my-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-poppins font-bold text-2xl text-gray-900'>{user?.fullname}</h1>
                            <p className='font-inter text-gray-600'>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button 
                        onClick={() => setOpen(true)} 
                        className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-200 font-inter"
                    >
                        <Pen className='w-4 h-4 mr-2' /> Edit
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail className='text-gray-600' />
                        <span className='font-inter text-gray-700'>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact className='text-gray-600' />
                        <span className='font-inter text-gray-700'>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h2 className='font-poppins font-semibold text-lg text-gray-900'>Skills</h2>
                    <div className='flex items-center gap-2 flex-wrap'>
                        {user?.profile?.skills.length !== 0 ? (
                            user?.profile?.skills.map((item, index) => (
                                <Badge 
                                    key={index} 
                                    className='bg-yellow-50 text-yellow-700 font-inter font-semibold px-3 py-1 rounded-full border border-yellow-200'
                                >
                                    {item}
                                </Badge>
                            ))
                        ) : (
                            <span className='font-inter text-gray-600'>NA</span>
                        )}
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='font-poppins font-semibold text-gray-900'>Resume</Label>
                    {user?.profile?.resume ? (
                        <a 
                            target='blank' 
                            href={user?.profile?.resume} 
                            className='text-blue-500 font-inter hover:underline cursor-pointer'
                        >
                            {user?.profile?.resumeOriginalName}
                        </a>
                    ) : (
                        <span className='font-inter text-gray-600'>NA</span>
                    )}
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8'>
                <h2 className='font-poppins font-bold text-lg text-gray-900 mb-5'>Applied Jobs</h2>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};


export default Profile