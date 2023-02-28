import React from 'react';

const FormInput = () => {
    return (
        <form onSubmit={(e)=>{e.preventDefault();}}>
            <input type="text"/>
            <input type="submit"/>
        </form>
    )
}

export default FormInput;
