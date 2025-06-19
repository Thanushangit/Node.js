const Navbar = ({state,setState}) => {
   
    return (
        <div className="bg-navbar mycontainer fixed w-full z-50">
            <div className="mycontainer flex items-center justify-between text-gray-200">
                <h1 className="text-xl md:text-3xl font-semibold ">QuotesReady</h1>
                <button className="text-xl md:text-3xl cursor-pointer" onClick={()=>setState(!state)}>
                    {state && <i class="ri-moon-line" title="Night"></i>}
                    {!state && <i class="ri-sun-line" title="Day"></i>}
                </button>

            </div>
        </div>

    )
}

export default Navbar