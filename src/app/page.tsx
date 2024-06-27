import CommentSection from "~/_components/commentSection";

export default function HomePage() {
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <CommentSection />
      </div>
    </main>
  );
}
