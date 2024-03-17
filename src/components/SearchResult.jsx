import { useState , useEffect , useContext } from "react";
import { useParams } from "react-router-dom";

import {fetchDatafromApi} from "../utils/api";
import SearchResultHeader from './SearchResultHeader';
import Footer from "./Footer";
import SearchItemTemplate from "./SearchItemTemplate";
import SearchImageItemTemplate  from "./SearchImageItemTemplate"
import Pagination from "./Pagination";
import { Context } from "../utils/ConstantsAPI";

const SearchResult =()=>{

    const [result , setResult] = useState();
    const {query , startIndex} = useParams();
    const {imageSearch} = useContext(Context);

    useEffect(() =>{
        fetchSearchResult();   
    },[query , startIndex , imageSearch])
    
    const fetchSearchResult = () =>{
        let payload = {q:query , start:startIndex}
        if(imageSearch)
        {
            payload.searchType = "image";
        }

        fetchDatafromApi(payload).then((res) =>{
            setResult(res);
        });
    } ;

    if(!result) return;
    const {items,queries,searchInformation}  = result;



    return  <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader/>
            <main className="grow p-[10px] pb-0 md:pr-5 md:pl-10">
                <div className="flex text-sm text-[#70757a] mb-3">
                    {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime}s)`};
                </div>

                {!imageSearch ?  (<>

                    {items.map((item ,index) =>(

                        <SearchItemTemplate key={index} data={item}/>

                    ))}
                    
                </>):(
                
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5  gap-2">
                        {items.map((item,Index) => (
                            <SearchImageItemTemplate 
                            key={Index} 
                            data={item}/>
                        ))}
                    </div>
               )}
               <Pagination queries={queries}/>    
            </main>
            <Footer/>
    </div>
}

export default SearchResult;