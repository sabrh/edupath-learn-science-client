import dbConnect from "@/lib/dbConnect";
import SubjectCard from "./SubjectCard";

export default async function SubjectsSection() {
  const tutorialsCollection = dbConnect("tutorials");
  const data = await tutorialsCollection.find({}).toArray();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((subject) => (
          <SubjectCard key={subject.subjectId} subject={subject} />
        ))}
      </div>
    </div>
  );
}