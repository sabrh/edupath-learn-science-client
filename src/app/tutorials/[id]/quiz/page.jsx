"use client";
import { useEffect, useState } from "react";

export default function QuizPage({ params }) {
  const chapterId = params.id;
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(()=>{
    fetch(`/api/quizzes?chapterId=${chapterId}`)
      .then(r=>r.ok?r.json():null)
      .then(setQuiz);
  },[chapterId]);

  if (!quiz) return <div className="p-6">Loading quiz…</div>;

  const submit = () => {
    let s = 0;
    quiz.questions.forEach((q, i)=>{
      if (answers[i] === q.correctIndex) s++;
    });
    setScore(s);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quiz — {quiz.chapterTitle}</h1>

      {quiz.questions.map((q, i)=>(
        <div key={i} className="mb-6 border p-4 rounded">
          <p className="font-medium mb-2">{i+1}. {q.q}</p>
          <div className="space-y-2">
            {q.options.map((opt, idx)=>(
              <label key={idx} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q-${i}`}
                  className="radio"
                  checked={answers[i]===idx}
                  onChange={()=>setAnswers({...answers, [i]:idx})}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button className="btn btn-primary" onClick={submit}>Submit</button>

      {score!==null && (
        <div className="alert alert-info mt-4">
          Score: {score} / {quiz.questions.length}
        </div>
      )}
    </div>
  );
}
