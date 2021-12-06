import React from "react";
import JobCard from "../jobs/JobCard";
import { v4 as uuid } from 'uuid';

const CompanyDetailJobs = ({jobsArr}) => {
    
    return (
        <>
            <div>
                {jobsArr.map(job => {
                    return (
                        <div key={uuid()}>
                            <JobCard {...job}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CompanyDetailJobs;