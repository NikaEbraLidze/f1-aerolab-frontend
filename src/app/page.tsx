import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="mb-4 text-xs font-mono tracking-[0.3em] text-f1-muted uppercase">
        Formula 1 Engineering Playground
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-f1-white mb-2">
        F1 <span className="text-f1-red">Aero</span>Lab
      </h1>

      <p className="mt-4 max-w-md text-f1-muted text-base leading-relaxed">
        Adjust car parameters in real time and see how aerodynamic forces
        respond — downforce, drag, grip, and efficiency, live via WebSocket.
      </p>

      <Link
        href="/simulation"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-f1-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-f1-red-dark"
      >
        Launch Simulation
      </Link>
    </main>
  );
}
