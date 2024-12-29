import { useState } from "react";

const QuizData = [
  {
    question:"What is the capital of farnce?" ,
    options:["berlin","Madrid","Paris","Lisbon"],
    answer:"Paris"
  },
  {
    question:"what is the capital of Nigeria?",
    options:["Lagos","Niger","Edo","Abuja"],
    answer:"Abuja"
  },
  {
    question:"Who is the ceo of tesla?",
    options:["Bill gates","Elon musk","jeff Bezos","warisi"],
    answer:"Elon musk"
  },
  {
    question:"What is the most use programming language in 2023?",
    options:["Java","JavaScript","Python","C#"],
    answer: "JavaScript"
  },
  {
    question:"what is the poplar framework of javaScript?",
    options:["Vue","Angular","React","Dotnet core"],
    answer: "React"
  },
  {
    question:"What is React.js?",
    options:[" A JavaScript library for building user interfaces"," A backend framework for server-side rendering"," A CSS preprocessor"," A database management system"],
    answer:" A JavaScript library for building user interfaces"
  },
  {
    question:"Which of the following is used to pass data to a component in React?",
    options:[" state","props"," setState","components"],
    answer:"props"
  },
  {
    question:"What is the correct syntax for a function component in React?",
    options:["function MyComponent { return <div>Hello</div>}","function MyComponent() { return <div>Hello</div> }","component MyComponent() { return <div>Hello</div>}","component MyComponent() { return <div>Hello</div>}"],
    answer:"function MyComponent() { return <div>Hello</div> }"
  },
  {
    question:"Which method in React is used to update the state of a component?",
    options:["Usestate","UseRef","UseEffect","Getstate"],
    answer:"Usestate"
  },
  {
    question:"Which method in React is used to update the state of a component?",
    options:["Usestate","UseRef","UseEffect","Getstate"],
    answer:"Usestate"
  }

]


function question(){
    const[currentQuestion, setCurrentQuestion ]= useState(0);
    const[score, setScore] = useState(0);
    const[showscore, setShowscore] = useState(false);
    const[selectedOption, setSelectedoption] = useState(null)


const handleAnswerOptionClick = ()=>{
  if(selectedOption === QuizData[currentQuestion].answer){
    setScore(score + 1)
  }
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion<QuizData.length){
    setCurrentQuestion(nextQuestion);
    setSelectedoption(null);

  }else{
    setShowscore(true)
  }
}

const retakeQuiz = ()=>{
  setCurrentQuestion(0);
  setScore(0);
  setShowscore(false);
  setSelectedoption(null);
};

const calculatePercentage = ()=>{
  return((score/QuizData.length) * 100).toFixed(2);
};

return(

   <div className="question">
    <h2>Sporty Light </h2>
    <br />
    {showscore ?(
      <div className="score-section"> 
        <div>You scored {score} out of {QuizData.length}</div>
        <div className="score-circle">
          <span className="score-percentage">{calculatePercentage()}%</span>
        </div> 
        <p>Pratice more to be the best</p>
        <button onClick={retakeQuiz} className="retake-btn">Retake</button>
      </div>
      
    ):(
      <div className="quiz-section">
      <div className="question-section">
      <div className="question-court">
        <span>Question{currentQuestion + 1} / {QuizData.length}</span>
      </div>  
      <div className="question-text">{QuizData[currentQuestion].question}</div>
      </div>
       <div className="answer-section">
      {QuizData[currentQuestion].options.map((Option,index)=>(
        <button key={index} className={selectedOption === Option ? "selected" : ""} onClick={()=>setSelectedoption(Option)}>
          {Option}
        </button>
      ))}

      </div>
        <button className="submit-btn" onClick={handleAnswerOptionClick} disabled={!selectedOption}>Submit</button>

      </div>
    )}

   </div>
  )


        
}  
  
        
        

export default question;
