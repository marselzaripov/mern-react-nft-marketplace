import React from 'react';
import './textareas.css'

const Textarea = (propsa) => {
    return (
        <Textarea onChange={(events)=> propsa.setValue(events.target.textvalue)}
               value={propsa.value}
               type={propsa.type}
               placeholder={propsa.placeholder}/>
    );
};

export default Textarea;
