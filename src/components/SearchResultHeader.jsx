import  {Link, useLinkClickHandler} from "react-router-dom";
import { useContext ,useState , useEffect} from "react";


import Logo from "../assets/search.png";
import SearchInput from "./SearchInput";
import { Context } from "../utils/ConstantsAPI";
import {menu} from "../utils/Constants";

const SearchResultHeader = () =>{

    const [selectedMenu , setSelectedMenu] = useState("All");
    const {setImageSearch} = useContext(Context);

    useEffect(() =>{
        return () => setImageSearch(false);
    },[]);
    const clickHandler = (menuItem) =>{
        let isTypeImage = menuItem.name === "Images";
        setSelectedMenu(menuItem.name);
        setImageSearch(isTypeImage ? true : false);
    }

    return <div className="p-[30px] pb-0 md:pr-5 md:pl-19 md:pt-4 border-b border:[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">

        <div className="flex items-center grow">

            <Link to="/">
            <img 
                className="hidden md:block h-[40px] mr-10"
                src={Logo}
            />
            </Link>
            <SearchInput></SearchInput>
        </div>

        <div className="flex ml-[-3px] mt-3">
            {menu.map((menu,index) =>(
                <span key={index} className={`flex items-center p-2 text-[#5f6368] cursor-pointer relative ${selectedMenu === menu.name ? "text-[#1a73e8]":""}`}
                onClick={()=> clickHandler(menu)}>
                    <span className="hidden md:block mr-2">
                            {menu.icon}
                    </span>

                    <span className="text-sm">{menu.name}</span>
                    {selectedMenu === menu.name && (
                        <span className="h-[2px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"/> 
                    )}
                </span>
            ))

            }
        </div>
    </div>

}

export default SearchResultHeader ;