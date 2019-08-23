import React from 'react'

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0, scrolled: 0 };
  }

  handleScroll = (event) => {
    if (window != null) {
      this.setState({
        scrolled: window.pageYOffset
      });
    }
  }

  handleResize = (event) => {
    if (window != null) {
      var offset = 0;
      var ratio = window.innerWidth / window.innerHeight;
      if (ratio > 1.77) {
        offset = Math.round(window.innerWidth / 1.77 - window.innerHeight) / -2;
      }
      this.setState({
        offset: offset
      });
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div id="cover-container" style={{backgroundPositionY: this.state.offset + this.state.scrolled / -2}}>
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
      </div>
    )
  }
}

export default Cover
