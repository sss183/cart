import './App.css';
import React from 'react';
import ScoreTable from './components/ScoreTable';
import GenderInput from './components/GenderInput';
import NameInput from './components/NameInput';
class App extends React.Component {
  constructor(){
    super();
      this.state={
        list:[{name: '张三', gender: '男', chinese: 85, math: 98, id:0},
				      {name: '张田', gender: '女', chinese: 95, math: 90, id:1},
    			    {name: '李四', gender: '男', chinese: 65, math: 48, id:2},
   			      {name: '大妹', gender: '女', chinese: 95, math: 100,id:3},
    			    {name: '王五', gender: '男', chinese: 75, math: 88, id:4},
    			    {name: '赵钱', gender: '男', chinese: 75, math: 98, id:5},
    			    {name: '二妹', gender: '女', chinese: 90, math: 98, id:6}],
        genderFilter:0,
        nameFilter:""
      }
  }
  onGenderChange(gender){
    this.setState({genderFilter:gender})
  }
  onNameChange(nmae){
    this.setState({nameFilter:nmae})
  }

  render(){
    return (
      <div className="App">
        <GenderInput onGenderChange={this.onGenderChange.bind(this)}
                     genderFilter={this.state.genderFilter}/>
        <NameInput   onNameChange={this.onNameChange.bind(this)}
                     nameFilter={this.state.nameFilter}/>
        <ScoreTable
                   list={this.state.list}
                   genderFilter={this.state.genderFilter}
                   nameFilter={this.state.nameFilter}
                   >

        </ScoreTable>
      </div>
    );
  }
}
export default App;
