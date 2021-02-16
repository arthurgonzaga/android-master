import React from "react"
import { Link } from "gatsby"
import SocialMediaButtons  from 'react-social-media-buttons';

const Layout = ({ location, title, children, language}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>

      //not working yet
      <SocialMediaButtons 
          links={['https://www.linkedin.com/in/arthurgonzaga20/','https://github.com/arthurgonzaga','mailto:arthurgonzagaxyz@gmail.com']}
          buttonStyle={{width: '32px', height: '32px', margin: '0px 14px', backgroundColor: 'transparent'}}
          iconStyle={{color: '#5c5c5c'}}
          openNewTab={true}
        />
      </footer>
    </div>
  )
}

export default Layout
