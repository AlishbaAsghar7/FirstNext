
type StudentCardProps = {
  name: string;
  course: string;
  semester: number;
};

export default function StudentCard({
  name,
  course,
  semester,
}: StudentCardProps) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}