// 콜백 : 원하는 시점에 함수를 통째로 넘기는 방식 
// 나머지는 다 써놨으니까 너가 추가하고 싶은 부분만 콜백으로 써서 보내~!
// 함수가 매개변수로 들어감

// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수 
function showEvenNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
// showEvenNumber(10);

function showOddNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) console.log(i);
    }
}
// showEvenNumber(10);

function showOddOrEvenNumber(n, delim) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === delim) console.log(i);
    }
}
showOddOrEvenNumber(10, 0); // 값을 부를때만 끝에 ; 세미콜론이 들어간다. 

//=========바꾸기 귀찮아서 아예 바뀌는 부분에 function 함수 넣어버림 =======
// 여기 이해하는게 관건이다... ! 졸 어려움 ㅋㅋㅋㅋ 

function showNumber(n, code) { // js는 함수를 매개변수에 넣을 수 있다. 
// 값과 함수가 매개변수로 들어가 있음 
    for (let i = 1; i <= n; i++) {
        if (code(i)) { // 함수 호출문 사용 
            console.log(i);
        }
    }
}

// 첫번째 방법 
showNumber(20, function(n) { return n % 3 === 0; });
showNumber(20, n => n % 3 === 0); // function(n){ return n % 3 === 0;}을 간소화
// 이외의 3의 배수이면서 6의 배수가 아닌것 return n % 3 === 0 && n % 6 !== 0;

// 두번째 방법 
function test(n) {
    return n % 3 === 0;
}
showNumber(30, test);

//===============================================

$btn.onclick = function () {} 
// 콜백과 같은 개념이라고 보면 됨 
// 클릭했을때 벌어질 일에 대해서는 내가 function으로 작성

function showMessage(message, howTo) {
    //공통기능
    document.body.style.background = 'gray';

    setTimeout(() => {
        //개별기능 : alert, prompt, confirm 등 각자 요구 사항이 다르니까 저거 사용자가 원하는대로 설정해~
        howTo(message);

        //공통기능
        alert('하하호호!');
    }, 500); // 비동기라서 화면 뜨는것에 대한 설정 0.5초 늦춘거임 

}

showMessage('메롱메롱', function (m) {
    confirm(m); // 혹은 prompt(m) 등 본인이 원하는거 쓰면 됨 
});