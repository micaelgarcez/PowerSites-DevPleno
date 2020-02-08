import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

const Index = () => {
  return (
    <div>
      <Header />
      <h1>teste!</h1>
      <p>
        <Link to="/contato">Contato</Link>
      </p>
    </div>
  )
}
export default Index