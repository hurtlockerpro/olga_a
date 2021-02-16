let url = 'http://localhost';
let port = 3000;
let isbnGlobal = ''

let getBooks = () => {
    $.ajax({
        url: url + ':' + port + '/books',
        success: function (result) {
            console.log(result);
            let td = ''
            let tr = ''
            let id = 0; // new 
            result.forEach((book, index) => {
                td = generateCell(index + 1).outerHTML
                Object.entries(book).forEach(cell => {
                    td += generateCell(cell[1]).outerHTML
                    if (cell[0] == 'isbn') id = cell[1] // new
                })
                let btnEdit = generateButton("Edit")
                btnEdit.classList.add('btn-primary')
                btnEdit.classList.add('edit')
                btnEdit.type = "button"
                btnEdit.setAttribute('data-id', id) // new
                
                
                let btnDelete = generateButton("Delete")
                btnDelete.classList.add('btn-danger')
                btnDelete.classList.add('delete')
                btnDelete.type = "button"
                btnDelete.setAttribute('data-id', id)
                

                td +=  generateCell(
                    btnEdit.outerHTML + ' ' + btnDelete.outerHTML
                ).outerHTML
                tr += generateRow(td).outerHTML
            });
            document.getElementById('bookRows').innerHTML = tr

            let btnEdits = document.getElementsByClassName('edit');
            Array.from(btnEdits).forEach(btn => {
                btn.addEventListener('click', (event) => {
                    console.log('edit btn clicked. id: ' + event.target.dataset.id)
                    isbnGlobal = event.target.dataset.id
                    $('#bookModal').modal('show')
                    
                    $('#bookModal').on('shown.bs.modal', function (event) {
                        $.ajax({
                            url: url + ':' + port + '/book/' + isbnGlobal,
                            type: 'GET',
                            async: false,
                            success: function (result) {
                                //data = result
                                document.getElementById('isbn').value = result.isbn
                                document.getElementById('title').value = result.title
                                document.getElementById('author').value = result.author
                                document.getElementById('description').value = result.description
                                document.getElementById('pages').value = result.pages
                                document.getElementById('published_date').value = result.published_date
                                
                            },
                            error: function (err, errStatus, errMessage) {
                                console.log('ERROR OCCURED on DELETE: ', errStatus, ' ', errMessage);
                            }
                        })
                        //modalBody.innerHTML = data
                        //modalTitle.innerText = 'Edit book' 
                    })
                })
            })

            let btnDeletes = document.getElementsByClassName('delete');
            Array.from(btnDeletes).forEach(btn => {
                btn.addEventListener('click', (event) => {
                    console.log('delete btn clicked. id: ' + event.target.dataset.id)
                    deleteAjax(event.target.dataset.id)
                })
            })

        },
        error: function (err, errStatus, errMessage) {
            console.log('ERROR OCCURED: ', errStatus, ' ', errMessage);
        }
    });
};


let generateRow = (data) => {
    let row = document.createElement('tr')
    row.innerHTML = data
    return row
}

let generateCell = (data) => {
    let cell = document.createElement('td')
    cell.innerHTML = data
    return cell
}

let generateButton = (title) => {
    let btn = document.createElement('button')
    btn.innerText = title
    btn.classList.add("btn")
    return btn
}

function deleteAjax(isbn){
    $.ajax({
        url: url + ':' + port + '/books/' + isbn,
        type: 'DELETE',
        success: function (result, msgStatus, xhrObject) {
            console.log(result + 'status: ' + xhrObject.status)
            if (xhrObject.status == 200){
                getBooks()
            }
        },
        error: function (err, errStatus, errMessage) {
            console.log('ERROR OCCURED on DELETE: ', errStatus, ' ', errMessage);
        }
    })
}

let modalBody = document.querySelector('#bookModal .modal-body')
let modalTitle = document.querySelector('#bookModal .modal-title')



$.ajax({
    url: "form.html",
    success:function(data) {
        modalBody.innerHTML = data
    }
});


getBooks();
console.log('---');

