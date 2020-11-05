import "./../assets/css/MyTable.css"
import {Component} from 'react';
class MyTable extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    // 设置默认props
    static defaultProps={
        defaultValue:""
    }
    add=()=>{
        this.props.addFn();
    }
    del=(index)=>{
        this.props.delFn(index);
    }
    checked(item,index,e){
        this.props.checkedFn(index,e.target.checked);
        item.checked = e.target.checked
    }
    allchecked=(e)=>{
        this.props.allcheckedFn(e.target.checked)
    }
    changeVal=(e)=>{
        this.props.changeValFn(e.target.value);
    }
    // 加数量
    add2=(index)=>{
        this.props.add2Fn(index);
    }
    // 减数量
    mul=(index)=>{
        this.props.mulFn(index);
    }
    render(){
        return (
        <ul className="tab">
            {/* <p>{this.props.val}</p> */}
             <input type="text" value={this.props.val} onChange={(e)=>{this.changeVal(e)}} placeholder="请输入书名"/>
             <input type="checkbox" checked={this.props.allchecked}  onChange={(e)=>{this.allchecked(e)}} />全选
             <button onClick={this.add}>增加</button>
            {this.props.list.map((item,index)=>(<li key={item.id}>
                      <input type="checkbox" checked={item.checked}  onChange={(e)=>{this.checked(item,index,e)}}/>
                      <span>{item.title}</span>
                      <span>{item.price}</span>
                      <button disabled={item.num===1} onClick={()=>this.mul(index)}>-</button>
                      <span>{item.num}</span>
                      <button  onClick={()=>this.add2(index)}>+</button>
                      <button  onClick={()=>this.del(index)}>删除</button>
                  </li>))}
            <p>总数量:<span>￥{this.props.getTotalNum()}</span>总价:<span>￥{this.props.getTotalPrice()}</span></p>
      </ul> )
    }
}
export default MyTable;