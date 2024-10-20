import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categorylist, setCategorylist] = useState([]);
    useEffect(() => {
        fetch("categorylist.json")
            .then(res => res.json())
            .then(data => setCategorylist(data))
    }, [])
    return (
        <>
            <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="md:grid md:grid-cols-12">
                {
                    categorylist.slice(0, 4).map(category => <Category category={category} key={category.id}></Category>)

                }

            </div>
        </>
    )

}

export default CategoryList;