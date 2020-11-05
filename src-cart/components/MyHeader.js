import "./../assets/css/MyHeader.css"
let MyHeader = function(props){
     return (
        <ul>
              {props.list.map((item,index)=>(<li key={item.id}>
                        <span>{item.title}</span> 
                    </li>))}
        </ul> 
     )
}
export default MyHeader;