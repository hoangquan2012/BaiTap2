import React, { useState } from 'react';
import Form from './component/Form';
import Filter from './component/Filter';
import List from './component/List';
import { nanoid } from "nanoid";


const App = () => {

    const options = [
        { id: "id-1", name: "Ăn", completed: true },
        { id: "id-2", name: "Chơi", completed: false },
        { id: "id-3", name: "Ngủ", completed: false }
    ];
    const [optionss, setOptions] = useState(options);

    const taskList = optionss.map(option => (
        <List
            id={option.id}
            name={option.name}
            completed={option.completed}
            key={option.id}
            deleteTask={deleteTask}
        />
    ));

    function addTask(name) {
        const newOption = { id: "id-" + nanoid(), name: name, completed: false };
        setOptions([...options, newOption]);
    }
    function deleteTask(id) {
        const deleteTasks = optionss.filter(option => id !== option.id);
        setOptions(deleteTasks);
    }

    return (
        <div className="container">
            <div className='container-item'>
                <Form addTask={addTask} />
                <div>
                    <Filter />
                </div>
                <ul className='container-list'>
                {taskList}
            </ul>
            </div>
        </div>
    );
};

export default App;
