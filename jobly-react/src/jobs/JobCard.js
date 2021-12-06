import React, { useContext } from 'react';
import JoblyApi from '../api';
import UserContext from "../auth/UserContext";

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {
    const {setJobIds, jobIds, currentUser} = useContext(UserContext); //importing from context setState f() to add to jobIds applied to
    
    async function apply(evt) {
        evt.preventDefault();

        try {
            console.log(`poop1`, currentUser.username, id)
            const res = await JoblyApi.jobApply(currentUser.username, id);
            console.log(`soegsigsoegiseg`, res)
            setJobIds(ids => [...ids, res])    
        } catch (error) {
            alert('Job unable to be applied to');
        }
    }

    return (
        <>
            <div>
                <div>
                    <p>Company: {companyName}</p>
                    <p>Job Title: {title}</p>
                    <p>Salary: {salary ? salary : 0}</p>
                    <p>Equity: {equity}</p>
                    { jobIds.includes(id) ?
                    <p>Applied</p> :
                    <form onSubmit={apply}>
                        <button type="submit" className="">
                            Apply
                        </button>
                    </form>
                    }
                </div>
            </div>
        </>
    )
}

export default JobCard;