import React, { Component } from 'react';

import Posts from '../../assets/json/posts.json';

import { IPost } from '../../interfaces';

import { PostPreview } from '../../components';

import './Blog.scss';

class Blog extends Component {
    render() {
        return <div className="Blog">
            <div className="wrapper">
                <h1>Blog</h1>
                {Posts.map(post => <PostPreview key={post.id} post={post} /> )}
            </div>
        </div>
    }
}

export default Blog;