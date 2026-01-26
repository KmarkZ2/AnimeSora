interface LineProps {
  type: "vertical" | "horizontal";
}

export default function Line({ type }: LineProps) {
  if (type === "horizontal") {
    return (
      <div className="h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] shadow-[0_0_8px_rgba(255,255,255,0.15)]"></div>
    );
  }
  return (
    <div className="h-full w-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] shadow-[0_0_8px_rgba(255,255,255,0.15)]"></div>
  );
}
