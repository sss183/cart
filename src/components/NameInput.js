import {Component} from 'react';
class NameInput extends Component{
    constructor(props){
        super(props);
        this.nameChangeHandler=this.nameChangeHandler.bind(this)
    }
    nameChangeHandler(e){
        this.props.onNameChange(e.target.value)
    }
    render(){
        return (
            <div>
                <label htmlFor="nameInput">按姓名筛选：</label>
                <input type="text" id="nameInput" value={this.props.nameFilter} onChange={this.nameChangeHandler} />
            </div>
        );
    }
}
export default NameInput;