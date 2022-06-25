let rating1 = document.getElementById('rating1') 
let rating2 = document.getElementById('rating2') 
let rating3 = document.getElementById('rating3') 
let rating4 = document.getElementById('rating4') 
let rating5 = document.getElementById('rating5') 
let submit = document.getElementById('submit')
let thankyou = document.getElementById('thanks')
let home = document.getElementById('home')
let note;
let txtrating = document.getElementById('textrating')



rating1.addEventListener('click', selectOne)
rating2.addEventListener('click', selectTwo)
rating3.addEventListener('click', selectThree)
rating4.addEventListener('click', selectFour)
rating5.addEventListener('click', selectFive)
submit.addEventListener('click', send)

function selectOne(){
    rating1.style.backgroundColor = 'hsl(25, 97%, 53%)'
    rating2.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating3.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating4.style.backgroundColor = 'hsl(219, 20%, 17%)' 
    rating5.style.backgroundColor = 'hsl(219, 20%, 17%)'
    note = 1
}
function selectTwo(){
    rating2.style.backgroundColor = 'hsl(25, 97%, 53%)'
    rating1.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating3.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating4.style.backgroundColor = 'hsl(219, 20%, 17%)' 
    rating5.style.backgroundColor = 'hsl(219, 20%, 17%)'   
    note = 2
}
function selectThree(){
    rating3.style.backgroundColor = 'hsl(25, 97%, 53%)'
    rating1.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating2.style.backgroundColor = 'hsl(219, 20%, 17%)' 
    rating4.style.backgroundColor = 'hsl(219, 20%, 17%)'  
    rating5.style.backgroundColor = 'hsl(219, 20%, 17%)'  
    note = 3 
}
function selectFour(){
    rating4.style.backgroundColor = 'hsl(25, 97%, 53%)'
    rating1.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating2.style.backgroundColor = 'hsl(219, 20%, 17%)'  
    rating3.style.backgroundColor = 'hsl(219, 20%, 17%)' 
    rating5.style.backgroundColor = 'hsl(219, 20%, 17%)'   
    note = 4
}
function selectFive(){
    rating5.style.backgroundColor = 'hsl(25, 97%, 53%)'
    rating1.style.backgroundColor = 'hsl(219, 20%, 17%)'
    rating2.style.backgroundColor = 'hsl(219, 20%, 17%)'  
    rating3.style.backgroundColor = 'hsl(219, 20%, 17%)'  
    rating4.style.backgroundColor = 'hsl(219, 20%, 17%)'   
    note = 5
}

function send(){
    if(note == undefined){
        alert('Você precisa escolher uma nota')
    }else{
        home.style.display = 'none'
        thankyou.style.display = 'block'
        txtrating.innerHTML = `You selected ${note} of the 5`
    }


}
