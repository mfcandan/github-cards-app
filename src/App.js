import './App.css';
import React from 'react'
import Card from './components/Card';


class App extends React.Component {
  //constructer
  //this

  render(){
    return( 
      <>
        <div className="header">{this.props.title}</div>
        <Card />
      </>
    )
  }
}

export default App;