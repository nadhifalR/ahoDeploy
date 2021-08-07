let btnF = document.getElementById('nextQF');

btnF.addEventListener('click', function(){
    qCount++;

    output.innerHTML = fun[ranNums.next().value];
    btnF.innerHTML = "Next Question"
    qCountOutput.innerHTML = "Question Number " + qCount;
})