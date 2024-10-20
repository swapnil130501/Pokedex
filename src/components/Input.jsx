import React from 'react'

function Input({type, placeholder, className, value, onChange}) {
    
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange} 
        >
        </input>
    )
}

export default Input