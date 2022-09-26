let div1 = document.querySelector('.div1')
div1.classList.remove('animate-sidebar')
let ul = document.querySelector(".ddd")
const handleColor = () =>{
    let nav = document.querySelector("#nav")
    let val = window.pageYOffset;
    if(val < 10){
        nav.style.boxShadow = "none"
    }
    if(val > 20){
        nav.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)"
    }
}
const handleScroll = ()=>{
    handleColor()
}
window.addEventListener("scroll",handleScroll)
let handleShow = () =>{
    div1.style.display = "flex"
    div1.classList.add('animate-sidebar')
}
let handleClear =() =>{
    div1.style.display = "none"
    ul.children[0].children[1].style.display = 'none'
    ul.children[1].children[1].style.display = 'none'
    ul.children[2].children[1].style.display = 'none'
    ul.children[3].children[1].style.display = 'none'
    return;
}
let handleDropDown = (ind) =>{
    ul.children[0].children[1].style.display = 'none'
    ul.children[1].children[1].style.display = 'none'
    ul.children[2].children[1].style.display = 'none'
    ul.children[3].children[1].style.display = 'none'
    if(ind == 1){
        ul.children[0].children[1].style.display = 'flex'
        return;
    }
    if(ind == 2){
        ul.children[1].children[1].style.display = 'flex'
        return;
    }
    if(ind == 3){
        ul.children[2].children[1].style.display = 'flex'
        return;
    }
    if(ind == 4){
        ul.children[3].children[1].style.display = 'flex'
        return;
    }
    else{
        ul.children[0].children[1].style.display = 'none'
        ul.children[1].children[1].style.display = 'none'
        ul.children[2].children[1].style.display = 'none'
        ul.children[3].children[1].style.display = 'none'
    }
}