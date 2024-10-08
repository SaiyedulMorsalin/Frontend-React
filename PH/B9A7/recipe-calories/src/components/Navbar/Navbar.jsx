import profile from "../../assets/profile.svg";
import searchicon from "../../assets/search.svg";
const Navbar = () => {
    return (
        <>
            <div className="border m-4 p-4 ">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-4">
                        <div className="flex justify-start gap-4">
                            <a className="font-semibold text-3xl" href="#">Recipe Calories</a>

                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-center gap-4">
                            <a href="#">Home</a>
                            <a href="#">Recipes</a>
                            <a href="#">About</a>
                            <a href="#">Search</a>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-end gap-4 items-center">
                            <div className="flex items-center bg-gray-100 rounded-full p-2 w-64 shadow-sm">
                                <img className="h-6 w-6" src={searchicon} alt="SearchIcon" />
                                <input type="text" placeholder="Search" className="bg-gray-100 outline-none text-gray-700 placeholder-gray-500 w-full" />
                            </div>

                            <a href="#">
                                <img className="h-12 w-12" src={profile} alt="UserProfileImages" /></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;