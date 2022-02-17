window.onload = function () {
    if (document.readyState === 'complete') {
        $(".over-lay").remove();
    }
}
$(".video div").on('click',function () {
    this.remove()
    $("video").trigger('play');
})
function addCart() {
    let thebutton = $(".product button");
    for (let i = 0; i < thebutton.length; i++) {
       
$(thebutton).eq(i).on("click",function () {
    $(thebutton).eq(i).text('Adding...')
})

        
    }
}
addCart()