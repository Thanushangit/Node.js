
import { ThemeProvider } from "./Context/ThemeContext"
import DarkToggle from "./DarkToggle"
import Navbar from "./Navbar"

const App = () => {



  return (
    <ThemeProvider>
      <div className={`min-h-screen w-[100%] bg-gray-200 dark:bg-black/60`}>
        <Navbar />
        <div className="mycontainer !pt-10 md:!pt-15 dark">
          <div className=" p-5 rounded max-w-6xl bg- mx-auto my-5 md:my-8 bg-blue-500 dark:bg-gray-50">

            <div className="mt-5"><DarkToggle /></div>


          </div>


        </div>
      </div>
    </ThemeProvider>
  )
}

export default App





{/* <h1> <strong className="text-xl md:text-2xl text-gray-500">குறள்   </strong> </h1>
          <h1 className="my-2 md:text-xl">அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.</h1>
          <h1 className="mt-5"> <strong className="text-xl md:text-2xl text-gray-500">பொருள்   </strong> </h1>
          <h1 className="my-2 md:text-xl">எழுத்துக்களின் துவக்கம் "அ" என்ற எழுத்து போல, இந்த உலகத்தின் துவக்கம் கடவுளே.</h1>
          <p className="text-sm mt-5 md:mt-8">-அறத்துப்பால்/கடவுள் வாழ்த்து/01</p> */}
