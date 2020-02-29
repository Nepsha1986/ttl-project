let posts = [
    {
        id: 1,
        img: 'https://picsum.photos/300/200',
        title: 'Some post here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum itaque quis tempora.'
    },
    {
        id: 2,
        img: 'https://picsum.photos/300/200',
        title: 'Some other post here ',
        excerpt: 'Consectetur adipisicing elit. Dolorum itaque quis tempora.'
    }
];

class PostService {
    static getPosts() {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(posts)
            }, 600);
        });
    }
}

export default PostService;
