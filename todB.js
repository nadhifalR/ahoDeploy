let btnB = document.getElementById('nextQB');

btnB.addEventListener('click', function(){
    qCount++;

    output.innerHTML = basic[ranNums.next().value];
    btnB.innerHTML = "Next Question"
    qCountOutput.innerHTML = "Question Number " + qCount;
})