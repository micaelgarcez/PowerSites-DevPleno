import React from 'react'
import './styles.css'
import BtnWhatsapp from '../components/BtnWhatsapp'
import Logo from '../components/Logo'
import Helmet from 'react-helmet'

import img from '../assets/img.png'
import selo from '../assets/selo.png'

import { graphql, useStaticQuery } from 'gatsby'

const Header = ({ children }) => {
  return(
    <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
      { children }
    </div>
  )
}

const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
      <div className='p-8 sm:w-1/2'>
        <h2 className='font-bold text-2xl'>Móveis planejados</h2>
        <p className='text-xl'>Comerciais e residenciais para todos os ambientes</p>
        <p className='text-gray-700'>Atendemos pouso alegre e toda a região</p>
      </div>
      <div className='sm:w-1/2'>
        <img src={img} alt='Móveis Planejados' />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
      <div>
        <h5>Lima Móveis</h5>
        <p>Rua Tal, Bairro y</p>
      </div>
      <BtnWhatsapp />
    </div>
  )
}

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const selos = [1,2,3,4]
  const projetos = [1,2,3,4,5,6]
  return(
    <div>
      <Helmet>
        <title>{ site.siteMetadata.title }</title>
      </Helmet>
      <Header>
        <Logo />
        <div>
          <BtnWhatsapp />
        </div>
      </Header>
      <Hero />
      <div className='flex flex-col items-center sm:flex-row justify-around'>
        {
          selos.map(() => {
            return <img src={selo} alt='selo' className='my-4' />
          })
        }
      </div>
      <div>
        <h2 className='px-8 py-2 text-2xl font-bold'>Projetos de móveis planejados</h2>
        <div className='flex flex-wrap justify-center'>
        {
          projetos.map(() => {
          return (
            <div className='max-w-sm'>
              <div className='m-2 rounded sahdow-lg'>
                <img src={img} alt='Projeto 1' />
                <div className='px-6 py-4'>
                  <p className='font-bold text-xl mb-2'>Projeto</p>
                  <p>Descrição</p>
                </div>
              </div>
            </div>
          )})
        }
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Index