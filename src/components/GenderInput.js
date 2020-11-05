import React from 'react';
class GenderInput extends React.Component{
    constructor(props){
        super(props);
        this.genderChangeHandler=this.genderChangeHandler.bind(this);
    }
    genderChangeHandler(e){
        this.props.onGenderChange(e.target.value);
    }
    render(){
        return (
            <div>
                    <label>按性别筛选：</label>
                    <select onChange={this.genderChangeHandler} >
                        <option value="0">All</option>
                        <option value="1">男</option>
                        <option value="2">女</option>
                    </select>
            </div>
        );
    }
}
export default GenderInput;