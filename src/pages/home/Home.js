import React, {useState, useEffect} from 'react';
import "./style.scss";
import {Card} from "../../components/card";
import postService from '../../services/postService';
import {Timeline} from "../../components/timeline";
import {Button} from "../../components/button";
import {FullWidth} from "../../layouts";

export const Home = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then((data) => {
            setPosts(data);
        })
    });

    let CardActions = () => <Button onClick={() => {alert('see more')}}>See more...</Button>;

    return (
        <FullWidth>
            <h2 className="mb-5">Homepage</h2>
            <div className='history'>
                <div className="history__timeline">
                    <Timeline/>
                </div>
                <div className="history__posts">
                    {posts.map(post => {
                        return (
                            <Card key={post.id}
                                  img={post.img}
                                  title={post.title}
                                  excerpt={post.excerpt}
                                  actions={<CardActions/>}
                            />
                        )
                    })}
                </div>
            </div>
        </FullWidth>
    )
};
