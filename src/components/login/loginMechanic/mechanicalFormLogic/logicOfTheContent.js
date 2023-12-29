import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ContentOfTheForm, { useFormData } from '../contentOfTheForm/contentOfTheForm.js';

import { fetchGet } from '../../../fetch/fetchGet/fetchGet.js';
import { fetchPost } from '../../../fetch/fetchPost/fetchPost.js';

import { ToastContainer, toast } from 'react-toastify';

export default function LogicOfTheContent() {
    const [token, setToken] = useState('');
    const [messageError, setMessageError] = useState('');
    const [toastContainerKey, setToastContainerKey] = useState(0);
    const navigate = useNavigate();
    const buttonToSend = useRef();
    const infoToNotify = useRef();
    useEffect(() => {
        fetchGet('mecanico').then(data => setToken(data.token));
    }, []);
    const { formField, handleChange, valueTerms, terms } = useFormData(token);
    const submitForm = async (evt) => {
        evt.preventDefault();
        buttonToSend.current.setAttribute('disabled', 'dbutton');
        infoToNotify.current.textContent = 'Enviando su información...';
        setToastContainerKey((prevKey) => prevKey + 1);
        const data = await fetchPost('registerMechanic', formField);
        if (data.hex) {
            infoToNotify.current.textContent = '';
            localStorage.setItem('rvpru', data.hex);
            navigate('/mecanico/direccionTaller');
        } else {
            setMessageError(data.message);
            infoToNotify.current.textContent = '';
            buttonToSend.current.removeAttribute('disabled');
        }
    }
    useEffect(() => {
        if (messageError) {
            toast(messageError, { type: 'error', containerId: 'customContainer' });
            setMessageError(null);
        }
    }, [messageError, toastContainerKey]);
    return (
        <>
            <form onSubmit={submitForm}>
                <ContentOfTheForm
                    formFields={formField}
                    onFormChange={handleChange}
                    onTerms={valueTerms}
                    terms={terms}
                ></ContentOfTheForm>
                <input type='hidden' value={token} />
                <div className='text-center text-success'>
                    <strong ref={infoToNotify}></strong>
                </div>
                <section className='d-flex justify-content-center' style={{ background: 'none' }}>
                    <button className='btn btn-primary mb-4 mt-4' ref={buttonToSend}
                        type='submit'> Siguiente </button>
                </section>
            </form >
            <ToastContainer key={toastContainerKey} containerId='customContainer' theme="colored" />
        </>
    );
}