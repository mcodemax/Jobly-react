import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JoblyApi from '../api';
import SearchForm from '../SearchForm';

/** jobsArr is passed in if rendering this through geting a company's details */
const JobList = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        // makes jobly api call gets company list
        getJobs();
    }, []);
    // Once the useEffect is done, React remembers that the state 
    // of counter has changed during its execution, thus it will re-render the App.
    
    async function getJobs() {
        const res = await JoblyApi.getAllJobs();
        setJobs(res);
        console.log(res)
    }
    // "Mounting" is when React "renders" the component for 
    // the first time and actually builds the initial DOM from those instructions.

    async function search(name) {
        let res = await JoblyApi.getAllJobs(name);
        setJobs(res);
    }


    if(!jobs) return (<>{`WE LOADING`}</>)

    return (
        <>
        <div>
           <SearchForm search={search}/>
        </div>
        <div>
            {jobs.map(job => {
                return (
                    <div>
                        <JobCard {...job}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

/**
 * companyHandle: "mejia-scott-ryan"
companyName: "Mejia, Scott and Ryan"
equity: null
id: 200
salary: 126000
title: "Accommodation manager"
 */

export default JobList;