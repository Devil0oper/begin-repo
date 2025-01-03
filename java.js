// Sample account data
const accounts = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Function to verify account
function verifyAccount(username, password) {
    const account = accounts.find(acc => acc.username === username && acc.password === password);
    if (account) {
        return 'Account verified successfully!';
    } else {
        return 'Invalid username or password.';
    }
}

// Example usage
const username = 'user1';
const password = 'password1';
console.log(verifyAccount(username, password)); // Output: Account verified successfully!