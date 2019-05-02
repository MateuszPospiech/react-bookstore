import React from 'react';

class AdminPanel extends React.Component {
    
    render() {
        return (
            <div className="adminPanel col-4 col-xs-12">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Book name" id="bookName" name="bookName" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="bookAuthor" name="bookAuthor" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" id="bookDescription" name="bookDescription" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="bookOnStock" name="bookOnStock" className=""></input>
                        <label htmlFor="bookOnStock" className="form-chech-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" id="bookImage" name="bookImage" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;