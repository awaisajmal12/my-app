import react from 'react';
import logo from './logo.svg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function B(props) {
  // Import result is the URL of your image
  return (<header>
      <img src={logo} alt="Logo" />
      <h1>{props.oj}</h1>
      </header>
      );
}
export default B;