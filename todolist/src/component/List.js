import React from "react";

function List(props) {
    return (
        <li className="todo stack-small">
            <div className="check" >
                <input id={props.id} type="checkbox" className="input-checkbox" defaultChecked={props.completed} />
                <label className="todo-label"  htmlFor={props.id}>
                {props.name}
                </label>
            </div>
            <div className="d-flex mt-3 mb-3">
                <button type="button" className="btn">
                    Edit
                </button>
                <button type="button" className="btn btn-danger" onClick={() => props.deleteTask(props.id)} >
                    Delete 
                </button>
            </div>
        </li>
    )
}

export default List;