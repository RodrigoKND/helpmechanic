import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { fetchGet } from '../../fetch/fetchGet/fetchGet';
import { useQuery } from '@tanstack/react-query';
import './blogstruct.css';
export default function Blogstruct() {
    const { title } = useParams();
    const [post, setPost] = useState();
    const query = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetchGet('blog'),
        retry: 3
    })
    const findElement = query.data?.posts.find(post => {
        const replaceTitle = post.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '')

        return { replaceTitle, content: post.content }
    })
    
    if (findElement === title) setPost(findElement.content)
    if (findElement === 'undefined') {
        <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>
            Regresar
        </Link>
    }
    return (
        <main className='text-white' style={{ background: '#1F2730', height: '100%', width: 'auto' }}>
            {
                query.isLoading && (
                    <>
                        <h4 className='text-white text-center p-4' style={{ marginTop: '7vh' }}>
                            Cargando contenido...
                        </h4>
                        <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>
                            Regresar
                        </Link>
                    </>
                )
            }

            {query.isError && (
                <>
                    <h4 className='text-danger text-center mt-4 p-3'
                        style={{ marginTop: '7vh' }}>
                        Ups...hubo un error
                    </h4>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary p-3' onClick={() => query.refetch()}>
                            Intentar otra vez
                        </button>
                    </div>
                    <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>Regresar</Link>
                </>
            )
            }
            {query.error && (
                <>
                    <h4 className='text-danger text-center mt-4 p-3'
                        style={{ marginTop: '7vh' }}>
                        Existió un error al recuoerar el post
                    </h4>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary p-3' onClick={() => query.refetch()}>
                            Intentar otra vez
                        </button>
                    </div>
                    <Link to='/' className='nav-link text-center fs-3 p-3 text-primary'>Regresar</Link>
                </>
            )
            }
            {post && parse(post)}
        </main>
    );
}