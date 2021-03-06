(async () => {
  /**
   * Create an app with your Spotify account
   * https://developer.spotify.com/dashboard/
   * Obtain Client ID and Client Secret
   */
  const clientId = ''; // Add CLIENT ID
  const clientSecret = ''; // Add CLIENT SECRET

  // Create Base64-encoded ASCII string from client credentials
  const base64Encoded = window.btoa(`${clientId}:${clientSecret}`);

  // Spotify Web API endpoints
  const API_TOKEN = 'https://accounts.spotify.com/api/token';
  const API_SEARCH = 'https://api.spotify.com/v1/search';

  /**
   * Use the Fetch API to create a POST request to API_TOKEN
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
   * Request must include headers with two properties:
   *   Authorization: `Basic ${base64Encoded}`
   *   Content-Type: 'application/x-www-form-urlencoded'
   * Request must also include body with 'grant_type=client_credentials'
   */

  /* YOUR CODE GOES HERE */

  /**
   * *await* the fetch to return a Promise response
   * Convert the response to JSON and *await* again for the data
   * Data includes a BEARER TOKEN to access the Spotify WEB API
   *
   * You can then access the Search API and pass in a search term
   */
  async function searchMusic(bearerToken) {
    const searchTerm = 'roadhouse blues';
    const searchQuery = encodeURIComponent(searchTerm);
    const searchTypes = 'album,artist,playlist';

    const response = await fetch(
      `${API_SEARCH}?q=${searchQuery}&type=${searchTypes}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      }
    );
    const data = await response.json();

    // See browser console for results
    console.log('DATA:', data);
  }

  /* YOUR CODE GOES HERE */

  /**
   * searchMusic() can be called after receiving the bearer access token
   * and passing it in as a parameter
   *    Ex. searchMusic('BQDUyKNjI...');
   * In this example it will return artists, albums, and playlists
   */

  /**
   * NEXT STEPS:
   * - Learn how to read data from HTML form input with JS
   * - Replace hardcoded search term with text from search form
   * - Display results in HTML and style with CSS
   */
})();
