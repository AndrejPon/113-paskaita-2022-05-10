import Button from './components/Button.js';
import Container from './components/Container.js';
import NavBar from './components/NavBar.js';

const app = document.getElementById('app');
app.innerHTML += Container(
  Button('Log In', 'outline') + Button('Sign Up', 'primary')
);
app.innerHTML += Container(NavBar());
