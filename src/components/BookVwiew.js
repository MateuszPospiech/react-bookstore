import React from 'react';

export default class BookView extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <img src={this.props.book.image} width="100" height="150" alt={this.props.book.name}/><br/>
                <p>{this.props.book.description}</p><br/>
            </div>
        );
    }
}