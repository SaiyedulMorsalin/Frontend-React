import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    const blogs = useLoaderData()    
    console.log(blogs);
  return (
    <>
      <section className=" text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
			<img src={blogs[0]?.cover_image} alt="No Images" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs text-gray-600">February 19, 2021</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			
            {
                blogs.map(blog =><BlogCard key={blog.id} blog={blog} />)
            }
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>
    </>
  );
};

export default Blogs;
