export default class userService {
    static createUser(user) {
        return fetch('http://localhost:3000/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    };

    static getUserData() {
        return fetch('http://localhost:3000/user')
            .then(data =>  data.json())
            .then(data => data);
    };

    static login(user) {
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
}
