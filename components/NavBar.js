const NavBar = () => {
  return `
    <nav class="NavBar">
    <img src="./images/logo.png" alt="logo">
    <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div>
        <button class="SignUp" type="button">Sign Up</button>
        <button class="LogIn" type="button">Log in</button>
    </div>
    </nav>
`;
};

export default NavBar;
