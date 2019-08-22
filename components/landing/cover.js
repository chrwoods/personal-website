import React from 'react'
import Document from 'next/document'
import dynamic from 'next/dynamic'

const Test = () => {
  console.log(process);
  // console.log(document);
  return null;
}

const Cover = () => (
  <div id="cover-container">
    <div id="cover-text">
      <p>Hello, I'm</p>
      <h1>CHRISTOPHER WOODS</h1>
      <p>(but you can call me Chris)</p>
    </div>
    <style jsx>{`
      #cover-container {
        text-align: center;
        background-image: url("/static/landing-landscape.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center right;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        // TODO: make this parallax
      }

      #cover-text {
        margin: 0;
        font-size: 1.8rem;
        color: white;
      }

      p {
        margin: 0;
      }

      h1 {
        font-size: 4rem;
        margin: 0;
      }
    `}</style>
    <h1><Test></Test>{}</h1>
  </div>
)

export default Cover
