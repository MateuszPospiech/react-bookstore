import React from 'react';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            bookstoreName : "My Books",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"
        }
    }

    handleClick = () => {

        if(this.state.clicked) {
            this.setState({
                bookstoreName : "Your Books",
                textColor : "black",
                backgroundColor : "white"
            })
        } else {
            this.setState({
                bookstoreName : "My Books",
                textColor : "white",
                backgroundColor : "black"
            })
        }

        this.setState({
            clicked : !this.state.clicked
        })
    }

    render() {

        let headerCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }

        return (
            <div className="row header" style={headerCss} onClick={this.handleClick}>
                <h1>{this.state.bookstoreName}</h1>
            </div>
        )
    }
}
 export default Header