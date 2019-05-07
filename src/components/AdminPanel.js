import React from 'react';

class AdminPanel extends React.Component {
    
    constructor() {
        super();
        this.state = {
            book : {
                name : "",
                author: "",
                description: "",
                onStock: false,
                image: ""
            }
        };
    };

    handleChange = (event) => {

        let newBook;

        if(event.target.name==="onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }
        
        
        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {

        event.preventDefault(); //do not reload 

        let newBook = {...this.state.book}; //split book into propertys copy of all propertys

        this.props.addBook(newBook);

        this.setState({
            book : {
                name : "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            }
        });

    }

    render() {
        return (
            <div className="adminPanel col-4 col-xs-12">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <input type="text" placeholder="Book name" id="name" name="name" className="form-control" 
                        onChange={this.handleChange} value={this.state.book.name}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                        onChange={this.handleChange} value={this.state.book.author}></input>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" id="description" name="description" className="form-control"
                        onChange={this.handleChange} value={this.state.book.description}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="onStock" name="onStock" 
                        onChange={this.handleChange} value={this.state.book.onStock}></input>
                        <label htmlFor="onStock" className="form-chech-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                        onChange={this.handleChange} value={this.state.book.image}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;