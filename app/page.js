import Link from "next/link"

export default function Page() {
    return (
      <main className="mx-10 text-slate-200">
        <h1 className="m-5 font-bold text-center text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-2"}>Week 2 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-3"}>Week 3 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-4"}>Week 4 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-5"}>Week 5 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-6"}>Week 6 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-7"}>Week 7 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-8"}>Week 8 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-9"}>Week 9 Assignment</Link>
          <Link className="p-2 bg-blue-100 hover:bg-blue-400 text-gray-700 font-bold rounded-lg" href={"week-10"}>Week 10 Assignment</Link>
        </div>
      </main>
    );
}