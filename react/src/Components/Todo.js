import React from 'react';

export default class Todo extends React.PureComponent {
    render() {
        return (
            <div onClick={() => this.props.click(this.props.id)} className={ 'todo ' + (this.props.active ? 'active' : 'completed')}>
                { this.props.text }
            </div>
        );
    }
}
