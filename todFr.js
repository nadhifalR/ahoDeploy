let btnFr = document.getElementById('nextQFr');

btnFr.addEventListener('click', function(){
    qCount++;

    output.innerHTML = friend[ranNums.next().value];
    btnFr.innerHTML = "Next Question"
    qCountOutput.innerHTML = "Question Number " + qCount;
})