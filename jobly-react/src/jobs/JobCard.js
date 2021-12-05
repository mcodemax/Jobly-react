import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {

    return (
        <>
            <div>
                <div>
                    <p>{title}</p>
                    <p>Salary: {salary ? salary : 0}</p>
                    <p>Equity: {equity}</p>
                    <NavLink to={`/`}>Apply</NavLink>
                </div>
            </div>
        </>
    )
}

export default JobCard;