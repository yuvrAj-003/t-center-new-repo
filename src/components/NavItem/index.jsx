// import React from 'react'
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
function NavItem({children , style , link}) {
  return (
    <div className={`nav-item ${style}`}>
      <Link to={link}>{children}</Link>
    </div>
  )
}

export default NavItem;