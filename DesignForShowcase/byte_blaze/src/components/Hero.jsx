import { Link } from "react-router-dom";

const Hero =()=>{
    return(
        <>
             <div className="hero  min-h-[calc(100vh-380px)]">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className=" font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex gap-4 justify-center">
              <Link class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Button Text
                </span>
              </Link>
              <Link class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Button Text
                </span>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
        </>
    )
}

export default Hero;