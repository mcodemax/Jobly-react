import React from "react";
import { NavLink } from "react-router-dom";

/** Component for listing all Companies on UI */
const CompanyCard = ({handle, name, description, numEmployees, logoUrl}) => {

    return (
        <>
            <div>
                { logoUrl ? <img src={logoUrl} alt={`${name} logo`}></img> : null}
                <div>
                    <p>{name}</p>
                    <p>Description: {description}</p>
                    <p>Employees: {numEmployees}</p>
                    <NavLink to={`/companies/${handle}`}>Details</NavLink>
                </div>
            </div>
        </>
    );
}

export default CompanyCard;