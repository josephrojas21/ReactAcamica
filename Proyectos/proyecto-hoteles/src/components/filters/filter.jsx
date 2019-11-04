import React, {Fragment} from 'react';

const  Filter = (props) => {
    const { date, icon, name, isDate,onDateChange,options,selected,onOptionChange } = props
    //console.log(options);
    
    return (
        <Fragment>
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
                <div className="control">
                    <div className="select">
                        <select name={name} onChange={onOptionChange} selected={selected}>
                            {
                                options.map(option=>{
                                return <option key={option.value} value={option.value}>{option.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>  }
        </Fragment>
    )
    
}

export default Filter;