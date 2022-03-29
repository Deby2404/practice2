// 入力するプロンプト
let user_hand = prompt('choose rock, scissors, or paper');
// 違う文字が入力された場合のエラー文
while ((user_hand != "rock") && (user_hand != "scissors") && (user_hand != "paper") && (user_hand != null)){
  alert("type rock, scissors, or paper");
  // 再度プロンプトの表示
  user_hand = prompt('choose rock, scissors, or paper');
}
// じゃんけんの手をランダムに作成する関数
let js_hand = getJShand();
// ユーザーとJSを比べる関数を呼び出して、judgeに代入
let  judge = winLose(user_hand, js_hand);
// 結果表示
if (user_hand != null){
  alert("you choose " + user_hand + "and JS choose " + js_hand + " the winner is " + judge);
// キャンセルボタンを押したときはアラートメッセージを表示
}else{
  alert("try again")
}


// ランダムでじゃんけんを作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

if (js_hand_num == 0) {
  hand_name = "rock";
} else if(js_hand_num == 1){
  hand_name = "scissors";
}else if(js_hand_num == 2){
  hand_name = "paper";
}

return hand_name;
}

// ユーザーとJSの手を比べる関数
function winLose(user, js) {
  let winLoseStr;
// ユーザーがグーを出した場合
  if (user == "rock"){
    if(js == "rock"){
      winLoseStr = "again!";
    }else if(js == "scissors"){
      winLoseStr = "win!";
    }else if(js == "paper"){
      winLoseStr = "loose!";
    }
    // ユーザーがチョキを出した場合
  } else if(user == "scissors"){
    if (js == "rock"){
      winLoseStr = "loose!";
    }else if(js == "scissors"){
      winLoseStr = "again!";
    }else if(js == "paper"){
      winLoseStr = "win!";
    }
    // ユーザーがパーを出した場合
  }else if(user == "paper"){
    if (js == "rock"){
      winLoseStr = "win!";
    }else if(js == "scissors"){
      winLoseStr = "loose!";
    }else if(js == "paper"){
      winLoseStr = "again!";
    }
  }
  return winLoseStr;
  }
