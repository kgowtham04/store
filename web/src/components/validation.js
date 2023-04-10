const validation = (user) => {
    let errors = {};
    if (!user.username.trim()) {
      errors.username = "Username should not be empty";
    } else if (user.username.length < 5) {
      errors.username = "Username must be more than 4 characters";
    }
    if (!user.password.trim()) {
      errors.password = "Password should not be empty";
    } else if (user.password.length < 8) {
      errors.password = "Password must be more than 7 characters";
    }
    return errors;
  };
  
  export default validation;
  