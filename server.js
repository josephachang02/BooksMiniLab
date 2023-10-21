const express = require('express');
const PORT = 3000;

const app = express();

const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
];


// Define a route that accepts URL parameters 
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id); 
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        return res.status(404).send("Book not found"); 
    } else
res.send(`Book Title: ${book.title}`);
});

// Handling Errors
app.get('/fixed-example/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
  
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    } res.json({ bookTitle: book.title });
});

// Books/Long
app.get('/books/long', (req, res) => {
    res.send("List of long books");
  });

// Handling Multiple Parameters: 
app.get('greet/:firstname/:lastname', (req,res) => {
    res.send(`Greetings ${req.params.firstname} ${req.params.lastname}`)
})
app.listen(PORT, () => {
    res.send(console.log(`Listening on port ${PORT}`))
})