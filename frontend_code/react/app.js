let body = document.body;
let score;
let scoreData = 0;

let life;
let lifeData = 3;

life = document.createElement('div');
document.body.append(life);
life.textContent = 'Your life : ' + lifeData;

score = document.createElement('div');
score.textContent = 'Your score : 0';
document.body.append(score);

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
//input.setAttribute('onkeyup'.'enterKey();');

form.append(input);
input.placeholder = 'input your answer';

let button = document.createElement('button');
button.textContent = 'submit';
form.append(button);

let word = document.createElement('div');

word.textContent = '한글';
document.body.append(word);

let result = document.createElement('div');
document.body.append(result);

//정답을 확인하는 메소드
function checkAnswer(){
    if(word.textContent[word.textContent.length - 1] == input.value[0])
    {
        word.textContent = input.value;
        score.textContent = "Your score :" + ++scoreData;
        result.textContent = "correct";
    }
    else
    {
        --lifeData
        if(lifeData < 0)
        {
            alert("Out of life");
            window.location.reload();
            return ;
        }
        result.textContent = "wrong"
        score.textContent = "Your score :" + --scoreData;
        life.textContent = 'Yout life : ' + lifeData;
    }
    input.value = null;
}

//버튼 클릭시 발생하는 이벤트

form.addEventListener('submit', function callback(e){
    e.preventDefault();
    checkAnswer;
});

