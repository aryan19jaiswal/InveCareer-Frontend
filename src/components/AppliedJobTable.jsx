import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);
    return (
        <div className='bg-white p-4 rounded-xl shadow-lg'>
            <Table>
                <TableCaption className='font-inter text-gray-600'>A list of your applied jobs</TableCaption>
                <TableHeader className='bg-yellow-100'>
                    <TableRow>
                        <TableHead className='font-poppins font-semibold text-gray-700'>Date</TableHead>
                        <TableHead className='font-poppins font-semibold text-gray-700'>Job Role</TableHead>
                        <TableHead className='font-poppins font-semibold text-gray-700'>Company</TableHead>
                        <TableHead className='text-right font-poppins font-semibold text-gray-700'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className='font-inter text-gray-600 text-center'>
                                You haven't applied to any jobs yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell className='font-inter text-gray-600'>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell className='font-inter text-gray-600'>{appliedJob.job?.title}</TableCell>
                                <TableCell className='font-inter text-gray-600'>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className='text-right'>
                                    <Badge 
                                        className={`font-inter font-semibold px-3 py-1 rounded-full ${
                                            appliedJob?.status === "rejected" 
                                                ? 'bg-red-100 text-red-700' 
                                                : appliedJob.status === 'pending' 
                                                ? 'bg-yellow-100 text-yellow-700' 
                                                : 'bg-green-100 text-green-700'
                                        }`}
                                    >
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable