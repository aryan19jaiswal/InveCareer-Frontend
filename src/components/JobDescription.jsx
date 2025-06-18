import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen py-10 px-6'>
            <div className='max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-poppins font-bold text-3xl text-gray-900'>{singleJob?.title}</h1>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='bg-blue-50 text-blue-700 font-inter font-semibold px-3 py-1 rounded-full border border-blue-200'>
                                {singleJob?.position} Positions
                            </Badge>
                            <Badge className='bg-green-50 text-green-700 font-inter font-semibold px-3 py-1 rounded-full border border-green-200'>
                                {singleJob?.jobType}
                            </Badge>
                            <Badge className='bg-yellow-50 text-yellow-700 font-inter font-semibold px-3 py-1 rounded-full border border-yellow-200'>
                                {singleJob?.salary} LPA
                            </Badge>
                        </div>
                    </div>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`rounded-lg font-poppins font-bold ${
                            isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-500'
                        }`}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
                <h2 className='border-b-2 border-gray-200 font-poppins font-semibold text-lg text-gray-900 py-4'>Job Description</h2>
                <div className='my-4'>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Role: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.title}</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Location: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.location}</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Description: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.description}</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Experience: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.experience} yrs</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Salary: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.salary} LPA</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Total Applicants: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.applications?.length}</span></h3>
                    <h3 className='font-poppins font-bold my-1 text-gray-900'>Posted Date: <span className='pl-4 font-inter font-normal text-gray-700'>{singleJob?.createdAt.split("T")[0]}</span></h3>
                </div>
            </div>
        </div>
    );
};


export default JobDescription