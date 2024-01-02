import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ContentOfTheForm, { useFormData } from '../contentOfTheForm/contentOfTheForm.js';

import { fetchGet } from '../../../fetch/fetchGet/fetchGet.js';
import { fetchPost } from '../../../fetch/fetchPost/fetchPost.js';

import { AuthMechanic } from '../../../context/context-registerUser/accessMechanic.js';
import { useMutation } from '@tanstack/react-query';

export default function LogicOfTheContent() {
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const { setIsAuthMechanic } = useContext(AuthMechanic);
    useEffect(() => {
        fetchGet('mecanico').then(data => setToken(data.token));
    }, []);
    const { formField, handleChange, valueTerms, terms } = useFormData(token);
    const mutation = useMutation({
        mutationFn: () => fetchPost('registerMechanic', formField),
    })

    const submitForm = async (evt) => {
        evt.preventDefault();
        mutation.mutate();
    }
    useEffect(() => {
        if (mutation.isSuccess) {
            if (mutation.data.hex) {
                localStorage.setItem('rvpru', mutation.data.hex);
                setIsAuthMechanic(true);
                navigate('/mecanico/direccionTaller');
            }
        }
    }, [mutation.isSuccess, mutation.data, setIsAuthMechanic, navigate]);
    return (
        <>
            <form onSubmit={submitForm}>
                {mutation.data ?
                    mutation.data.message ?
                        <h4 className='text-center text-danger' style={{width:'max-content' }}>
                            Error al enviar su información, inténtelo de nuevo más tarde
                        </h4> : null
                    : null
                }
                <ContentOfTheForm
                    formFields={formField}
                    onFormChange={handleChange}
                    onTerms={valueTerms}
                    terms={terms}
                ></ContentOfTheForm>
                <input type='hidden' value={token} />
                <section className='d-flex justify-content-center'
                    style={{ background: 'none' }}>
                    {!mutation.isPending ?
                        <button className='btn btn-primary mb-4 mt-4'
                            type='submit'> Siguiente
                        </button>
                        :
                        <div className='text-center text-success'>
                            <strong className=''>Enviando su información...</strong>
                        </div>
                    }
                </section>
            </form >
        </>
    );
}