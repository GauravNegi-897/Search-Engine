import ProfileIcon from "./ProfileIcon.jsx"

const HomeHeader = ()=>{

    return <div>

        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor pointer">Email</span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor pointer">Images</span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor pointer">Sign in</span>
            </div>
        </header>
    </div>
}

export default HomeHeader;