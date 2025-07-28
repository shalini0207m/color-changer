const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box) {   //forEach ek callback function leta hai iss function k andar ek parameter dia h box naam se forEach function one by one iterate krna aur uspe operation perform krna
    box.addEventListener("click",function(color){
      if(color.target.id === 'box1'){
             body.style.backgroundColor = " #f3855f" //qki hme body ka color change krna hai isliye body me style dot property set kr denge jo v desired color dena chahein
             

      }
      if(color.target.id === 'box2'){
             body.style.backgroundColor = "#0f631b" //qki hme body ka color change krna hai isliye body me style dot property set kr denge jo v desired color dena chahein
             

      }
      if(color.target.id === 'box3'){
             body.style.backgroundColor = "aqua" //qki hme body ka color change krna hai isliye body me style dot property set kr denge jo v desired color dena chahein
             

      }
      if(color.target.id === 'box4'){
             body.style.backgroundColor = "rgb(148, 40, 180)" //qki hme body ka color change krna hai isliye body me style dot property set kr denge jo v desired color dena chahein
             

      }
      if(color.target.id === 'box5'){
             body.style.backgroundColor = "yellowgreen" //qki hme body ka color change krna hai isliye body me style dot property set kr denge jo v desired color dena chahein
             

      }
    })
    
});