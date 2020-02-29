import React, {useState, useEffect} from 'react';
import "./style.scss";
import {Card} from "../../components/card";
import postService from '../../services/postService';

export const Home = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then((data) => {
            setPosts(data);
        })
    }, posts);

    return (
        <div className="container">
            <h2>Homepage</h2>
            {posts.map(post => {
                return (
                    <Card img={post.img} title={post.title} excerpt={post.excerpt}/>
                )
            })}
        </div>
    )
};
