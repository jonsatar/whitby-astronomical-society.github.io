(function() 
 {
  //  store a large object with all the questions as well as the answers and available options for the quiz taker
  var allQuestions = [{//first question
    question: "What year did man land on the moon?",
    options: ["1968", "1969", "1970", "1973"],
    answer: 1
  }, {//second question
    question: "Who was the first man on the moon?",
    options: ["Carl Sagan", "Neil Armstrong", "Buzz Aldrin", "Sylvester Stallone"],
    answer: 1
  }, {//third question
    question: "Which of the following travels the fastest?",
    options: ["Sound", "Lamborghini's", "Light","Gases"],
    answer: 2
  },{//fourth question
    question: "Which of the following has the strongest gravity?",
    options: ["Earth", "Stars", "Neutron Stars", "Black Holes"],
    answer: 3
  }, {//fifth question
    question: "Which planet is the largest?",
    options: ["Earth", "Mars", "Neptune", "Jupiter"],
    answer: 3
  },{//sixth question
    question: "How many planets are there?",
    options: ["5", "6", "7", "8"],
    answer: 3
  },{//seventh question
    question: "What is the chemical name of water",
    options: ["Water", "Dihydrogen monoxide", "Sodium Chloride", "Calcium Oxide"],
    answer: 1
  },{//eight question
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0
  },{//ninth question
    question: "Which object is closest to the Earth?",
    options: ["Sun", "Mars", "Moon", "Venus"],
    answer: 2
  },{//tenth question
    question: "What event likely made dinosaurs extinct",
    options: ["Tidal Wave", "Global Ice Age", "Collision From Space", "Megavolcano"],
    answer: 2
    }];
  // keep track of the current question
  var quesCounter = 0;
  // log the options selected as the right answer by the user 
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
      // display alert if no option is selected or else increment the counter by one and call the next question function
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  // decrement by the counter by one when the previous button is pressed
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
    // display to the quiz taker the current question as they progress
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();