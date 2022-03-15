import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CharactersContextProvider from './contexts/CharactersContext';
import Characters from './components/Characters';
import NotFound from './components/NotFound';
import CharacterContextProvider from './contexts/CharacterContext';
import Character from './components/CharacterDetails';
import SearchBar from './components/SearchBar/SearchBar';
import SearchCharactersContextProvider from './contexts/SearchCharactersContext';
import SearchResults from './components/SearchResults';
import './assets/css/styles.css';
import { ErrorBoundary } from './ErrorBoundaries/ErrorBoundaries';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <CharactersContextProvider>
                <Characters />
              </CharactersContextProvider>
            </Route>
            <Route path="/character/:char_id">
              <CharacterContextProvider>
                <Character />
              </CharacterContextProvider>
            </Route>
            <Route path="/search/:query">
              <SearchCharactersContextProvider>
                <SearchResults />
              </SearchCharactersContextProvider>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
