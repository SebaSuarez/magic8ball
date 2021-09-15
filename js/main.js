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
                answer.innerText = "";
                let num = Math.floor(Math.random() * Math.floor(answer.length));
                answer.innerText = answer[num];
                console.log(answer, num)
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