import profile from "../../assets/Images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between p-5 my-5 bg-gray-50 rounded-xl border-b-2">
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="No Image Available" />
        </div>
    );
};

export default Header;


