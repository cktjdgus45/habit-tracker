import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ]
    }
    handleIncreament = (habit) => {
        console.log(`handle Increament ${habit}`);
    };
    handleDecreament = (habit) => {
        console.log(`handle Decreament ${habit}`);
    };
    handleDelete = (habit) => {
        console.log(`handle delete ${habit}`);
    };
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncreament={this.handleIncreament}
                        onDecreament={this.handleDecreament}
                        onDelete={this.handleDelete} />
                )
                )}
            </ul>
        )
    }
}

export default Habits;