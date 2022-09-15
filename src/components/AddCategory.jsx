//shortcut rafc
//Nuevo componente para manejar el imput
import React, { useState } from 'react';

//Desestructuramos onNewCategory para poder llamar aqui las categorias anteriores.
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //se utiliza preventDefault para evitar que recargue el navegador
        event.preventDefault();

        //Para no añadir espacios en blanco.
        if (inputValue.trim().length <= 1) return;

        //se velve a llamar a las categorias para que éstas persistan y no se reescriban con el nuevo arreglo.
        //setCategories(categories =>[inputValue, ...categories]);
        onNewCategory(inputValue.trim());

        //Al buscar un gif la caja de texto se borra
        setInputValue("");
    }

    return (
        <form className='search' onSubmit={onSubmit}>
            <div className='search_wrapper'>
                <input
                    className='search__field'
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button type="submit" class="fa fa-search search__icon"></button>
            </div>
        </form>
    )
}
