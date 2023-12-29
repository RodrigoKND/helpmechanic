import { useState } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { fetchGet } from '../../fetch/fetchGet/fetchGet';

import './blogstruct.css';

export default function Blogstruct() {
    const { title } = useParams();
    // console.log("params", title)
    const [post, setPost] = useState();
    fetchGet('blog')
        .then(data => {
            data.posts.map(elements => {
                // console.log(title.title)
                const replaceTitle = elements.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^a-z0-9-]/g, '')
                return replaceTitle === title ? setPost(elements.content) : null
            })
            // setPost(data.post.content)
        })
    return (
        <main className='text-white' style={{ background: '#1F2730', height: '100%', width: 'auto' }}>
            {post && parse(post)}
        </main>
    );
}