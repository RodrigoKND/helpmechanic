import { Link } from 'react-router-dom';
import RenderImages from '../../renderImages/renderImages';
export default function Cards({ urlImage, title, datePost }) {
    function generateSlug(text) {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }
    return (
        <article className='card text-white'
            style={{ background: 'none', border: 'none', width: '18rem' }}>
            <div className='card-header'>
                <Link to={'/bloghelpmechanic/' + generateSlug(title)} style={{ cursor: 'pointer' }}>
                    <RenderImages
                        classImg={'card-img-top posts'}
                        pathImage={urlImage}
                        altImage={title}
                        style={{ cursor: 'pointer' }} >
                    </RenderImages>
                </Link>
            </div>
            <div className='card-body'>
                <h6 className='card-title' style={{fontSize:'medium'}}>{title}</h6>
            </div>
            <div className='card-footer'>
                <i>{datePost}</i>
            </div>
        </article>
    );
}