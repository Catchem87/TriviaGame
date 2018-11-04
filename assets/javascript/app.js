$(document).ready(function() {

    var questions = [{
        "question": "Who was Ross's second wife?",
        "option1": "Susan",
        "option2": "Carol",
        "option3": "Emily",
        "option4": "Rachel",
        "answer": "3",
    }, {
        "question": "What was the name of the 'twin' Joey hired for an identical twin study?",
        "option1": "Carl",
        "option2": "Steve",
        "option3": "Tony",
        "option4": "Rex",
        "answer": "1",
    }, {
        "question": "What did Monica make when she was trying to get over Richard?",
        "option1": "Cookies",
        "option2": "Jam",
        "option3": "Chocolates",
        "option4": "Pies",
        "answer": "2",
    }, {
        "question": "What was the name of Rachel's fiancé that she left at the altar?",
        "option1": "John",
        "option2": "Louis",
        "option3": "Marty",
        "option4": "Barry",
        "answer": "4",
    }]

    var timerNumber = 16;
    var intervalId = "";


    function loadTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timerNumber--;
        $('#timerDisplay').html("<h3>" + "Time remaining :" + timerNumber + "</h3>");
        if(timerNumber === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $('#startButton').click(function(){
        $('#startButton').hide();
    });
    $(document).on('click', '.start', loadTimer);
    
    
});


