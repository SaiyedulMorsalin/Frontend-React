import locationImg from "../../assets/icons/location2.png"
import moneyImg from "../../assets/icons/money.png"
const Job = ({ job }) => {
    return (
        <>
            <div className="md:col-span-6 border rounded-sm space-y-3 p-5 w-full">
                <img src={job.image} />
                <h1>{job.title}</h1>
                <p className="flex"> <img src={locationImg} /> {job.location}   <img src={moneyImg} /> {job.salary}</p>

            </div>
        </>
    )
}
export default Job;