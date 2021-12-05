import React, { useEffect, useState } from "react";
import JoblyApi from '../api';
import CompanyCard from "./CompanyCard";

/** Component for listing all Companies on UI */
const CompaniesList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        // makes jobly api call gets company list
        getCompanies()
    }, []);
    
    async function getCompanies() {
        const res = await JoblyApi.getAllCompanies();
        console.log(res)
        setCompanies(res);
    }

    return (
        <>
            <div>
                {companies.map(company => {
                    return (
                        <div>
                            <CompanyCard {...company}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default CompaniesList;