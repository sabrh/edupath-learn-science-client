"use client";
import Link from "next/link";

export default function SubjectCard({ subject }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg">
      <figure>
        <img
          src={subject.image}
          alt={subject.subject}
          className="h-40 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{subject.subject}</h2>
        <p className="text-sm text-gray-600">{subject.chapters.length} Chapters Available</p>
        <div className="card-actions justify-end mt-2">
          <Link href={`/tutorials/${subject._id}`} className="btn btn-outline text-green-700 btn-sm">
            View Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
}