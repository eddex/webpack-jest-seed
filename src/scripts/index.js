const githubApi = 'https://api.github.com';
const authorizationHeader = {
	headers: {'Authorization': 'token <<your token>>'}
};

function fetchFollowers(followersUrl) {
    let response = fetch(followersUrl, {
        method: 'GET',
        authorizationHeader
    });
    response.then(data => data.json().then(json => {
        for (follower of json) {
            let li = document.createElement('li');
            li.innerText = follower.login;
            document.getElementById('follower').appendChild(li);
        }
    }));
}

function search(event, username) {
    event.preventDefault();
    let response = fetch(`${githubApi}/users/${username}`, {
        method: 'GET',
        authorizationHeader
    });
    response.then(data => data.json().then(json => {
        document.getElementById('userImage').src = json.avatar_url;
        document.getElementById('username').innerText = json.login;
        fetchFollowers(json.followers_url);
    }));
}

// attach search function wo window (so it can be called in the HTML file)
window.search = search;