import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  // cuando queremos mantener el estado y añadir la información
  // (obetener un espacio en la memoria utilizar useState(snipet)).
  const [categories, setCategories] = useState(['Valorant'])

  //Tarea agregar una nueva categoria utilizando la siguiente función:
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //Evitar utilizar el push ya que se utiliza para mutar un estado del objeto y react no utiliza mutaciones.
    //En este caso es mejor crear un nuevo array.
    //categories.push('Valorant');
    setCategories([newCategory, ...categories]);
    //setCategories(cat => [...cat, 'Valorant'])
  }

  return (
    <>
      {/*---------------------- Estructura de la aplicación ---------------------- */}
      {/************************Título de la app {/*************************/}
      {/* <h1>GifExpertApp</h1> */}

      {/*{/************************Input{/*************************/}
      {/* Añadimos nuevo componente en éste caso el buscador de gifs */}
      <AddCategory
        //setCategories= {setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />


      {/*{/************************Listado de gif*{/************************/}
      {/*Utilizar una key*/}
      {/*renderizar un listado basado en las categorias */}

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
