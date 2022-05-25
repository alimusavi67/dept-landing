import Home from './components/home/Home';
import React from 'react';
import GlobalStyle from './styles';

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Home />
    </div>
    </>
  );
}

export default App;
