import { useState,useEffect } from "react";
import {FiChevronRight , FiChevronLeft} from "react-icons/fi";
import {useParams ,useNavigate} from "react-router-dom";
import Logo from '../assets/search.png';
import {pagination} from "../utils/Constants";

const Pagination = ({queries}) =>{

    const {query} = useParams();
    const [page , setpage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    useEffect(() =>{
        setpage(pagination[0].startIndex);
    },[query]);

    const paginationClickerHandler = (startIndex) =>{
        
        setpage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    return <div className="flex flex-col items-center py-14 max-w-[700px]">
        <div className="relative text-[#4285f4]">
            {queries.previousPage && (
                <div className="absolute left-[-30px] md:left-[-40px] top-[-10px]"
                onClick={() =>
                paginationClickerHandler(
                    queries.previousPage[0].startIndex
                )}>

                    <FiChevronLeft size={20} className="cursor-pointer absolute left-[-30px] top-[1px] "/>
                        <div className="curosr-pointer absolute left-[-30px] top-[30px] hidden md:block">
                            Prev
                        </div>
                </div>
            )} 

            <img className="w-[60px] md:w-[60px] " src={Logo} />
            {queries.nextPage && (
                <div className="absolute right-[-30px] md:right-[-40px] top-[-10px]"
                onClick={() =>
                paginationClickerHandler(
                    queries.nextPage[0].startIndex
                )}>

                    <FiChevronRight size={20} className="cursor-pointer absolute left-[-10px] top-[-3px]"/>
                        <div className="curosr-pointer absolute left-[-9px] top-[25px] hidden md:block">
                            Next
                        </div>
                </div>
            )} 
        </div>
        <div className="flex gap-3 text-[#4285f4] text-sm">
            {pagination.map((p) =>(

                <span
                
                key={p.page}
                onClick ={() => paginationClickerHandler(p.startIndex)}
                className={`cursor-pointer ${page === p.startIndex ? "text-black": ""}`}
                >
                    {p.page}
                </span>
            ))}
        </div>
    </div>
}

export default Pagination;