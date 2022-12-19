export const EmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const PasswordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;

export const TelValidation = /^\d{3}-\d{3,4}-\d{4}$/;
