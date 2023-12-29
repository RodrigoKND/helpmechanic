import { useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import {fetchGet} from '../../fetch/fetchGet/fetchGet';

import './blogstruct.css';

export default function Blogstruct() {
    const { title } = useParams();
    const [post, setPost] = useState();
    fetchGet('blog')
        .then(data => {
            data.posts.map(elements => {
                const replaceTitle = elements.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^a-z0-9-]/g, '')
                return replaceTitle === title ? setPost(elements.content) : null
            })
        })
    return (
        <main className='text-white' style={{ background: '#1F2730', height: '100%', width: 'auto' }}>
            {post && parse(post)}
        </main>
    );
}