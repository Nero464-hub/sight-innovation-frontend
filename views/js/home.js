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
let pos1 = 0
let pos2 = 0
let pos3 = 0
let first = () =>{
    let start1 = setInterval(() =>{
        pos1+=0.001
        // console.log(pos1)
        if(pos1 >= 1){
            clearInterval(start1)
            pos1 = 0
            setTimeout(first,30000)
            // console.log(pos1)
        }
        if(direction1== 0){
            left+=0.125
            if(left == 95){
                // clearInterval(start1)
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
        // console.log(left)
    },100)
}
let second = ()=>{
    let start2 = setInterval(() =>{
        pos2+=0.001
        // console.log(pos2)
        if(pos2 >= 1){
            clearInterval(start2)
            pos2 = 0
            setTimeout(second,30000)
            // console.log(pos2)
        }
        if(direction1== 0){
            right+= 0.125
            if(right == 95){
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
        // console.log(right)
    },100)
}
let third = ()=>{
    let start3 = setInterval(()=>{
        pos3+=0.001
        // console.log(pos3)
        if(pos3 >= 1){
            clearInterval(start3)
            pos3 = 0
            setTimeout(third,30000)
            // console.log(pos3)
        }
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
    },100)
}
window.addEventListener("load",()=>{
    div3.classList.add('animate-text')
    banner.classList.add('animate-image')
    first()
    second()
    third()
    
})
