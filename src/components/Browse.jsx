import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins font-bold text-2xl my-10 text-yellow-400">
            Search Results ({allJobs.length})
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
