import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

    const [options, setOptions] = useState([])

    useEffect(() => {
        fetch("gym.json")
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    const { membership } = options;
    console.log(membership);
    return (
        <>
            <div>
                {
                    options.map((option, idx) => (<PriceOption key={idx} option={option}></PriceOption>))
                }
            </div>
        </>
    )
}

export default PriceOptions;