import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CharactersContextProvider from './contexts/CharactersContext';
import Characters from './components/Characters';
import NotFound from './components/NotFound';
import CharacterContextProvider from './contexts/CharacterContext';
import Character from './components/CharacterDetails';
import './assets/css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
