import { useState, useEffect } from 'react'
import './links.css'
import { FiLink, FiTrash, FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinksSave } from '../../services/storeLinks'
import Modal from '../../components/Modal'

export default function Links() {
  const [myLinks, setMyLinks] = useState([])

  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@encurtaae')

      if (result.length === 0) {
      }

      setMyLinks(result)
    }

    getLinks()
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeftCircle size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {myLinks.map(Link => (
        <div key={Link.id}  className="links-item">
          <button className="link" onClick={ () => handleOpenLink(Link)} >
            <FiLink size={18} color="#fff" />
            {Link.long_url}
          </button>
          <button className="link-delete">
            <FiTrash size={18} color="#FF5454" />
          </button>
        </div>
      ))}

      {
        showModal && (
          <Modal
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )
      }
    </div>
  )
}
