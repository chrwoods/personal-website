import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/chrwoods', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <img src="/static/logo-white.png" />
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Proxima Nova Light, Helvetica, sans-serif;
        font-size: 16px;
      }
      nav {
        position: fixed;
        height: 5rem;
        background-color: rgba(48, 120, 195, 0.4);
        color: white;
        text-align: center;
        width: 100%;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </nav>
)

export default Nav
