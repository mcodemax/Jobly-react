import React, { useEffect, useState } from "react";
import JoblyApi from '../api';
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";
import { v4 as uuid } from 'uuid';

/** Component for listing all Companies on UI */
const CompaniesList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        // makes jobly api call gets company list
        getCompanies();
    }, []);
    // Once the useEffect is done, React remembers that the state 
    // of counter has changed during its execution, thus it will re-render the App.
    
    async function getCompanies() {
        const res = await JoblyApi.getAllCompanies();
        setCompanies(res);
    }
    // "Mounting" is when React "renders" the component for 
    // the first time and actually builds the initial DOM from those instructions.

    async function search(name) {
        let res = await JoblyApi.getAllCompanies(name);
        setCompanies(res);
    }

    if(!companies) return (<>{`WE LOADING`}</>)

    return (
        <div className="CompaniesList">
            <div>
                <SearchForm search={search}/>
            </div>
            <div>
                {companies.map(company => {
                    return (
                        <div key={uuid()}>
                            <CompanyCard  {...company}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CompaniesList;
