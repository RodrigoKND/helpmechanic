import { useState } from "react"

const FieldsInto = () => {
    const [fields, setFields] = useState({
        name: '',
        phone: '',
        address: '',
        check: '',
        selectOption: '',
        workshop: '',
        terms: '',
        email: '',
        passwd: '',
        token: ''
    })

    const handleChange = (evt) => {
        setFields({ ...fields, [evt.target.name]: evt.target.value });
    }

    return [fields,handleChange]
}

const useCheckBox = () => {
    const [value, setValue] = useState('isEmpty');

    const checkBox = (evt) => {
        const checked = evt.target.checked
        if (!checked) {
            setValue('isEmpty')
        }
        else {
            setValue('Iagree')
        }
    };
    return [value, checkBox]
};

const SelectAnOption = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const checkValue = (evt) => {
        const valueSelect = evt.target.value

        if (valueSelect === '0') {
            setErrorMessage('* Debe seleccionar una opción válida')
        }
        else setErrorMessage('')
    }
    return [errorMessage, checkValue]
}


export {
    FieldsInto,
    useCheckBox,
    SelectAnOption,
}



