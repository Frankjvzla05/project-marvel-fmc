
const base_url = "https://gateway.marvel.com:443/v1/public/";
const api_accesses = "fb43a65fa72d882ad3e656631304f5e9&hash=1e87cb0318af709ba536aabec8c1a718";

export const marvelCharacters = () => `${base_url}characters?ts=1&apikey=${api_accesses}`;
export const DetailCharactersGet = (char_id) => `${base_url}characters/${char_id}?ts=1&apikey=${api_accesses}`;





// Character id

// https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=fb43a65fa72d882ad3e656631304f5e9
// https://gateway.marvel.com:443/v1/public/characters/1011334?ts=1&apikey=fb43a65fa72d882ad3e656631304f5e9&hash=1e87cb0318af709ba536aabec8c1a718

//ejm Cahracters 
// https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fb43a65fa72d882ad3e656631304f5e9&hash=1e87cb0318af709ba536aabec8c1a718

// https://gateway.marvel.com:443/v1/public/characters?apikey=
// https://gateway.marvel.com:443/v1/public/series?apikey=fb43a65fa72d882ad3e656631304f5e9

// key pivate :  b39f014e7a57f09b7bb529afe2b912364af5006e
// ts: 1
// key public : fb43a65fa72d882ad3e656631304f5e9
// hash:  1e87cb0318af709ba536aabec8c1a718


//   1b39f014e7a57f09b7bb529afe2b912364af5006efb43a65fa72d882ad3e656631304f5e9



