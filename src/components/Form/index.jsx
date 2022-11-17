import React from 'react';
import DefaultButton from '../DefaultButton';
import DefaultInput from '../DefaultInput';
import DefaultSelect from '../DefaultSelect';
import { toast, cssTransition } from 'react-toastify';
import './index.css'

const Form = ({ data, setListTransactions, setHandleFilter }) => {

    const swirl = cssTransition({
        enter: "swirl-in-fwd",
        exit: "swirl-out-bck"
    });

    const handleForm = (e) => {
        e.preventDefault();

        const form = [...e.target].slice(0, -1);
        const obj = {};
        const check = form.map(item => item.value !== '' ? true : false);

        if (!check.includes(false)) {
            obj['id'] = data.length;
            obj['description'] = form[0].value;
            obj['type'] = form[2].value;

            form[2].value === "Saída"
                ? obj['value'] = parseInt(-form[1].value)
                : obj['value'] = parseInt(form[1].value);

            setListTransactions((old) => [...old, obj]);
            setHandleFilter([]);
            e.target.reset();
        } else {
            toast.warn('Ainda há espaços em branco!', {
                transition: swirl,
            });
            setTimeout(() => {
                toast.dismiss()
            }, 1500);
        }
    }

    return (
        <>
            <div className='main-form'>
                <form onSubmit={handleForm}>
                    <DefaultInput
                        type='text'
                        placeHolder='Digite aqui sua descrição'
                        value='description'
                        label='Descrição'
                        helperText='Ex: Compra de roupas'
                    />
                    <div className='footer-form'>
                        <DefaultInput
                            type='number'
                            placeHolder='Valor'
                            value='value'
                            label='Valor'
                            image='real'
                        />

                        <DefaultSelect mainValue='Tipo de valor' name='type'>
                            <option value="Entrada">Entrada</option>
                            <option value="Saída">Saída</option>
                        </DefaultSelect>
                    </div>

                    <DefaultButton
                        type='submit'
                        value='Inserir valor'
                    />
                </form>
            </div>
        </>
    );
}

export default Form;