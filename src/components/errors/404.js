import '../../fonts.css';
import '../../App.css'
export default function Notfound() {
    return (
        <div style={{marginTop:'5%'}}>
            <div className='d-flex justify-content-center'>
                <img className='imgKey' src='/llave.png' alt='No se ha encontrado'/>
            </div>
            <h4 className='fs-4 mt-4 title text-center'>Not Found</h4>
        </div>
    );
}