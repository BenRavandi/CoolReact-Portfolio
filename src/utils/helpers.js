
export function validatePhoneNumber(phoneNumber) {
  // Matches phone numbers with optional country code, only allowing digits and dashes
  var regex = /^(\+\d{1,3})?[\d-]{10,}$/;
  return regex.test(String(phoneNumber));
}

export function validateEmail(email) {
  var regex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  return regex.test(String(email).toLowerCase());
}