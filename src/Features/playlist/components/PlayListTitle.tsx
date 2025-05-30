import Image from "next/image";
function PlayListTitle() {
  return (
    <section className="flex h-[210px] gap-2 text-white border-b border-gray-600 mb-2 p-2 ">
      <Image src="/utabi.png" alt="utabi" width={175} height={175} />
      <div className="flex flex-1 flex-col min-w-0 justify-end h-full pl-2 flex-end flex flex-col">
        <p className="text-sm">Public Playlist</p>
        <h2 className="text-7xl font-extrabold truncate whitespace-nowrap overflow-hidden">
          Latest Love Tamil
        </h2>
        <p className="text-sm font-normal opacity-70">
          Check out the Latest Romance Tracks. Cover : Veera Dheera Sooran
        </p>
        <div className="flex gap-1 items-center">
          <Image src="/utabi.png" alt="utabi" width={40} height={40} />
          <h3 className="font-bold">Utabi</h3>
          <p className="text-sm font-normal opacity-70">
            {" "}
            • 146,966 saves • 50 songs, about 3 hr
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlayListTitle;
