
import { useLoaderData, useParams } from "react-router-dom"
import bg1 from "../../assets/images/bg1.png"
import bg2 from "../../assets/images/bg2.png"



const JobDetails = () => {

    const jobs = useLoaderData();

    const { id } = useParams()


    const job = jobs.find(j => j.id == id)
    console.log(job);
    const { title, description, location, image, onsite, salary, phone, experience } = job;
    return (
        <>
            <div className="bg-indigo-300 ">
                <div className="flex justify-between md:h-[200px] h-auto">
                    <img src={bg1} />
                    <h1 className="text-3xl mt-8 font-semibold">Job Details</h1>
                    <img src={bg2} />
                </div>
            </div>
            <div>
                <div className="md:grid md:grid-cols-12">
                    <div className="md:col-span-8 md:h-[200px] h-auto bg-green-300">
                        <div className="space-y-5">
                            <h1>Job Title : {title}</h1>
                            <h1>Job Description: {description}</h1>
                            <h1>Job Experience: {experience}</h1>
                        </div>
                    </div>
                    <div className="md:col-span-4 md:h-[300px] h-auto bg-purple-300"></div>
                </div>
            </div>
        </>
    )
}

export default JobDetails;