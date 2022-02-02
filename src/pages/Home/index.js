import { FiLink } from "react-icons/fi";
import './home.css'
import Menu from "../../components/Menu"
import { useState } from "react";
import Modal from "../../components/Modal"


export default function Home() {
  const [ link, setLink ] = useState('')
  const [showModal, setShowModal ] = useState(false);

  function handleShortLink() {
    setShowModal(true)
  }


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
            <input 
            type="text" 
            placeholder="Cole seu Link"
            value={link} 
            onChange={(e) => setLink(e.target.value)}  
            />
          </div>
          <button 
          onClick={handleShortLink}
          className="raise">Gerar Link</button>
        </div>
        <Menu/>

        {
          showModal && (
            <Modal
              closeModal={ () => setShowModal(false)}
            />
          )
        }
      </div>
  );
}


