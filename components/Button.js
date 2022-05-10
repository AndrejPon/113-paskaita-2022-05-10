const Button = (text, type) => {
  return `
  <button class="btn ${
    type === 'primary' ? 'primary' : 'outline'
  }">${text}</button>
      `;
};

export default Button;
