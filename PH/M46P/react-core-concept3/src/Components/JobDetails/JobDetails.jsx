import { useEffect } from "react"
import bg1 from "../../assets/images/bg1.png"
import bg2 from "../../assets/images/bg2.png"
import { useLoaderData } from "react-router-dom"

const JobDetails = () => {

    const jobs = useLoaderData();
    console.log(jobs);




    return (
        <>
            <div className="bg-indigo-300 ">
                <div className="flex justify-between md:h-[200px] h-auto">
                    <img src={bg1} />
                    <h1 className="text-3xl mt-8 font-semibold">Job Details</h1>
                    <img src={bg2} />
                </div>
            </div>

        </>
    )
}

export default JobDetails;