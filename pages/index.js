import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Cover from '../components/landing/cover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Header />

      <Cover />

      <div className="main">
        <h1>Welcome to my personal website!</h1>
        <p className="description">
          This page is still a work in progress, but in the meantime you can check out my:
        </p>

        <div className="links">
          <Link href="https://github.com/chrwoods">
            <a>
              <h3>
                <FontAwesomeIcon icon={faGithub} size="xs" width="1.5rem" />
                &nbsp;GitHub &rarr;
              </h3>
            </a>
          </Link>


          <Link href="https://www.linkedin.com/in/chrwoods">
            <a>
              <h3>
                <FontAwesomeIcon icon={faLinkedin} size="xs" width="1.5rem" />
                &nbsp;LinkedIn &rarr;
              </h3>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .main {
          height: 50vh;
        }
        h1 {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }
        .description {
          font-size: 1.2rem;
          text-align: center;
        }
        .links {
          text-align: center;
        }
        h3 {
          font-size: 1.5rem;
          margin: 1rem 1.5rem;
        }
        a {
          border-radius: 2rem;
          text-decoration: none;
          color: white;
          background-color: #3078c3;
          display: inline-block;
          margin: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Home
