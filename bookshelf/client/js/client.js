let url = 'http://localhost';
let port = 3000;

let getBooks = () => {
    $.ajax({
        url: url + ':' + port + '/books',
        success: function (result) {
            console.log(result);
            let td = ''
            let tr = ''
            result.forEach((book, index) => {
                td = generateCell(index + 1).outerHTML
                Object.entries(book).forEach(cell => {
                    td += generateCell(cell[1]).outerHTML
                })
                tr += generateRow(td).outerHTML
            });
            document.getElementById('bookRows').innerHTML = tr
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
    cell.innerText = data
    return cell
}



getBooks();
console.log('---');

