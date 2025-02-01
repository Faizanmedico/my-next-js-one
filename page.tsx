
import Image from 'next/image'

import React from 'react'

const About = () => {
  return (
    <div>



<>
  <title>FaizanMedico</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .fakeimg {\n    height: 200px;\n    background: #aaa;\n  }\n  "
    }}
  />
  <div className="p-5 bg-secondary p-3 text-white text-center">
    <h1>Faizanmedico</h1>
    <p>Best Pharmacy & Online Medical Store</p>
  </div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="">


        <Image
 src={'/1.png'}
 alt="Picture of the author"
 width="180"
 height="180"
 className="bg-mint text-mint fill-current"
></Image>


        </div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3 className="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <hr className="d-sm-none" />
      </div>
      <div className="col-sm-8">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2020</h5>
        <div className="">

        <Image
 src={'/5.png'}
 alt="Picture of the author"
 width="180"
 height="180"
 className="bg-mint text-mint fill-current"
></Image>


            
        </div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
        <h2 className="mt-5">TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2020</h5>
        <div className="">

        <Image
 src={'/2.png'}
 alt="Picture of the author"
 width="180"
 height="180"
 className="bg-mint text-mint fill-current"
></Image>
<h6>  Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

</h6>

        </div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-5 p-4 bg-dark text-white text-center">
    <p>Footer</p>
  </div>
</>




    </div>
  )
}

export default About