export default function VideoPlayer({ url }: { url: string }) {
  return (
    <div className="p-2.5 rounded-2xl border border-[rgba(255,255,255,0.6)] w-fit">
      <iframe src={url} allowFullScreen className="w-[854px] h-[480px] rounded-2xl" />
    </div>
  );
}
