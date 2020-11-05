import React from 'react'
class ScoreItem extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let score=this.props.score;
        return (
            <tr>
                <td>{score.name}</td>
                <td>{score.gender}</td>
                <td>{score.chinese}</td>
                <td>{score.math}</td>
            </tr>
        );
    }
}
export default ScoreItem;

// {this.props.list.map((item,index)=>(<tr key={item.id}>
//     <td>{item.name}</td>
//     <td>{item.gender}</td>
//     <td>{item.chinese}</td>
//     <td>{item.math}</td>
// </tr>)
// )}