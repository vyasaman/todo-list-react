import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
import Clear from '@material-ui/icons/Clear'
import './index.css'

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfItem = () => {
        if (item == '') {
            console.log('ji')
        }
        else {
            setNewItem((inj) => {
                return [...inj, item];
            });

            setItem("");
        }
    }
    const clear = () => {
        setNewItem([]);
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>TO DO LIST</h1>
                    <br />
                    <input type="text" value={item} placeholder="ADD AN ITEM" onChange={itemEvent} />
                    <Button className="newBtn" onClick={listOfItem}><AddIcon /></Button><br />
                    <Button className='clearall' onClick={clear}>Clear All<Clear /></Button>
                    <br />
                    <ol>
                        {newitem.map((val, index) => {
                            return <ListCom key={index} text={val} />
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
};

export default ToDoList;