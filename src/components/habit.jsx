import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    }
    handleIncreament = () => {
        //state 오브젝트 안의 count 변경 후 state를 업데이트.
        this.setState({ count: this.state.count + 1 });
    }
    handledecreament = () => {
        //state 오브젝트 안의 count 변경 후 state를 업데이트.
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count });
    }
    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button onClick={this.handleIncreament} className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button onClick={this.handledecreament} className="habit-button habit-decrease">
                    <i className="fas fa-minus-square "></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;