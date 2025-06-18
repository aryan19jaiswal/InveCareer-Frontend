import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const MAX_CHARS = 150;
  const isLong = job?.description?.length > MAX_CHARS;
  const shortDescription =
    job?.description?.slice(0, MAX_CHARS) + (isLong ? "..." : "");

  const handleReadMoreClick = (e) => {
    e.stopPropagation(); // prevent card click
    navigate(`/description/${job._id}`);
  };

  const handleCardClick = () => {
    navigate(`/description/${job._id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group p-8 rounded-3xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/10 hover:scale-105 hover:border-yellow-300 transition-all duration-300 relative overflow-hidden h-[420px] flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-poppins font-bold text-xl text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
              {job?.company?.name}
            </h1>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-lg">
                {job?.company?.name?.charAt(0)}
              </span>
            </div>
          </div>
          <p className="text-sm font-inter text-gray-500 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {job?.location || "India"}
          </p>
        </div>

        <div className="mb-3">
          <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-2 leading-tight">
            {job?.title}
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed text-sm">
            {shortDescription}
            {isLong && (
              <span
                onClick={handleReadMoreClick}
                className="text-yellow-600 ml-2 font-semibold cursor-pointer hover:underline"
              >
                Read more
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-inter font-semibold px-3 py-1 rounded-full border border-blue-200">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job?.position} Positions
          </Badge>
          <Badge className="bg-green-50 text-green-700 hover:bg-green-100 font-inter font-semibold px-3 py-1 rounded-full border border-green-200">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {job?.jobType}
          </Badge>
          <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 font-inter font-semibold px-3 py-1 rounded-full border border-yellow-200">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            ₹{job?.salary} LPA
          </Badge>
        </div>
      </div>

      <div className="relative z-10 mt-3 pt-3 border-t border-gray-100">
        <div className="text-right">
          <span className="text-yellow-600 font-inter font-semibold group-hover:text-yellow-700 transition-colors duration-200">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default Job;
