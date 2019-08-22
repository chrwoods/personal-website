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
    <style jsx>{`
      #cover-container {
        text-align: center;
        background-image: url("/static/landing-landscape.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center right;
        height: 100vh;
        // background-position: -10vw 0;
        // TODO: make this parallax
      }
    `}</style>
    <h1><Test></Test>{}</h1>
  </div>
)

export default Cover
