import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search, Briefcase, Globe, Users } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 flex flex-col gap-8 max-w-5xl mx-auto animate-fade-in">
        <div className="mx-auto px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 backdrop-blur-sm">
          <span className="font-inter font-semibold text-yellow-300 tracking-wide">
            ✨ Empowering Careers, Connecting Opportunities
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-poppins font-extrabold leading-tight bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
          Find The Perfect{" "}
          <span className="text-yellow-400 animate-glow">Job</span> That Suits
          You
        </h1>

        <p className="text-xl font-inter text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover thousands of opportunities from industry-leading companies
          and take the next step in your professional journey.
        </p>

        <div className="relative flex w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl items-center gap-4 p-2 overflow-hidden border border-white/20 hover:shadow-yellow-400/20 transition-all duration-300">
          <div className="flex-1 flex items-center px-4">
            <Search className="h-6 w-6 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for your dream job, company, or skill..."
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none border-none w-full text-gray-700 text-lg font-inter bg-transparent placeholder:text-gray-400"
            />
          </div>
          <Button
            onClick={searchJobHandler}
            className="rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-slate-900 px-8 py-4 font-poppins font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 border-none"
          >
            Search Jobs
          </Button>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="my-24 relative z-10">
        <h2 className="text-5xl font-poppins font-bold mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Why Choose
          </span>{" "}
          <span className="text-white">InveCareer?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-[90%] max-w-6xl">
          <div className="group p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="text-slate-900 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-yellow-300">
              Premium Job Listings
            </h3>
            <p className="text-gray-300 font-inter text-center leading-relaxed">
              Access exclusive opportunities from Fortune 500 companies and
              innovative startups worldwide.
            </p>
          </div>

          <div className="group p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="text-slate-900 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-yellow-300">
              Global Opportunities
            </h3>
            <p className="text-gray-300 font-inter text-center leading-relaxed">
              Explore remote and international positions across all industries
              and skill levels.
            </p>
          </div>

          <div className="group p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-slate-900 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-yellow-300">
              Career Growth
            </h3>
            <p className="text-gray-300 font-inter text-center leading-relaxed">
              Get personalized career guidance, skill assessments, and
              professional development resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
