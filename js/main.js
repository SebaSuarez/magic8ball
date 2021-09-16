window.onload = function() {

    const title = document.querySelector('h1');

    title.innerText = 'Magic 8-Ball';

    const button = document.querySelector('button');
    
    const input = document.querySelector('input');

    button.addEventListener('click', onButtonClick)

    function onButtonClick() {
        
        button.addEventListener('click', function() {
            if (question.value.length < 1) {
                alert('Enter a question')
            } else {
                answer.innerText = "";
                let num = Math.floor(Math.random() * Math.floor(answers.length));
                answer.innerText = answers[num];
                console.log(answer, num)
            }
        });
    }

    let answers = [
      "Yes",
      "No",
      "Maybe",
      "In A Little",
      "No NOOOOOB",
      "ERRO 404 NOT FOUND",
      "I am Cooler Than You",
    ]




}