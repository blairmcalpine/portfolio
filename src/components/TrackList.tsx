import { GitHub } from '@/icons/GitHub';
import Image from 'next/image';

export const TrackList = () => {
  return (
    <div className="relative h-[calc(100dvh-4rem)] w-full">
      <video
        src="/TrackList.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
        <div className="flex items-center gap-2">
          <Image
            src="/TrackList-Logo.png"
            alt="TrackList Logo"
            width={96}
            height={96}
            className="h-24 w-24"
          />
          <h1 className="text-9xl font-bold">TrackList</h1>
        </div>
        <h2 className="max-w-2xl text-center text-2xl">
          Spotify doesn&apos;t provide a way to view an artist&apos;s most
          popular songs.{' '}
          <span className="text-accent-fade">TrackList fixes that.</span>
        </h2>
        <div className="mt-4 flex gap-4">
          <a
            className="flex w-fit items-center gap-2 rounded-lg border-2 border-onPrimary px-4 py-2 text-xl transition-colors hover:bg-onPrimary hover:text-onSecondary"
            href="https://github.com/blairmcalpine/tracklist"
            target="_blank"
          >
            <GitHub width={24} height={24} />
            See the Code
          </a>
          <a className="w-fit rounded-lg bg-accent px-4 py-2 text-xl text-onAccent transition-colors hover:bg-accent/80">
            Next Project ↓
          </a>
        </div>
      </div>
    </div>
  );
};
