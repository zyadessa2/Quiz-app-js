let questions = [
    {question: "how are you?" , a:"good" , b:"wonderfull" , c:"very good", d:"bad", ans:"d"},
    {question: "how are your father?" , a:"good" , b:"wonderfull" , c:"very good", d:"bad", ans:"c"},
    {question: "how are your mother?" , a:"good" , b:"wonderfull" , c:"very good", d:"bad", ans:"a"},
    {question: "how are your family?" , a:"good" , b:"wonderfull" , c:"very good", d:"bad", ans:"c"},
    {question: "how are your sister?" , a:"good" , b:"wonderfull" , c:"very good", d:"bad", ans:"b"},
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerels = document.querySelectorAll(".answer");
const box = document.getElementById('box')


let next = 0
let nextQues = questions[next]
let score = 0

function submit(){
    const answer = getSelected()

    console.log(answer);

    if(answer == "a" || answer == "b" ||answer == "c"||answer == "d"){
        if(answer === nextQues.ans){
            score++;
        }
        next +=1
        if(next <= 4){
            nextQues = questions[next]
            getquestions(nextQues)
            }else{
            box.innerHTML = `<h2>you answered currectly at ${score} / ${questions.length} questions</h2>`
            setTimeout(reloud , 5000)
            }
    }
}
function reloud(){
    location.reload()
}
getquestions()
function getquestions(){
    deselect()
    questionEl.innerText = nextQues.question;
    a_text.innerText = nextQues.a;
    b_text.innerText = nextQues.b;
    c_text.innerText = nextQues.c;
    d_text.innerText = nextQues.d;
}

function getSelected(){
    let answer = undefined
    answerels.forEach( answerel => {
        if(answerel.checked){
            answer = answerel.id
        }
    })
    return answer
}

function deselect(){
    answerels.forEach( answerel => {
        answerel.checked = false
    })
}

