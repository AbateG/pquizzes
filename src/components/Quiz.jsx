 import React, { useState } from 'react';

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    // Sample questions, you can add more or fetch from your back-end
    const questions = [
        { id: 1, question: "What does HTML stand for?", choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correct: 0 },
        { id: 2, question: "What is the correct syntax to output 'Hello World' in JavaScript?", choices: ["print('Hello World')", "echo 'Hello World';", "console.log('Hello World');"], correct: 2 },
        { id: 3, question: "Which of the following is a Python keyword?", choices: ["def", "echo", "var"], correct: 0 },
    ];

    const handleSubmit = () => {
        let score = 0;
        questions.forEach((q, index) => {
            if (answers[q.id] === q.correct) {
                score += 1;
            }
        });
        setScore(score);
    };

    return (
        <div>
            <h1>Programming Quiz</h1>
            {questions.map((q, index) => (
                <div key={q.id}>
                    <p>{q.question}</p>
                    {q.choices.map((choice, idx) => (
                        <label key={idx}>
                            <input type="radio" name={q.id} value={idx} onChange={() => setAnswers({ ...answers, [q.id]: idx })} />
                            {choice}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
            {score !== null && <p>Your score: {score}/{questions.length}</p>}
        </div>
    );
};

export default Quiz;
