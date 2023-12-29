import { useState } from "react";
import { Link } from "react-router-dom";

export const formFields = {
    name: '',
    phone: '',
    address: '',
    check: '',
    selectOption: '',
    workshop: '',
    terms: '',
    token: ''
}
export const useFormData = (token) => {
    const [terms, setTerms] = useState('isEmpty');
    const [formField, setFormField] = useState(formFields);
    formField.token = token;
    const valueTerms = (evt) => {
        return evt.target.checked ? setTerms('Iagree') : setTerms('isEmpty');
    }
    formField.terms = terms;
    const handleChange = (evt) => {
        if (evt.target.name === 'workshop') {
            const reader = new FileReader();
            reader.onload = function (e) {
                setFormField({
                    ...formField,
                    workshop: {
                        name: evt.target.files[0].name,
                        mimetype: evt.target.files[0].type,
                        size: evt.target.files[0].size,
                        data: e.target.result,
                    },
                });
            };
            reader.readAsDataURL(evt.target.files[0]);
        } else {
            setFormField({
                ...formField,
                [evt.target.name]: evt.target.value
            });
        }
    };
    return { formField, handleChange, valueTerms, terms };
}

export default function ContentOfTheForm({ formFields, onFormChange, onTerms, terms }) {
    return (
        <div className='bg-light p-3'>
            <section style={{ background: 'none' }}>
                <label> Nombre </label>
                <input type='text' className='form-control mt-1 mb-2' name='name'
                    onChange={onFormChange} value={formFields.name} autoComplete='off' />
            </section>
            <section style={{ background: 'none' }}>
                Celular
                <input type='tel' className='form-control mt-1 mb-2' name='phone'
                    placeholder='Número de contacto unico' onChange={onFormChange}
                    value={formFields.phone} autoComplete='off' />
            </section>
            <label htmlFor='address'>
                Dirección de su taller
            </label>
            <input type='text' className='form-control mb-2' onChange={onFormChange}
                placeholder='Dirección de su taller'
                name='address'
                style={{ width: '100%' }}
                id='address'
                autoComplete='off' value={formFields.address} />
            <div>
                <label> ¿Tiene su propia movilidad? </label>
            </div>
            <div className='text-center fs-5 mt-1 mb-3'>
                <label className='me-4'>
                    <input type='radio' name='check' onChange={onFormChange}
                        value='yes' /> Si
                </label>
                <label>
                    <input type='radio' className='ms-4' name='check'
                        onChange={onFormChange} value='no' /> No
                </label>
            </div>
            <div className='mb-4'>
                <section className="d-flex justify-content-center" style={{ background: 'none' }}>
                    <strong className='text-center'>
                        Años de experiencia
                    </strong>
                    <select className='ms-4'
                        onChange={onFormChange} name='selectOption'>
                        <option value='0'>Opciones...</option>
                        <option value='1'>1 - 3</option>
                        <option value='2'>4 - 6</option>
                        <option value='3'>7 - más</option>
                    </select>
                </section>
            </div >
            <strong className="d-flex justify-content-center text-center">
                Imagen de su taller
                <input type='file' className='ms-2' name='workshop' onChange={onFormChange}
                    accept='image/jpg,image/jpeg,image/png' />
            </strong>
            <section style={{ background: 'none' }}>
                <label className='text-primary mt-3 ms-2'>
                    <input className='me-2' type='checkbox' name='terms' onClick={onTerms}
                        onChange={onFormChange} value={terms} />
                    <Link to='/privacidad'>
                        Acepto los términos y condiciones
                    </Link>
                </label>
            </section>
        </div>
    );
}