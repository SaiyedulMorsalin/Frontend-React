import logoimg from "../../assets/logo/CareerHub.png";
import socialimg from "../../assets/icons/social.png";
const Footer = () => {


    return (
        <>
            <div className="grid grid-cols-12 bg-[#1E1E1E] text-white">
                <div className="col-span-4 space-y-5">
                    <img src={logoimg} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium deleniti ipsam doloribus libero natus eum minus enim atque et, autem magni quisquam mollitia aspernatur non. Excepturi amet quo illo?
                    </p>
                    <img src={socialimg} />
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
            </div>
        </>
    )
}


export default Footer;