export default class userService {
    static createUser(user) {
        return fetch('http://localhost:3000/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
}
