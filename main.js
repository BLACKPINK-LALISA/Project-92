document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name ;
document.getElementById("playeranswer").innerHTML =  "Answer Turn - " + player2name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    answer= parseInt(number1) * parseInt(number2);
    question="<h4>" + number1 + "X" + number2 + "</h4>";
    input = "<br> Answer : <input type = 'text' id='input_check_box'>";
    check="<br><br><button class='btn btn info' onclick='check()'>Check</button>";
    row = question + input + check ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    question_turn = "player1";
    answer_turn = "player2";

    function check() {
        get_answer =  document.getElementById("input").value;
        if(get_answer == answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1 + 1;
            document.getElementById("player1").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2 + 1;
            document.getElementById("player2").innerHTML = update_player2_score;
        }
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("question").innerHTML = "Question Turn - " + player2_name;
        }
        else{
            question_turn = "player1"
            document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
        }
    }