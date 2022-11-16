import React from 'react';
import DefaultButton from '../DefaultButton';
import DefaultInput from '../DefaultInput';
import DefaultSelect from '../DefaultSelect';
import './index.css'

const Form = () => {
    return (
        <>
            <div className='main-form'>
                <form>
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
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saída</option>
                        </DefaultSelect>
                    </div>
                    
                    <DefaultButton type='submit' value='Inserir valor'></DefaultButton>
                </form>
            </div>
        </>
    );
}

export default Form;