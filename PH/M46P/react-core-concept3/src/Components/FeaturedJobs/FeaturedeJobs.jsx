import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])



    return (

        <>
            <div className="md:space-y-3">
                <div className="text-center space-y-3">
                    <h1 className="text-5xl font-bold">Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="md:grid md:grid-cols-12 md:gap-5 ">
                    {
                        jobs.slice(0, 4).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
            </div>
        </>
    )
}


export default FeaturedJobs;