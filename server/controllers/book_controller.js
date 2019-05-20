let books = []
let id = 0

const read = (req, res) =>{
    res.json(books);
}

const create = (req, res) =>{
    let newBook = {
        "title": req.body.title,
        "author": req.body.author,
        "id": id
    }

    books.push(newBook)
    id++

    res.json(books)
}

const update = (req, res) =>{

    books.forEach((book)=>{
        if(req.params.id === +book["id"]){
            book["title"] = req.body.title
            book["author"] = req.body.author
        }
    })
    res.json(books)
}

const deleteBook = (req, res) =>{

    let filteredBooks = books.filter((book)=> book["id"] !== +req.params.id)

    books = filteredBooks
    res.json(books)
}

module.exports = {
    read,
    create,
    update,
    deleteBook
} 