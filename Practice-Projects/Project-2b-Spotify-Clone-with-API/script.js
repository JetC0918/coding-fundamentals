// var TOKEN = "" <-- This is the token we will use to make requests to Spotify API. Empty at first, but we will update later

// step 1 - wait for the page to be fully loaded.

// step 2 - authorize & get the token.

// step 3 - store the token in the variable above.

// step 4 - start fetching the user's top items using he token.

// step 5 - display thhe user's top items.

// step 6 - start fetching the new releases using the tokenn.

// step 7 - display new releases.

// step 8 - start fetching featured playlists using the token.

// step 9 - display featured playlists.

var TOKEN = ""; // The token, will be updated later.
var client_id = "c257544f34ad4965953d21c5a2d2bba7" // Client ID
var redirect_uri = window.location.origin; // The current page URL
var scope = "user-read-private user-read-email user-top-read"; // A space seperated scope

function authorize(){
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri)
    window.open(url, "_self")
}

window.addEventListener("load",function() {
    authorize();
});