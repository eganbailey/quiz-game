$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Before moving to San Francisco, what was the home of the old Giants team?",
        choices: ["New Jersey", "Washington DC", "Brooklyn", "New York"],
        qNum: 0,
        correct: 3,
        fact: "In 1958 the then 'New York Giants' moved to San Francisco, becoming the 'San Francisco Giants'."
    }, {
        question: "How many World Series titles do the Giants have?",
        choices: ["0", "8", "3", "5"],
        qNum: 1,
        correct: 1,
        fact: "The Giants have won 8 World Series titles: 1905, 1921, 1922, 1933, 1954, 2010, 2012, and 2014"
    }, {
        question: "What disaster occured during the 1989 World Series, also known as 'The Battle of the Bay'?",
        choices: ["Tsunami", "Wildfire", "Earthquake", "Tornado"],
        qNum: 2,
        correct: 2,
        fact: "The Loma Prieta Earthquake, a 6.9 magnitude quake, struck during a live broadcast 30 minutes before Game 3 of the series. The Goodyear blimp used its cameras to coordinate emergency rescue efforts."
    }, {
        question: "How many home runs did Giants slugger Barry Bonds hit in his career?",
        choices: ["756", "800", "762", "755"],
        qNum: 3,
        correct: 2,
        fact: "Barry Bonds hit 762 homers in his career, 586 of which came in his 15 seasons with the Giants."
    }, {
        question: "What are the team colors of the Giants?",
        choices: ["Orange, Cream, and Black", "Black, Cream, and Yellow", "White and Red", "Navy Blue and White"],
        qNum: 4,
        correct: 0,
        fact: "The Giants' colors are orange, cream, and black. The Giants kept the color scheme of their New York predecessors from 1958."
    }]

    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    var count = 1;

    function questionCounter(start) {
    if(start > -1) count = start;
    if(count < 5){
    count++;
    $('#count').text(count);
}};

    $("#question_wrapper").on("click", "#submit", function() {
        currentQuestion++;
        nextQuestion();
        questionCounter();
    });

    $("#question_wrapper").on("click", "#retry_button", function() {
        numberCorrect = 0;
        currentQuestion = 0;
        questionCounter(0);
        var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").hide();
            var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact = questions[currentQuestion - 1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        } else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact = questions[currentQuestion - 1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered ' + numberCorrect + ' question.'
                $("#answer_holder").html(finalScore);
            } else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered ' + numberCorrect + ' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});