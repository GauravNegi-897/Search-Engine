

const HomeHeader = ()=>{

    return <div>

        <header className=" bg-[#34a0a4] h-11 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-[#fff] text-[13px] line-height hover:underline cursor pointer">Email</span>
                <span className="text-[#fff] text-[13px] line-height hover:underline cursor pointer">Images</span>
                <span className="text-[#fff] text-[13px] line-height hover:underline cursor pointer">Sign in</span>
            </div>
        </header>
    </div>
}

export default HomeHeader;