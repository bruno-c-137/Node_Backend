import { randomUUID } from "node:crypto";
export const DatabaseMemory: any = () => {
  const _videos = new Map();

  return {
    create(videos: any) {
      const videoId = randomUUID();
      _videos.set(videoId, videos);
    },
    list(search: any) {
      return Array.from(_videos.entries())
        .map((index: any, videoArray: any) => {
          const id = videoArray[0];
          const data = videoArray[1];
          return {
            id,
            ...data,
          };
        })
        .filter((video) => {
          if (search) {
            return video.title.includes(search);
          }

          return true;
        });
    },
    update(id: any, video: any) {
      _videos.set(id, video);
    },
    delete(id: any) {
      _videos.delete(id);
    },
  };
};
