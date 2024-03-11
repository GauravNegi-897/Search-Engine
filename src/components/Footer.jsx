import  {quickLinks , settingMenu} from "../utils/Constants";

const Footer = () =>{

    return <div className="bg-[#264653]">

            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
                <div className="flex justify-center">
                    {quickLinks.map((menu,index) =>(
                        <span key={index} className="text-[#fff] text-[12px] md:text-[14px] leading-none p-[10px]">
                            {menu}
                        </span> 
                    ))}

                </div>
            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
                <div className="flex justify-center">
                    {settingMenu.map((menu,index) =>(
                        <span key={index} className="text-[#fff] text-[12px] md:text-[14px] leading-none p-[10px]">
                            {menu}
                        </span> 
                    ))}

                </div>
            </div>
            </div>

    </div>
}

export default Footer;