import React, { useEffect, useState } from 'react'

const Header = () => {
  const [contador, setContador] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setContador(valorAntigo => valorAntigo + 1)
    }, 1000)
  }, [])
  return <h1>PowerSites! Contador: {contador}</h1>
}
export default Header