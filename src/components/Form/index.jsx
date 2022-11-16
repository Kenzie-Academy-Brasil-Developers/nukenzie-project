import React from 'react';
import DefaultInput from '../DefaultInput';

const Form = () => {
    return (
        <>
            <div className="main-form">
                <DefaultInput
                    type='text'
                    placeHolder='Digite aqui sua descrição'
                    value='description'
                    label='Descrição'
                    helperText='Ex: Compra de roupas'
                />
            </div>
        </>
    );
}

export default Form;