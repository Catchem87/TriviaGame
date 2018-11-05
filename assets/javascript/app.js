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

        // for(var i=0; i < questions.length; i++) {
            var $currentQuestion = $('<div>');
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
        // }
    }

    var timerNumber = 10;
    var intervalId = "";


    function loadTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        }

    function timeUp() {
            $('#question-appears-here').html("");
            alert("TIME UP");
            questionCounter = 0;
            timerNumber = 10;
            $('#timerDisplay').html("");
            $('#startButton').show();
        }
        
    function decrement() {
        timerNumber--;
        $('#timerDisplay').html("<h3>" + "Time remaining :" + timerNumber + "</h3>");
        if(timerNumber === 0) {
            stop();
            timeUp();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function checkAnswer() {
        console.log($(this));
        if($(this).val() === questions[questionCounter].answer) {
            alert("You got it right!")
            questionCounter++;
            loadQuestion();
        } else {
            alert ("You got it wrong!")
        }
    }

    $('#startButton').click(function(){
        $('#startButton').hide();
    })

    $(document).on('click', '.start', loadQuestion);

    $(document).on('click', '.answerOpt', checkAnswer);

    console.log(questions);


    
});


