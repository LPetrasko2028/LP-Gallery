import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/fdl9ZCxGjTEKzJdt9y6psWVlDt9PFvC3gwukc4qrOHhNKMUe",
  "https://utfs.io/f/fdl9ZCxGjTEKsMNInJZG7bq0oOpZCcRSFMEx4fYahNlH1j63",
  "https://utfs.io/f/fdl9ZCxGjTEKUhDupldXCfHj8aqn2hMSUoPtWVTQ7Ymy9c6g",
  "https://utfs.io/f/fdl9ZCxGjTEKYQMthvuhE7e2M6USnKFDuoj53AstrwJNWlzk",
  "https://utfs.io/f/fdl9ZCxGjTEKqNz9gYJp8FyjD2MTIiGKLgulxpYB3fs4PZ1J",
  "https://utfs.io/f/fdl9ZCxGjTEKWS1kBjQNlCxG7c23fy5zwjSTDn6gQmWkdqPA",
  "https://utfs.io/f/fdl9ZCxGjTEKmlNbOmwPR5hbqjZNvKfe4zBlwtP9ap7YSkyo",
  "https://utfs.io/f/fdl9ZCxGjTEK4MFCxbUeuF8ptojqmwRdQ16PHkxCvfLgA2Jb",
  "https://utfs.io/f/fdl9ZCxGjTEKG0bZ3ElfjbPVqGHlzXkRZ1m9ht0evEKOL8Co",
  "https://utfs.io/f/fdl9ZCxGjTEKWJrDfTXQNlCxG7c23fy5zwjSTDn6gQmWkdqP",
]
const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
  alt: `Image ${index + 2}`,
}));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/3 p-2">
            <img src={image.url} alt={image.alt} />
          </div>
          ))}
      </div>
    </main>
  );
}
