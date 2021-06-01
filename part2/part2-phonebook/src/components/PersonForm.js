import React from 'react'

const PersonForm = ({onSubmit, newName, handleNameChange, newPhone, handlePhoneChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                Name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                Phone: <input value={newPhone} onChange={handlePhoneChange}/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm;