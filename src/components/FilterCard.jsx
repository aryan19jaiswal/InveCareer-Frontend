import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const FilterCard = ({ filters, updateFilter, clearFilters }) => {
    const locationOptions = [
        { label: "Any", value: "Any" },
        { label: "Delhi NCR", value: "Delhi NCR" },
        { label: "Bengaluru", value: "Bengaluru" },
        { label: "Hyderabad", value: "Hyderabad" },
        { label: "Pune", value: "Pune" },
        { label: "Mumbai", value: "Mumbai" },
    ];

    const industryOptions = [
        { label: "Any", value: "Any" },
        { label: "Developer", value: "Developer" },
        { label: "Tester", value: "Tester" },
        { label: "Quality Analyst", value: "Quality Analyst" }
    ];

    const salaryOptions = [
        { label: "Any", value: "Any" },
        { label: "Less than 5 LPA", value: "0-5" },
        { label: "5-10 LPA", value: "5-10" },
        { label: "10-20 LPA", value: "10-20" },
        { label: "More than 20 LPA", value: "20+" },
    ];

    return (
        <div className='w-full bg-white p-4 rounded-xl shadow-lg border border-gray-200'>
            <h1 className='font-poppins font-bold text-xl text-yellow-600'>Filter Jobs</h1>
            <hr className='mt-3 border-gray-200' />
            <div>
                <h2 className='font-poppins font-semibold text-lg text-gray-900'>Location</h2>
                <RadioGroup value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
                    {locationOptions.map((option) => (
                        <div key={option.value} className='flex items-center space-x-2 my-2'>
                            <RadioGroupItem value={option.value} id={`location-${option.value}`} />
                            <Label htmlFor={`location-${option.value}`} className='font-inter text-gray-700'>{option.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-lg text-gray-900'>Domain</h2>
                <RadioGroup value={filters.industry} onValueChange={(value) => updateFilter('industry', value)}>
                    {industryOptions.map((option) => (
                        <div key={option.value} className='flex items-center space-x-2 my-2'>
                            <RadioGroupItem value={option.value} id={`industry-${option.value}`} />
                            <Label htmlFor={`industry-${option.value}`} className='font-inter text-gray-700'>{option.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-lg text-gray-900'>Salary</h2>
                <RadioGroup value={filters.salary} onValueChange={(value) => updateFilter('salary', value)}>
                    {salaryOptions.map((option) => (
                        <div key={option.value} className='flex items-center space-x-2 my-2'>
                            <RadioGroupItem value={option.value} id={`salary-${option.value}`} />
                            <Label htmlFor={`salary-${option.value}`} className='font-inter text-gray-700'>{option.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <Button 
                onClick={clearFilters} 
                className="mt-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-200 font-inter"
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default FilterCard;








    