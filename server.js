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
    bookId = parseInt(req.params.id); 
    const book = books.find((b) => b.id === bookId);
    if (!book) { return res.status(404).send("Book not found"); } 
res.send(`Book Title: ${book.title}`); });

app.listen(PORT, () => {
    res.send(console.log(`Listening on port ${PORT}`))
})