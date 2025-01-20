import { Navigate, useNavigate } from "react-router-dom"
import { LogoIcon } from "../icons/icons"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white h-14 flex items-center justify-center">
        <div className="wrapper-container w-full">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
                <LogoIcon />
                <p>Exemple de <span  className="text-yellow-500">C</span>rypto<span className="text-yellow-500">A</span>pp par <span  className="text-yellow-500">SKDIGIT</span></p>
            </div>
        </div>
    </div>
  )
}

export default Navbar