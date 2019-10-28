import React from 'react';

const  Filter = (props) => {
    const { date, icon, name, isDate,onDateChange } = props

    return (
        <fragment>
            { isDate ? 
                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <p className="control  has-icons-left">
                                <input className="input is-success" type="date" onChange={onDateChange} value={date} name={name}/>
                                <span className="icon is-small is-left">
                                    <i className={`fas fa-${icon}`}></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div> :
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>  }
        </fragment>
    )
    
}

export default Filter;