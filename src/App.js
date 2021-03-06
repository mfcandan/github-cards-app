import './App.css';
import React from 'react'
import CardList from './components/CardList';
import Form from './components/Form';

class App extends React.Component {
  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };

  render(){
    return( 
      <>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList testData={this.state.profiles}/>
      </>
    )
  }
}

export default App;