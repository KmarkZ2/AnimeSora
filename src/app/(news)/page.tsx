import NewsBlock from "@/ui/Components/News/News";

type PageProps = {
  searchParams: Promise<{ day?: string }>;
};

export const dynamic = "force-dynamic";

export default async function News({ searchParams }: PageProps) {
  const { day } = await searchParams;
  return (
    <div className="md:pt-[50px] pt-[25px] md:pb-[50px] pb-[25px] flex flex-col items-center md:gap-[100px] gap-[50px]">
      <NewsBlock day={day} />
    </div>
  );
}
