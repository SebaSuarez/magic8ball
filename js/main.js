window.onload = function() {

    const title = document.querySelector('h1');

    title.innerText = 'Magic 8-Ball';

    const button = document.querySelector('button');

    button.addEventListener('click', onButtonClick)

    function onButtonClick() {
        
        button.addEventListener('click', function() {
            if (question.value.length < 1) {
                alert('Enter a question')
            } else {
                ball.innerText = "";
                let num = Math.floor(Math.random() * Math.floor(answers.length));
                answer.innerText = answer[num];
            }
        });
    }

    let answer = [
      "Yes",
      "No",
      "Maybe",
      "In A Little"
    ]




}