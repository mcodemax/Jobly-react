import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import { useParams, useNavigate } from "react-router-dom";
import CompanyDetailJobs from "./CompanyDetailJobs";
import 'CompanyDetail.scss';

const CompanyDetail = () => {
    const { companyHandle } = useParams();
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getCompanyDetails(companyHandle){
            try {
                const res = await JoblyApi.getCompany(companyHandle);
                setCompany(res); 
            } catch (error) {
                alert(`Company DNE`)
                navigate("/companies");
            }
        }

        getCompanyDetails(companyHandle);
    }, [companyHandle, navigate]);

    
/**{handle: 'anderson-arias-morrow', name: 'Anderson, Arias and Morrow',
 *  description: 'Somebody program how I. Face give away discussion …. Your 
 * official relationship administration here.', numEmployees: 245, logoUrl: '/logos/logo3.png', …} */
    
    if(!company) return (<>{`Loading`}</>);

    return (
            <div className="CompanyDetail">
                <div>{ company.logoUrl ? <img src="/building.png" alt={`${company.name} logo`}></img> 
                    : null}</div>
                <p>Company Name: {company.name}</p>
                <p>Employees: {company.numEmployees}</p>
                <p>Company Details: {company.description}</p>
                <p>Jobs:</p>
                <CompanyDetailJobs jobsArr={company.jobs}/>
            </div>
    )
}

export default CompanyDetail;
