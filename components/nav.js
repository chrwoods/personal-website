import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/food', label: 'Food' },
  { href: 'https://github.com/chrwoods', label: 'Github' }
];

const Nav = props => (
  <nav>
    <Link prefetch href="/">
      <a>
        <img src="/static/logo-white.png" />
      </a>
    </Link>
    <ul>
      {links.map(({ href, label }) => (
        <li key={"nav-link-" + label}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: proxima-nova, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 300;
      }
      nav {
        display: flex;
        position: fixed;
        height: 5rem;
        background-color: rgba(48, 120, 195, 0.4);
        color: white;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
      }
      nav > a {
        position: fixed;
        display: flex;
        left: 1rem;
      }
      img {
        height: 4rem;
      }
      ul {
        display: flex;
      }
      li {
        display: flex;
        padding-right: 1.5rem;
      }
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        color: #fd9;
      }
    `}</style>
  </nav>
)

// Nav.propTypes = {
//   sticky: bool
// }

export default Nav
