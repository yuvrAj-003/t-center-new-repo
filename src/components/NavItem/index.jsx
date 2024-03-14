// import React from 'react'
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
function NavItem({text , style , link}) {
  return (
    <div className={`hover:opacity-60 ${style}`}>
      <Link to={link}>{text}</Link>
    </div>
  )
}

export default NavItem;