import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

// const Header = (props) => {
//   return <h1 id="id">{props.text}</h1>;
// }
// const Element = <p>Paragraph</p>;

// class Main extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="main">
//         <Header text={'Title ' + this.props.count}/>
//         {Element}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)