import Head from './head'
import Nav from './nav'
import { string } from 'prop-types'

const Header = props => {
  return (
    <div>
      <Head title={props.title} description={props.description} url={props.url} ogImage={props.ogImage} />
      <Nav />
    </div>
  )
}

Header.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}


export default Header
