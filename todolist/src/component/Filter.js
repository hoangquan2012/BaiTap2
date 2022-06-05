import React, { useState } from 'react';

function Filter(props) {


    return (
        <div className="group-btn mb-5">
        <button type="button" className="btn toggle-btn">
          <span>all</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span>Active</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span>Completed</span>
        </button>
      </div>
    )
}

export default Filter;