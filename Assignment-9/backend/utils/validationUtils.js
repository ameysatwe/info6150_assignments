const validatePassword = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-])/.test(password)) {
    return "Password must contain atleast 1 uppercase, 1 lowercase, a digit and a special character.";
  }
};

const valdiateEmail = (email) => {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Invalid email address";
  }
};

export { validatePassword, valdiateEmail };
