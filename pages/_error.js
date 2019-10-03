import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Cover from '../components/landing/cover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <h1>Oops!</h1>
        <p>
          Either you got somewhere you weren't supposed to, or I haven't written this page yet.
        </p>
        <p>
          Probably the latter.
        </p>
        <Link href="/">
          <a>
            <p>
            Go back home?
            </p>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .main {
          padding: 40vh 0;
        }
        h1 {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }
        p {
          font-size: 1.2rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Home
