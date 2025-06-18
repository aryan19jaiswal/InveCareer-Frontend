import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer", 
    "Data Science",
    "Software Developer",
    "FullStack Developer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Product Manager"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
                        Explore by <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">Category</span>
                    </h2>
                    <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
                        Find your perfect role in the most in-demand career fields
                    </p>
                </div>
                
                <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {category.map((cat, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <Button 
                                        onClick={() => searchJobHandler(cat)} 
                                        variant="outline" 
                                        className="w-full h-16 rounded-2xl border-2 border-gray-200 bg-white hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 hover:border-yellow-300 hover:scale-105 transition-all duration-300 font-inter font-semibold text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-lg group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform duration-200">
                                            {cat}
                                        </span>
                                    </Button>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 bg-white border-2 border-yellow-200 hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-200" />
                    <CarouselNext className="hidden md:flex -right-12 h-12 w-12 bg-white border-2 border-yellow-200 hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-200" />
                </Carousel>
            </div>
        </div>
    );
};

export default CategoryCarousel;