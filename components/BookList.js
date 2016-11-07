import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/booklist'
class BookList extends Component {
  constructor(props) {
    super(props)
    // console.log('props',this.props.books);
    this.state = {book: ""};
  }
  render() {
    const {state: {book}} = this;
    const {state: {books}} = this;
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
        <ul>
          {this.props.books.map(function(it){
            return <li id={it.id}>{it.name}</li>;
          })}
        </ul>
      </div>
    )
  }
}

// function booksForEach(props) {
//     console.log(props.books)
//     return (
//       <ul>
//         {props.books.map(function(it){
//           return <li id={it.id}>{it.name}</li>;
//         })}
//       </ul>
//     )
// }

export default connect((state, ownProps) => ({
  books: state.booklist.books
}),
{
  addBook
})(BookList)
