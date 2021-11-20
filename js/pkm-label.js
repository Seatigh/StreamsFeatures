let minStat = 20,
    maxStat = 40;

$(document).ready(function() {
    let statsArr = document.getElementsByClassName("stats");
    for(let i = 0; i < statsArr.length; i++) {
        let randStat = Math.round(Math.random()*(maxStat - minStat) + minStat);
        let randPlus = Math.round(Math.random()*(3 - 1) + 1);
        $(statsArr[i]).find('.pad-r-8').text(randStat);
        $(statsArr[i]).find('.stat-plus').text('+' + randPlus);
    }
    setTimeout(function() {
        updateStats();
        setTimeout(function() {
            $('.label-cont').animate({
                top: '132px'
            }, 500);
        }, 1500);
    }, 2000);
    $('.label-cont').animate({
        top: '0px'
    }, 500);
});

function updateStats(){
    let statsArr = document.getElementsByClassName("stats");
    for(let i = 0; i < statsArr.length; i++) {
        let statBefore = $(statsArr[i]).find('.pad-r-8').text();
        let statPlus = $(statsArr[i]).find('.stat-plus').text();
        let statAfter = parseInt(statBefore, 10) + parseInt(statPlus, 10);
        $(statsArr[i]).find('.pad-r-8').text(statAfter);
        $(statsArr[i]).find('.stat-plus').hide();
    }
}