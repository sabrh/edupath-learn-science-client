"use client";
import { useRouter } from "next/navigation";

export default function QuizButton({ chapterId }) {
  const router = useRouter();
  return (
    <button
      className="btn btn-secondary"
      onClick={()=>router.push(`/tutorials/${chapterId}/quiz`)}>
      Take a Quiz
    </button>
  );
}
