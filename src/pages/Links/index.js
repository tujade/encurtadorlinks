import './links.css'
import { FiLink, FiTrash, FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/" >
        <FiArrowLeftCircle size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          http://www.google.com
        </button>
        <button className="link-delete">
        <FiTrash size={18} color="#FF5454" />
        </button>
      </div>
    </div>
  )
}
