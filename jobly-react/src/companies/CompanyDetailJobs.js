import React, { useEffect, useState } from "react";
import JobCard from "../jobs/JobCard";

const CompanyDetailJobs = ({jobsArr}) => {
    
    return (
        <>
            <div>
                {jobsArr.map(job => {
                    return (
                        <>
                            <div>
                                <JobCard {...job}/>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CompanyDetailJobs;