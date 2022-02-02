import { FiLink } from "react-icons/fi";
import './home.css'
import Menu from "../../components/Menu"


export default function Home() {
  return (
      <div className="container-home" >
        <div className="logo">
          <img src="logo.png" alt="Logo Encurta Aê"/>
          <h1>  Encurta Aê </h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="input-area">
          <div>
            <FiLink size={24} color="#fff"/>
            <input type="text" placeholder="Cole seu Link"/>
          </div>
          <button className="raise" >Gerar Link</button>
        </div>

        <Menu/>
      </div>
  );
}


