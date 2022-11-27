import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import dynamic from "next/dynamic";
import mountainImg from "../../public/img/mountain.png";
import { useRouter } from 'next/router';

const ToggleButton = dynamic(() => import("./ToggleButton.jsx"), {
  ssr: false,
});

export default function Navbar() {

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="top-container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">

          <ToggleButton />
          <button className="hamburger navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className={"nav-item" + (pathname === "/" ? " active" : "")}>
                <Link className="nav-link" href="/">About</Link>
              </li>
              <li className={"nav-item" + (pathname === "/projects" ? " active" : "")}>
                <Link className="nav-link" href="/projects">Projects</Link>
              </li>
              <li className={"nav-item" + (pathname === "/contact" ? " active" : "")}>
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>

            </ul>
          </div>
        </nav>

      </div>

      {pathname === "/" ?
        <div className="home-header">
          <img className="cloud top-cloud" src="img/cloud.png" alt="cloud picture" />
          <div className="home-title">
            <h1 className="main-title">I'm Sam</h1>
            <h2 className="section-title">a programmer!</h2>
          </div>
          <img className="cloud bottom-cloud" src="img/cloud.png" alt="cloud picture" />
          <Image className="mountain" src={mountainImg} alt="mountain picture" />
        </div>
        : null
      }

      {pathname === "/projects" ?

        <div className="header">
          <h2 className="section-title">Projects</h2>
          <p className="header-desc">
            Below are some of my favourite programming projects, detailing the languages and tools used for each project,
            along with their GitHub repo link.
          </p>
        </div>
        : null
      }

      {pathname === "/contact" ?
        <div className="header">
          <h2 className="section-title h1-responsive font-weight-bold text-center">Contact Me</h2>

          <p className="header-desc w-responsive mx-auto">Know of any opportunities that might suit me? Let me know!
            I'm currently seeking work, so it would be greatly appreciated!
            <br />Fill in the form below and I'll get back to you as soon as I can.</p>
        </div>
        : null}
    </div>
  );
}
