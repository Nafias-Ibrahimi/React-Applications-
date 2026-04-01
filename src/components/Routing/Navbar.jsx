import React from 'react'

function Navbar() {
  return (
    <div>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        <navLink to='/about' className={({isActive})=>
        isActive ? 'Active' : 'Link'
        }>About</navLink>



    </div>
  )
}

export default Navbar