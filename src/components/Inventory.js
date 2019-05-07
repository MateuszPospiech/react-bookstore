import React from 'react';
import BookView from './BookVwiew';

class Inventory extends React.Component {

    render() {

        const bookListing = this.props.books.map ( book => {
            return <BookView book={book}/>
        })

        return (
            <div className="inventory col-4">
                {bookListing}
            </div>
        )
    }
}

export default Inventory;