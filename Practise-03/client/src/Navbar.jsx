import { useEffect, useState } from "react"

const Navbar = () => {
    const[state,setState]=useState(false);

    useEffect(()=>{
        if(state){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[state])
    return (
        <div className="bg-gray-300 dark:bg-black/80 mycontainer fixed top-0 right-0 w-full z-50">
            <div className="mycontainer smooth-transition flex items-center justify-between text-gray-900 dark:text-gray-100">
                <h1 className="text-xl md:text-3xl font-semibold ">QuotesReady</h1>
                <button className="text-xl md:text-3xl cursor-pointer" onClick={()=>setState(!state)}>
                    {state && <i class="ri-sun-line" title="Day"></i>}
                    {!state && <i class="ri-moon-line" title="Night"></i>}
                </button>

            </div>
        </div>

    )
}

export default Navbar