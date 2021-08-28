import React, {useState} from 'react';
import { SpotifyApiContext, Artist } from 'react-spotify-api';
import Cookies from 'js-cookie';

import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';

const Auth = (props) => {
    const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

  return (
    <div className='app'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <Artist id={props.id}>
        {({ data, loading, error }) =>
          data ? (
            <div>
              <h1>{data.name}</h1>
              <ul>
                {data.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : loading
        }
      </Artist>
          <p>You are authorized with token: {token}</p>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback/'
          clientID='6cea1e17d7fd45d39907384dabbca01f'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </div>
  )
}

 
export default Auth;