import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const data = [
    {
      "class": "nav-link active",
      "text": "Home",
      "Link": "/"
    },
    {
      "class": "nav-link",
      "text": "About",
      "Link": "/about"
    },
    {
      "class": "nav-link",
      "text": "Services",
      "Link": "/services"
    },
    {
      "class": "nav-link",
      "text": "Projects",
      "Link": "/projects"
    },
    {
      "class": "nav-link",
      "text": "Contact",
      "Link": "/contact"
    },
  ]
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{fontFamily:"'Poppins', sans-serif",padding:"0.8rem 1.5rem", backgroundColor:'#04042a'}}>
        <div className="container-fluid fs-5">
          <a className="navbar-brand" href="#" style={{fontSize:'1.8rem', fontWeight:'bold', color: "#ffffff"}}>
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-auto d-flex gap-2">
              {
                data.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link className={item.class} aria-current="page" href={item.Link}  style={{ color: "#ffffff" }}>
                      {item.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar