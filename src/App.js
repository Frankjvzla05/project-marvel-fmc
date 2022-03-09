import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer';
import CharactersContextProvider from './contexts/CharactersContext';
import Characters from './components/Characters';
import NotFound from './components/NotFound';
import './assets/css/styles.css';
import CharacterContextProvider from './contexts/CharacterContext';
import Character from './components/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch >
        <Route exact path="/">
          <CharactersContextProvider>
            <Characters />
          </CharactersContextProvider>
        </Route>
        <Route path="/character/:char_id">
          <CharacterContextProvider>
            <Character />
          </CharacterContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
