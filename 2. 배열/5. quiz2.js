/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/


var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var deletTarget = prompt(`현재 멤버 : [${tvxq}]\n삭제할 멤버 이름을 입력하세요.`);

    var index = tvxq.indexOf(deletTarget); 
    if(index === -1) {
        alert(`[${deletTarget}] 은/는 잘못된 이름입니다. 다시 입력해 주세요.`);
    } else {
        tvxq.splice(index,1);
        alert(`${deletTarget}님이 삭제 되었습니다.\n현재 남은 멤버 : [${tvxq}]`);
    }

    if(tvxq.length === 0) {
        break;
    }
 
}
alert(`모든 멤버가 삭제되었습니다.`);






// // 배열에 저장 
// var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

//     //** break 안 걸고 이렇게 해도 됨 
// while (tvzq.length > 0) {

//     var delTarget = prompt(`현재 멤버 : [${tvxq}]\n삭제할 이름을 입력하세요.`);
//     //있는지 확인 하는 매서드 : includes 
//     if (tvxq.includes(delTarget)) { // 존재함 
//         tvxq.splice(tvxq.indexOf(delTarget), 1); //tvxq.splice(3:index,1);
//         alert(`삭제 완료!\n남은 멤버 : [${tvxq}]`);
//     } else { // 존재하지 않으면 
//         alert(`${delTarget}은 잘못된 이름입니다.\n다시 입력하세요!`);
//     }

//     //** while무한 반복은 탈출문 꼭 필요
//     if(tvxq.length === 0) { // length=0 다 지웠다는 의미

//         break; // 나가기 
//     }

// }
// // ** 바깥에 띄우면 됨 : alert(`모든 멤버가 삭제되었습니다.`);


var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var modTarget = prompt(`현재 멤버 : [${tvxq}]\n수정할 이름을 입력하세요.`);
    
    if (tvxq.includes(modTarget)) { //있으면
        
        var newMemberName = prompt(`새로운 멤버 이름을 입력하세요.`);
        //오른쪽 새로운 값을 왼쪽에 대입
        //tvxq[1](최강창민이 타겟이였으면/즉 인덱스로 찾아냄) = newMemberName; 
        tvxq[tvxq.indexOf(modTarget)] = newMemberName;
        alert(`수정 완료! \n 현재 멤버 : [${tvxq}]`)

        break; //끝내주고

    } else {
        alert(`${modTarget}은 잘못된 이름입니다.\n다시 입력하세요.`)
    }
}












// // *
// // - Quiz. 
// // 아래 요구사항에 맞는 코드를 작성하고 
// // 브라우저에서 실행하여 테스트하세요.
// // - 요구사항
// // 1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
// // 2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
// //   해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
// // 3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
// //    다시 수정할 이름을 입력할 수 있도록 하세요.
// // 4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
// // */