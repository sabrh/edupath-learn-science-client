import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import SubjectDetailsClient from "./SubjectDetailsClient";

export default async function SubjectDetailsPage({ params }) {
  const tutorialsCollection = dbConnect(collectionNamesObj.tutorialsCollection);
  const subject = await tutorialsCollection.findOne({
    _id: new ObjectId(params.id),
  });

  // Convert MongoDB ObjectId to string so it doesn't break serialization
  const subjectData = JSON.parse(JSON.stringify(subject));

  return <SubjectDetailsClient subjectData={subjectData} />;
}