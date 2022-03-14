
const base_url = 'https://gateway.marvel.com:443/v1/public/';
const api_accesses = 'fb43a65fa72d882ad3e656631304f5e9&hash=1e87cb0318af709ba536aabec8c1a718';

export const marvelCharacters = () => `${base_url}characters?ts=1&apikey=${api_accesses}`;
export const DetailCharactersGet = (char_id) => `${base_url}characters/${char_id}?ts=1&apikey=${api_accesses}`;
export const SearchCharactersGet = (query) => `${base_url}characters?nameStartsWith=${query}?ts=1&apikey=${api_accesses}`;
