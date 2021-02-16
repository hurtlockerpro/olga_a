import { IBook } from './IBook'

const express = require('express')
const app = express()

let books:IBook[] = [
    {
        isbn: '1-123456789',
        title: 'Book 1',
        author: 'Author 1',
        description: 'description 1',
        pages: 150,
        published_date: '01.01.2021'
    },
    {
        isbn: '2-123456789',
        title: 'Book 2',
        author: 'Author 2',
        description: 'description 2',
        pages: 150,
        published_date: '01.02.2021'
    },
    {
        isbn: '3-123456789',
        title: 'Book 3',
        author: 'Author 3',
        description: 'description 3',
        pages: 150,
        published_date: '01.03.2021'
    }]
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/books', function (req, res) {
    res.send(books)
})

app.delete('/books/:isbn', function (req, res) {
    
    console.log(req.params.isbn)
    let status = 404
    let resMessage = 'No book found to delete'

    books.forEach((book, index) => {
        if (book.isbn == req.params.isbn)
        {
            books.splice(index, 1)
            status = 200
            resMessage = 'Book successfully deleted'
        }
    })
    
    res.status(status).send(resMessage + ': ' + req.params.isbn)
})


app.get('/book/:isbn', function (req, res) {
    
    console.log(req.params.isbn)
    let status = 404
    let resMessage = 'No book found'
    let bookItem = null

    books.forEach((book, index) => {
        if (book.isbn == req.params.isbn)
        {
            bookItem = book
            status = 200
            resMessage = 'Book successfully found'
            //break;
        }
    })
    res.status(status).send(bookItem)
})
 
app.listen(3000, () => console.log('server is working'))