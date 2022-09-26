let left = 0;
let direction = 0 
let direction1 = 0 
let right = 0
let bottom = 0
let top1 = 0;
let div3 = document.querySelector(".div3")
let banner = document.querySelector('.banner')
let div41 = document.querySelector('.div41')
let div51 = document.querySelector('.div51')
let l = -30
let d = 0
setInterval(() =>{
    if(direction1== 0){
        left+=0.125
        if(left == 100){
            direction1 = 1
        }
    }
    else{
        left-=0.125
        if (left == 0){
            direction1 = 0
        }
        
    }
    document.querySelector(".first1").style.left = `${left}%`
    document.querySelector(".second1").style.left = `${left}%`
    console.log(left)
},100)
setInterval(() =>{
    if(direction1== 0){
        right+= 0.125
        if(right == 100){
            direction1 = 2
        }
    }
    else{
        right-= 0.125
        if (right == 0){
            direction1 = 0
        }
        
    }
    document.querySelector(".third1").style.right = `${right}%`
    document.querySelector(".seventh1").style.right = `${right}%`
    console.log(right)
},100)
setInterval(() =>{
    if(direction== 0){
        bottom+= 0.25
        if(bottom == 90){
            direction = 1
        }
    }
    else{
        bottom-= 0.25
        if (bottom == 0){
            direction = 0
        }
        
    }
    document.querySelector(".fourth1").style.bottom = `${bottom}%`
    // console.log(bottom)
},100)
setInterval(() =>{
    if(direction== 0){
        top1+= 0.25
        if(top1 == 95){
            direction = 1
        }
    }
    else{
        top1-= 0.25
        if (top1 == 0){
            direction = 0
        }
        
    }
    document.querySelector(".fifth1").style.top = `${top1}%`
    document.querySelector(".sixth1").style.top = `${top1}%`
    // console.log(bottom1)
},100)
window.addEventListener("load",()=>{
    div3.classList.add('animate-text')
    banner.classList.add('animate-image')
    
})
setInterval(()=>{
    if (d == 0){
        l++
        if(l== 0){
            div41.classList.remove("animate-div")
            div41.classList.add("animate-div2")
            div51.classList.remove("animate-div3")
            div51.classList.add("animate-div4")
            d = 1
        }
    }
    else{
        l--
        if(l == -30){
            div41.classList.remove("animate-div2")
            div41.classList.add("animate-div")
            div51.classList.remove("animate-div4")
            div51.classList.add("animate-div3")
            d = 0
        }
    }
},50)