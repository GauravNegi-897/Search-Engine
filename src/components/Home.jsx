import Logo from "../assets/search.png";
import HomeHeader from "./HomeHeader";
import SearchInput from './SearchInput';
import Footer from "./Footer";

const Home = () =>{

    return <div className="flex h-[100vh] flex-col">
        <HomeHeader/>
        <main className="grow flex">
            <div className="w-full px-5 flex flex-col items-center mt-44">
                <img className="w-[150px] md:w-[150px] mb-8"  src={Logo} />
                <SearchInput/>
                <div className="flex gap-2 text-[#fff] mt-8">
                    <button className="h-9 px-8 text-lg bg-[#34a0a4] rounded-md border border-[#f8f9fa] hover:[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                         Search
                    </button>
                   
                </div>
            </div>
        </main>

        <Footer/>
    </div>
}

export default Home;