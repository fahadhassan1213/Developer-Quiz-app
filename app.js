let answer = ['A','B','B','A']

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result')
console.log(result)
form.addEventListener('submit',e=>{
    e.preventDefault();

    const useranswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    let score = 0;
    useranswer.forEach( (items,index) =>{
       if(items === answer[index]){
           score += 25;
       }
    })
    result.classList.remove('d-none');
    //scroll to the top of the screen
    scrollTo(0,0)
//timer to change the span  text after every time interval
let output = 0;
let timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%` 
    if(output === score){
        clearInterval(timer);
    }
    else{
        output++;
    }
},20)
})


