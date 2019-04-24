window.addEventListener('load', function() {
  var idToken;
  var accessToken;
  var expiresAt;

  var webAuth = new auth0.WebAuth({
    domain: 'dev-m9r-m0o1.eu.auth0.com',
    clientID: 'g3XkL21uJdDt5FjfOqdJv1YP4txeTLNH',
    responseType: 'token id_token',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

  var logoutBtn = document.getElementById('btn-logout');

  logoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.logout();
  });

});