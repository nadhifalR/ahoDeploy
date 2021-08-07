let btnA = document.getElementById('nextQA');

btnA.addEventListener('click', function(){
    qCount++;

    output.innerHTML = adult[ranNums.next().value];
    btnA.innerHTML = "Next Question"
    qCountOutput.innerHTML = "Question Number " + qCount;
})