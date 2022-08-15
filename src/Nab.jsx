import React from 'react'

function Nab() {
  return (
   <nav className='nav'>
    <a href='/' className='site-title'>
        Home

    </a>
    <ul>
        <li className='active'>
            <a href='/about'>
                About
            </a>

        </li>
        <li>
             <a href='/contact'>
                Contact

            </a>
        </li>
        
    </ul>

   </nav>
  )
}

export default Nab