import './modal.css';
import { FiX, FiClipboard } from 'react-icons/fi'
import swal from 'sweetalert';



export default function Modal({closeModal, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
    swal("Link Copiado!");

  }


  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal} >
          <FiX size={24} color="#000" />
        </button>
      </div>
      
      <span>
        {content.long_url}
      </span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={24} color="#fff" />
      </button>
    </div>
  )
}