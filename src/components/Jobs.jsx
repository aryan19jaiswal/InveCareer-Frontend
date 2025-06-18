import React, { useState, useMemo } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  const [filters, setFilters] = useState({
    location: "Any",
    industry: "Any",
    salary: "Any",
  });

  const updateFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: "Any",
      industry: "Any",
      salary: "Any",
    });
  };

  const parseSalaryFilter = (salaryFilter) => {
    if (salaryFilter === "Any") return null;
    if (salaryFilter.endsWith("+")) {
      const min = parseInt(salaryFilter.slice(0, -1));
      return { min, max: Infinity };
    } else {
      const [min, max] = salaryFilter.split("-").map(Number);
      return { min, max };
    }
  };

  const filteredJobs = useMemo(() => {
    let filtered = allJobs;
    if (filters.location !== "Any") {
      filtered = filtered.filter((job) => job.location === filters.location);
    }
    if (filters.industry !== "Any") {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(filters.industry.toLowerCase())
      );
    }
    if (filters.salary !== "Any") {
      const salaryRange = parseSalaryFilter(filters.salary);
      if (salaryRange) {
        const { min, max } = salaryRange;
        filtered = filtered.filter(
          (job) => job.salary >= min && (max === Infinity || job.salary <= max)
        );
      }
    }
    return filtered;
  }, [allJobs, filters]);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen py-5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-5">
            <div className="w-[20%]">
              <FilterCard
                filters={filters}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
              />
            </div>
            {filteredJobs.length <= 0 ? (
              <span className="font-inter text-gray-300">Job not found</span>
            ) : (
              <div className="flex-1 pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {filteredJobs.map((job) => (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      key={job?._id}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
