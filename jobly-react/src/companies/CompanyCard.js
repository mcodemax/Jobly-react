import React from "react";
import { NavLink } from "react-router-dom";

/** Component for listing all Companies on UI */
const CompanyCard = ({handle, name, description, numEmployees, logoUrl}) => {

    return (
        <>
                <div className="CompanyCard">
                    <p>{name}</p>
                    <p>Description: {description}</p>
                    <p>Employees: {numEmployees}</p>
                    <NavLink to={`/companies/${handle}`}>Details</NavLink>
                    {/* might need state change when altering this */}
                </div>
                { logoUrl ? <img className="CompanyCard-img" src="/building.png" alt={`${name} logo`}></img> : null}
        </>
    );
}

export default CompanyCard;