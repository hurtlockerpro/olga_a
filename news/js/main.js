
// selector
// querySelector('.class, #id, input[type=name]')
$('#test').text('Hello jQuery')

$(document).ready(function(){
    
    let txt = $('#test')
    txt.html('<b>Hello New Text</b>')

    $('#test')
        .html('<b>Hello New Text 2</b>')
        //.addClass('red')
        .css('color', 'green')

    // addEventListener('click', function(){ //... })
    let colors = ['red', 'green', 'blue']
    let currentIndex = 0;
    let previousIndex = -1;
    $('button[type="button"]').on('click', function(event){
        //event.preventDefault()
        //console.log('click')
        let div = $('#test')
        /*if (div.hasClass(colors[previousIndex--]))
        {
            div.removeClass(colors[previousIndex]);
        }*/
        div.removeClass(colors[previousIndex++]);
        div.addClass(colors[currentIndex++])
        if (currentIndex >= 3) currentIndex = 0

        if (previousIndex >= 3) {
            previousIndex = 0
            div.removeClass(colors[colors.length - 1]);
        }

    })
    $('button[type="button"]').on('dblclick', function(event){
        //event.preventDefault()
        console.log('dblclick')
    })





    $('#showEffect').on('click', function(event){
       // $('#test').hide()
       /*$('#test').fadeOut(3000, function(){
        alert('finished')
       }); */

       $( "#test" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
    })

    $('button[type="reset"]').on('click', function(event){
        // $('#test').show()
        $('#test').fadeIn(1000, function(){
            console.log('vualja, div is visible now !')
        });
    })





    $('#modal').on('click', function(event){
        $('#exampleModal').modal('show')
    })

    $('#exampleModal').on('show.bs.modal', function (event) {
        // do something...
        console.log(event)
        let title = event.currentTarget.querySelector('#exampleModalLabel')
        title.innerText = 'This is new title'

        // 
        $.ajax({
            url: "form.html",
            //method:'POST',
            data:{
                a:1
            },
            contentType: 'json',
            success: function( result ) {
                let body = event.currentTarget.querySelector('div[class="modal-body"]')
                body.innerHTML = result
            },
            error:function(errObj, errStatus, errMessage){
                console.log('errObj: ', errObj, ', errStatus: ', errStatus, 'errMessage: ', errMessage)
            },
            complete:function(jqXHR, textStatus){
                console.log('complete')
            }
        });

        
        

    })

    

})