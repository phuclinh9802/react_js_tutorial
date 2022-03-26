import React, { Component } from 'react'

function Blog(props) {
    const posts = props.posts;
    const isLoggedIn = props.isLoggedIn;
    let navbar;
    let content;

    // check if isLoggedIn = true/false
    if (isLoggedIn) {
        navbar = props.posts.map((post) => 
        <li key={post.id}>
            {post.title}
        </li>
        )

        content = props.posts.map((post) => {
            return (
            <div key={post.id} id="content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
            </div>

            )
            }
        )
        }
    

    return (
        <div className='blog'> 
            {navbar}
            <hr />
            {content}
        </div>

    )
}

export default Blog;