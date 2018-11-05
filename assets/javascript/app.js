$(document).ready(function() {

    var questions = [{
        "question": "Who was Ross's second wife?",
        "option1": "Susan",
        "option2": "Carol",
        "option3": "Emily",
        "option4": "Rachel",
        "answer": "Emily",
    }, {
        "question": "What was the name of the 'twin' Joey hired for an identical twin study?",
        "option1": "Carl",
        "option2": "Steve",
        "option3": "Tony",
        "option4": "Rex",
        "answer": "Carl",
    }, {
        "question": "What did Monica make when she was trying to get over Richard?",
        "option1": "Cookies",
        "option2": "Jam",
        "option3": "Chocolates",
        "option4": "Pies",
        "answer": "Jam",
    }, {
        "question": "What was the name of Rachel's fiancé that she left at the altar?",
        "option1": "John",
        "option2": "Louis",
        "option3": "Marty",
        "option4": "Barry",
        "answer": "Barry",
    }]

    var questionCounter = 0;


    function loadQuestion() {
        loadTimer();
        $("#question-appears-here").html("");
        var currentQuestion = questions[questionCounter];

            var $currentQuestion = $('<div>');
            $currentQuestion.addClass("current-question");
            var $opt1 = $('<button>');
            $opt1.addClass("answerOpt");
            $opt1.attr("value", currentQuestion.option1);
            var $opt2 = $('<button>');
            $opt2.addClass("answerOpt");
            $opt2.attr("value", currentQuestion.option2);
            var $opt3 = $('<button>');
            $opt3.addClass("answerOpt");
            $opt3.attr("value", currentQuestion.option3);
            var $opt4 = $('<button>');
            $opt4.addClass("answerOpt");
            $opt4.attr("value", currentQuestion.option4);


            $currentQuestion.html(currentQuestion.question);
            $opt1.html(currentQuestion.option1);
            $opt2.html(currentQuestion.option2);
            $opt3.html(currentQuestion.option3);
            $opt4.html(currentQuestion.option4);

            $('#question-appears-here').append($currentQuestion, $opt1, $opt2, $opt3, $opt4);
    }

    var timerNumber = 11;
    var intervalId = "";
    var correctAnswers = 0;
    var incorrectAnswers = 0;


    function loadTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        timerNumber = 11;
        }

    function timeUp() {
            $('#question-appears-here').html("");
            alert("TIME UP");
            questionCounter = 0;
            $('#timerDisplay').html("");
            $('.start').html("Play Again");
            $('#startButton').show();
            $('#correct-answers').html("Correct Answers: " + correctAnswers);
            $('#incorrect-answers').html("Incorrect Answers: " + incorrectAnswers);
        }

    function tracker() {
        if(questionCounter === 4) {
            stop();
            questionCounter = 0;
            $('#timerDisplay').html("");
            $('.start').html("Play Again");
            $('#startButton').show();
            $('#correct-answers').html("Correct Answers: " + correctAnswers);
            $('#incorrect-answers').html("Incorrect Answers: " + incorrectAnswers);
            $('#question-appears-here').html("");
        } else {
            loadQuestion();
        }
    }

        
    function decrement() {
        timerNumber--;
        $('#timerDisplay').html("<h3>" + "Time remaining :" + timerNumber + "</h3>");
        if(timerNumber === 0) {
            stop();
            timeUp();
        }
        if(questionCounter === 4) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function checkAnswer() {
        console.log($(this));
        if($(this).val() === questions[questionCounter].answer) {
            questionCounter++;
            correctAnswers++;
            tracker();
        } else {
            questionCounter++;
            incorrectAnswers++;
            tracker();
        }
    }

    function reset() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        $('#correct-answers').html("");
        $('#incorrect-answers').html("");
        $("#question-appears-here").html("");
        loadQuestion();
    }

    $('#startButton').click(function(){
        $('#startButton').hide();
    })

    $(document).on('click', '.start', reset);

    $(document).on('click', '.answerOpt', checkAnswer);

    console.log(questions);


    
});


