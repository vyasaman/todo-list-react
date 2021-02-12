import React, { useState } from 'react';
import Done from '@material-ui/icons/Done'
import { Button } from '@material-ui/core';

const ListCom = (props) => {
    const [line, newLine] = useState(false);

    const done = () => {
        newLine(true)
    };



    return (
        <div className="todo_style">
            <li style={{ textDecoration: line ? "line-through" : "none", color: line ? 'green' : 'red' }} className='list'>
                {props.text}
            </li>
            <Button onClick={done} className='done'>
                <Done />
            </Button>
        </div>
    );
};

export default ListCom;