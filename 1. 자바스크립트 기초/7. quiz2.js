// 1. 양의 정수 1개 입력받아야 함
var n = +prompt('양의 정수를 입력');

// 2. 입력된 숫자만큼 + - 를 반복 출력해야함
var k = 1;

var resultMark = '';
// 2-1. 입력된 숫자만큼 반복해야함

while (k <= n) {
    
    // 2-2. 홀수번째 반복에는 +가 붙어야하고
    //      짝수번째 반복에는 -가 붙어야함
    //      조건에 따라 다르게 해야함
    if (k % 2 === 1) { // 홀수라면
        resultMark += '+';
    } else { // 짝수라면
        resultMark += '-';
    }
    k++;
}

alert(resultMark);

//=====위의 것이랑 똑같이 돌아감 

var resultMark = '';
for(k = 1;k <= n;k++){
    if (k % 2 === 1) { // 홀수라면
        resultMark += '+';
    } else { // 짝수라면
        resultMark += '-';
    }
}
alert(resultMark);