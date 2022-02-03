import { FiLink } from "react-icons/fi";
import './home.css'
import Menu from "../../components/Menu"
import { useState } from "react";
import Modal from "../../components/Modal"
import api from "../../services/api"
import swal from 'sweetalert';
import { saveLink } from '../../services/storeLinks'


export default function Home() {
  const [ link, setLink ] = useState('')
  const [ data, setData ] = useState('')
  const [showModal, setShowModal ] = useState(false);

 async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@encurtaae', response.data)

      setLink('')

    }catch {
      swal("Ops, algo deu errado, tente novamente!");
      setLink('')
    }
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
              content={data}
            />
          )
        }
      </div>
  );
}


