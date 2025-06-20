import { useDarkMode } from './Context/ThemeContext'

const DarkToggle = () => {
    const {darkMode,setDarkMode}=useDarkMode();
  return (
    <button className='py-2 px-5 rounded bg-gray-300 cursor-pointer' onClick={()=>setDarkMode(!darkMode)}>
        {darkMode? "☀️ light" : "🌙 dark"}
    </button>
  )
}

export default DarkToggle