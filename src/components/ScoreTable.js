import "./../assets/css/MyTable.css"
import { Component } from 'react';
import ScoreItem from './ScoreItem.js';
class ScoreTable extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let rows = []
        let genderFilter = this.props.genderFilter;
        let nameFilter = this.props.nameFilter;
        const GENDER = ['', '男', '女']
        this.props.list.forEach((scoreItem) =>{
            if (genderFilter !== 0 && nameFilter === '') {
                if (scoreItem.gender === GENDER[genderFilter]) {
                    rows.push(<ScoreItem score={scoreItem} key={scoreItem.id} />)
                }
                return;
            }
            if (genderFilter === 0 && nameFilter !== '') {
                if (scoreItem.name === nameFilter) {
                    rows.push(<ScoreItem score={scoreItem} key={scoreItem.id} />)
                }
                return;
            }
            if (genderFilter !== 0 && nameFilter !== '') {
                if (scoreItem.gender === GENDER[genderFilter] && scoreItem.name === nameFilter) {
                    rows.push(<ScoreItem score={scoreItem} key={scoreItem.id} />)
                }
                return;
            }
            rows.push(<ScoreItem score={scoreItem} key={scoreItem.id} />)

        })
        return (
            <table className="gridtable">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>语文</th>
                        <th>数学</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
export default ScoreTable;