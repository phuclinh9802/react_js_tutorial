import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';

function App() {

  // React will call the Welcome component with {name: 'Phillip'} as the props
  // Here, according to the Welcome component, it returns <h1>Hello, {props.name}</h1>
  // we can also render Welcome component many times with different prop value

  const welcomeElement = <Welcome name="Phillip"/>;
  const welcomeElement2 = <Welcome name="Nguyet"/>;

  // Comment data
  const authorProp = {
      name: "Phillip Nguyen",
      avatarUrl: null
    
  }
  const commentElement = <Comment author={authorProp} 
                                  text='I am the author of this book'
                                  date={new Date()}          
                        />


  return (
    <div className="App">
        <Clock/>
        <LoginControl />
    </div>
  );
}

export default App;
