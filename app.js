var poc = document.getElementById("poc")
var mnl = document.getElementById("mnl")
var mlk  = document.getElementById("mlk")
var cvx  = document.getElementById("cvx")
var cvb  = document.getElementById("cvb")


mnl.addEventListener('mouseover',function(){
    poc.src =  mnl.src
})

mlk.addEventListener('mouseover',function(){
    poc.src =  mlk.src
})

cvx.addEventListener('mouseover',function(){
    poc.src =  cvx.src
})

cvb.addEventListener('mouseover',function(){
    poc.src =  cvb.src
})








cvb.addEventListener('mouseout',function(){
     poc.src  = "https://i.gifer.com/NPV4.gif"  
})

cvx.addEventListener('mouseout',function(){
    poc.src  = "https://i.gifer.com/NPV4.gif"  
})


mnl.addEventListener('mouseout',function(){
    poc.src  = "https://i.gifer.com/NPV4.gif"  
})


mlk.addEventListener('mouseout',function(){
    poc.src  ="https://i.gifer.com/NPV4.gif"  
})





