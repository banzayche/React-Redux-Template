import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/booklist'
class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {book: ""};
  }
  render() {
    const {state: {book}, props: {books}} = this;

    const  onAddBook = (e) =>  {
      e.preventDefault()
      if (!book.trim()) {
        return
      }
      // Here is we call dispatch actions method
      this.props.addBook(book);
      this.setState({book: ''})
    }
    return (
      <div>
        <form onSubmit= { onAddBook }>
          <input value={book}
              onChange={(e)=>this.setState({book: e.target.value})}/>
          <button type="submit">
              Add book
          </button>
        </form>
        <BooksForEach books={books} />
      </div>
    )
  }
}
function BooksForEach(props) {
    console.log(props.books)
    return (
      <ul>
        {props.books.map(function(it){
          return <li key={it.id}>{it.name}</li>;
        })}
      </ul>
    )
}

export default connect((state, ownProps) => ({
  books: state.booklist.books
}),
{
  addBook
})(BookList)
