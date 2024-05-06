import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/723692f3-62b3-4982-b63f-54e195b98e0c-65e5r9.png",
    "https://utfs.io/f/0f7b4397-98c6-489a-b339-09b0f0cfd1d2-z175d4.png",
    "https://utfs.io/f/8f7cf108-1302-40d4-baa4-379f76d1dda0-5r460f.png",
    "https://utfs.io/f/eefd75ab-a929-4ad2-97ae-42178864380f-yjmcpw.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url: url,
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
