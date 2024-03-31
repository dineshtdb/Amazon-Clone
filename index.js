const imgs=document.querySelectorAll('.header-slider ul img')

const pre_btn=document.querySelector('.control-prev')
const nxt_btn=document.querySelector('.control-next')

let n=0;
function changeSlide(){
    for (let index = 0; index < imgs.length; index++) {
         imgs[index].style.display='none';
        
    }
    imgs[n].style.display='block';
}
changeSlide();

pre_btn.addEventListener('click',(e)=>{
    if(n>0)n--;
    else n=imgs.length-1;
    changeSlide();
})
nxt_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1)n++;
    else n=0;
    changeSlide();
})

const scrollContainer =document.querySelectorAll('products');
for(const i of scrollContainer){
    i.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        i.scrollLeft+=evt.deltaY;
    })
}