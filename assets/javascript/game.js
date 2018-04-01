
$(document).ready(function () {

    var counter = 15
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var answer;
    var i = 0

    var perguntas = {
        questionBank:
            [{
                titulo: "What's the name of Bellatrix' husband?",
                respostaUm: ["Albert Lestrange", "wrong"],
                respostaDois: ["Rolphius Lestrang", "wrong"],
                respostaTres: ["Adolph Lestrange", "wrong"],
                respostaQuatro: ["Rodolphus Lestrange", "correct"],
            },
            {
                titulo: "What's the name of Percy's wife?",
                respostaUm: ["Audrey", "correct"],
                respostaDois: ["Lucy", "wrong"],
                respostaTres: ["Rosie", "wrong"],
                respostaQuatro: ["Marjorie", "wrong"],
            },
            {
                titulo: "Which of these is a type of Love Potion?",
                respostaUm: ["Felixfelices", "wrong"],
                respostaDois: ["Amortentia", "correct"],
                respostaTres: ["Polyjuice Potion", "wrong"],
                respostaQuatro: ["Veritaserum", "wrong"],
            },
            {
                titulo: "What class did Neville end up teaching at Hogwarts?",
                respostaUm: ["Astronomy", "wrong"],
                respostaDois: ["Muggle Studies", "wrong"],
                respostaTres: ["Herbology", "correct"],
                respostaQuatro: ["Charms", "wrong"],
            },
            {
                titulo: "What platform does the Hogwarts express depart from?",
                respostaUm: ["Platform 10 ¾", "wrong"],
                respostaDois: ["Platform 9 ¾", "correct"],
                respostaTres: ["Platform 8 ¾", "wrong"],
                respostaQuatro: ["Platform 7 ¾", "wrong"],
            },
            {
                titulo: "Where is the opening to the chamber of secrets?",
                respostaUm: ["Girls bathroom", "correct"],
                respostaDois: ["Boys Bathroom", "wrong"],
                respostaTres: ["Gryffindor Common Room", "wrong"],
                respostaQuatro: ["Slytherin Common Room", "wrong"],
            },
            {
                titulo: "Who was harry’s first crush?",
                respostaUm: ["Hermione Granger", "wrong"],
                respostaDois: ["Ginny Weasley", "wrong"],
                respostaTres: ["Luna Lovegood", "wrong"],
                respostaQuatro: ["Cho Chang", "correct"],
            },
            {
                titulo: "Where does harry live (the address)?",
                respostaUm: ["Number 6 Privet Drive", "wrong"],
                respostaDois: ["Number 4 Privet Drive", "correct"],
                respostaTres: ["Number 8 Privet Drive", "wrong"],
                respostaQuatro: ["Number 2 Privet Drive", "wrong"],
            },
            {
                titulo: "What is professor mcgonagall’s transfiguraton form?",
                respostaUm: ["A cat", "correct"],
                respostaDois: ["A dog", "wrong"],
                respostaTres: ["A pig", "wrong"],
                respostaQuatro: ["A snake", "wrong"],
            },
            {
                titulo: "Who killed bellatrix lestrange?",
                respostaUm: ["Ginny Weasley", "wrong"],
                respostaDois: ["Rony Weasley", "wrong"],
                respostaTres: ["Percy Weasley", "wrong"],
                respostaQuatro: ["Molly Weasley", "correct"],
            },


        ]
    };

     

    var audio = new Audio("assets/music/Harry Potter Theme Song.mp3")
    


    function timer() {
        counter--;
       $("#timeRemaining").html("<p> Time Remaining: " + counter + " seconds</p>");
        if (counter === 0) {
        question();
       }
    }

    function stop() {

         clearInterval(intervalId);
    }

    function question() {

        stop()
        counter = 15;
        $("#timeRemaining").html("<p> Time Remaining: " + counter + " seconds</p>")
        intervalId = setInterval(timer, 1000);

        if (i < perguntas.questionBank.length) {
            var questionDiv = $("#game");
            var questionAsked = $("<div>");


            var title = $("<p>").text(perguntas.questionBank[i].titulo);
            var answerOne = $("<button>").text(perguntas.questionBank[i].respostaUm[0]);
            answerOne.attr("value", perguntas.questionBank[i].respostaUm[1])
            var answerTwo = $("<button>").text(perguntas.questionBank[i].respostaDois[0]);
            answerTwo.attr("value", perguntas.questionBank[i].respostaDois[1])
            var answerThree = $("<button>").text(perguntas.questionBank[i].respostaTres[0]);
            answerThree.attr("value", perguntas.questionBank[i].respostaTres[1])
            var answerFour = $("<button>").text(perguntas.questionBank[i].respostaQuatro[0]);
            answerFour.attr("value", perguntas.questionBank[i].respostaQuatro[1])

            questionAsked.append(title, answerOne, answerTwo, answerThree, answerFour);
            questionDiv.html(questionAsked);

            i++
        }
        else {
            results();
        }
    }

    $("#start").on("click", function () {
        $("#start").addClass("hidden");
        $("#timeRemaining").removeClass("hidden");
        question();
        audio.play();
    });

    $("#game").on("click", "button", function () {
        answer = ($(this).attr("value"))

        if (answer === "correct") {
            correctAnswers++
        }
        else if (answer === "wrong") {
            incorrectAnswers++

        }
        question();

    });

    // $("#done").on("click", function(){
    //     results();
    // })

    function results() {
        $("#game").addClass("hidden");
        $("#timeRemaining").addClass("hidden");
        $("#results").removeClass("hidden");
        unanswered = perguntas.questionBank.length - correctAnswers - incorrectAnswers
        $("#results").html("<h2> All Done! </h2> <p> Correct Answers: " + correctAnswers + "</p><p> Incorrect Answers: " + incorrectAnswers + "</p><p>Unanswered: " + unanswered + "<p>");

    }
});
