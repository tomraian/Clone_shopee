
let click = () => {
    let btn = document.querySelector('.avatar');
    let show = document.querySelector('.option');
    btn.addEventListener('click',function(e) {
        e.stopPropagation();
        show.classList.toggle('show');
    })
    document.addEventListener('click', function(){
        show.classList.remove('show');
    })

}
click();