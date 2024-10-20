const Category = ({ category }) => {


    return (
        <>
            <div className="col-span-3 border p-5 m-2 bg-[#d3d7fb] rounded">

                <img src={category.image}></img>
                <h1>{category.title}</h1>
                <p>{category.available_jobs}+ Jobs Available</p>
            </div>
        </>
    )
}

export default Category;