import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="container-error">
      <img src="error404.png" alt="Error 404" />
      <h1>Página não encontrada!</h1>
      <Link className="btn raise" to="/">Voltar</Link>
    </div>
  )
}
