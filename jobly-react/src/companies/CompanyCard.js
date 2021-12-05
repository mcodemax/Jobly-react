import React, { useEffect, useState } from "react";

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
                </div>
            </div>
        </>
    );
}

export default CompanyCard;