import './App.css';
import React from 'react';
import MyTable from './components/MyTable';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        list:[{
          id:1,
          title:"小红书",
          price:200,
          num:1,
          checked:true
      },{
          id:2,
          title:"小蓝书",
          price:200,
          num:1,
          checked:false
      }],
      allchecked:false,
      val:"",
      }
  }
  addFn=()=>{
    this.state.list.push({
        id:this.state.list.length+1,
        title:this.state.val,
        price:200,
        num:1,
        checked:false
    })
     this.setState({
      list:this.state.list
     })
  }
  delFn=(i)=>{
    this.state.list.splice(i,1);
    this.setState({
        list:this.state.list
    })
  }
  checkedFn(i,newChecked){
    // console.log(newChecked);
    let newlist = [...this.state.list]
    newlist[i].checked =   newChecked
    let flag = newlist.every(item=>item.checked);
    this.setState({
      checked:newChecked,
      allchecked:flag,
      list:newlist
    })
  }
  allcheckedFn=(newChecked)=>{
    this.state.list.map(item=>item.checked =newChecked);
    this.setState({
      allchecked:newChecked
     })
  }
  changeValFn=(newVal)=>{
     this.setState({
       val:newVal
     })
  }
  add2Fn=(i)=>{
    let newlist = [...this.state.list]
    newlist[i].num++;
     this.setState({
       list:newlist
     })
  }
  mulFn=(i)=>{
    let newlist = [...this.state.list]
    newlist[i].num--;
     this.setState({
       list:newlist
     })
  }
  getTotalPrice=()=>{
  /*   let totalPrice = this.state.list.reduce((pre,item)=>{
        return item.price * item.num
    },0)
    return totalPrice */
    let totalPrice = 0
    this.state.list.forEach(item=>{
       if(item.checked){
        totalPrice+=item.num*item.price
       }
    })
    return totalPrice
  }
  getTotalNum=()=>{
    let totalNum = 0
    this.state.list.forEach(item=>{
       if(item.checked){
        totalNum+=item.num
       }
    })
    return totalNum
  }
  render(){
    return (
      <div className="App">
        <MyTable list={this.state.list}
                  count={this.state.count}
                  addFn={this.addFn}
                  delFn={this.delFn}
                  checkedFn={this.checkedFn.bind(this)}
                  val={this.state.val}
                  changeValFn={this.changeValFn}
                  allchecked={this.state.allchecked}
                  allcheckedFn={this.allcheckedFn}
                  add2Fn={this.add2Fn}
                  mulFn={this.mulFn}
                  getTotalNum={this.getTotalNum}
                  getTotalPrice={this.getTotalPrice}
          ></MyTable>
      </div>
    );
  }
}
export default App;
