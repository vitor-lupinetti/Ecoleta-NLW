import React from 'react';

//interface que molda qual parametro sera recebido.
interface HeaderProps{
    title: string
} 

//React.Fc para poder receber o parametro. 
//props -> todos os parametros que sao recebidos
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header> 
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;