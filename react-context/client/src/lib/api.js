const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

/**
 * Signs in a user.
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to `{ token, user }`.
 */
export async function signIn(username, password) {
  return await signUpOrIn('sign-in', username, password);
}

/**
 * Signs up a user.
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to the user.
 */
export async function signUp(username, password) {
  return await signUpOrIn('sign-up', username, password);
}

/**
 * Signs up or signs in depending on the action.
 * @param {string} action Action to take, either 'sign-up' or 'sign-in'
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to user (sign-up) or `{ token, user }` (sign-in).
 */
export async function signUpOrIn(action, username, password) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  const res = await fetch(url(`/api/auth/${action}`), req)
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
