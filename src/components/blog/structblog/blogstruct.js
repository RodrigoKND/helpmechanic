import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { fetchGet } from '../../fetch/fetchGet/fetchGet';
import { useQuery } from '@tanstack/react-query';
import './blogstruct.css';

function LoadingComponent() {
    return (
        <>
            <h4 className='text-white text-center p-4' style={{ marginTop: '7vh' }}>
                Cargando contenido...
            </h4>
            <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>
                Regresar
            </Link>
        </>
    );
}

function ErrorComponent() {
    return (
        <>
            <h4 className='text-danger text-center mt-4 p-3'
                style={{ marginTop: '7vh' }}>
                Ups... hubo un error
            </h4>
            <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>Regresar</Link>
        </>
    );
}

export default function Blogstruct() {
    const { title } = useParams();
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const query = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetchGet('blog'),
        retry: 3,
        onSuccess: () => setLoading(false),
        onError: () => {
            setError(true);
            setLoading(false);
        }
    });

    useEffect(() => {
        if (query.data) {
            const findElement = query.data.posts.find(post => {
                const replaceTitle = post.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^a-z0-9-]/g, '');

                return replaceTitle === title;
            });

            if (findElement) 
                setPost(findElement.content);
             else 
                setError(true); 
            
        }
    }, [query.data, title]);

    if (loading) {
        return (
            <LoadingComponent />
        );
    }

    if (error) {
        return (
            <ErrorComponent />
        );
    }

    return (
        <main className='text-white' style={{ background: '#1F2730', height: '100%', width: 'auto' }}>
            {post ? parse(post) : (
                <div>No se encontró el post</div> 
            )}
        </main>
    );
}

