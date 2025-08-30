import VideoCard from "../../../../components/VideoCard";
import NotesSection from "./sections/NotesSection";
import QuizButton from "./sections/QuizButton";

async function getTutorial(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutorials/${id}`, { cache:"no-store" });
  if (!res.ok) throw new Error("Tutorial not found");
  return res.json();
}

export default async function TutorialDetails({ params }) {
  const tut = await getTutorial(params.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        {tut.subject} — Chapter {tut.chapterNo}: {tut.chapterTitle}
      </h1>

      <VideoCard videoUrl={tut.videoUrl} title={tut.chapterTitle} />

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">ID: {tut.id}</div>
        <QuizButton chapterId={tut.id} />
      </div>

      <NotesSection chapterId={tut.id} />
    </div>
  );
}
