// components/CustomButton.js

import React from 'react';

/**
 * Botón personalizado con color dinámico y estilos outline/solid.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.text - El texto que se mostrará dentro del botón.
 * @param {string} [props.color='black'] - El color base (ej: '#FF5733', 'purple').
 * @param {boolean} [props.outline=false] - Si el botón debe ser un contorno (outline) o relleno.
 * @param {boolean} [props.rounded=false] - Si el botón debe ser completamente redondeado (píldora).
 * @param {React.ReactNode} [props.icon] - Componente SVG o Icono a la derecha del texto.
 * @param {object} [props.props] - Otras props nativas de un botón (ej: onClick).
 * @returns {JSX.Element} El componente botón.
 */
const CustomButton = ({ text, color = 'black', outline = false, rounded = false, icon, ...props }) => {

  const dynamicStyle = outline 
    ? { color: color, borderColor: color, borderWidth: '2px', backgroundColor: 'transparent' } 
    : { backgroundColor: color, borderColor: color, borderWidth: '2px', color: 'white' };

 const baseClasses = `
    font-semibold py-2 px-4 transition duration-300 ease-in-out border-2 disabled:opacity-50
    flex items-center justify-center ${icon ? 'space-x-2' : ''}
  `;
  
  const shapeClasses = rounded ? `rounded-full` : `rounded-lg`;

  const hoverClasses = outline
    ? `hover:bg-white/50` 
    : `hover:brightness-90`; 

  const finalClasses = `${baseClasses} ${shapeClasses} ${hoverClasses}`;
  

  return (
    <button
      className={finalClasses}
      style={dynamicStyle}
      {...props}
    >
      {text}
      {icon && <div className="flex items-center">{icon}</div>}
    </button>
  );
 }
export default CustomButton;



{/* <CustomButton text="Fondo Verde Oscuro" color="darkgreen" rounded={true} /> */}