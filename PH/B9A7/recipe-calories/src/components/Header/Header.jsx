import headerImg from "../../assets/backImg.png";

const Header = () => {
    console.log(headerImg)
    return (
        <>
            <div className=" min-h-[600px] rounded-3xl border  m-4 p-4"

                style={{
                    backgroundImage: `url(${headerImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="content-container border max-w-max mx-auto mt-[150px]">
                    <div className="text-center space-y-5">
                        <h1 className="text-white text-5xl font-bold">Discover an exceptional cooking <br></br> class tailored for you!</h1>
                        <h3 className="text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</h3>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;