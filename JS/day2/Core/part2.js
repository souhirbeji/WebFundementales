var count1 = 9;
var count2 = 12;
var count3 = 9;
var counter1 = document.querySelector("#likeCount1");
var counter2 = document.querySelector("#likeCount2");
var counter3 = document.querySelector("#likeCount3");

function like1() {
    count1++;
    counter1.innerHTML = count1 + " like(s)";
}

function like2() {
    count2++;
    counter2.innerHTML = count2 + " like(s)";
}

function like3() {
    count3++;
    counter3.innerHTML = count3 + " like(s)";
}
