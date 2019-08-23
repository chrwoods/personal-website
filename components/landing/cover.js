import React from 'react'

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: 0 };
  }

  handleScroll = (event) => {
    if(window != null) {
      this.setState({
        scrolled: window.pageYOffset
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div id="cover-container" style={{backgroundPositionY: this.state.scrolled/-2}}>
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
