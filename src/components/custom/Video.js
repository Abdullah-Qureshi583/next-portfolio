// const Video = () => (
//   <iframe
//     src="https://www.youtube.com/embed/19g66ezsKAg"
//     allowFullScreen
//     className="w-full h-full"
//   />
// );
// export default Video;

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/shadcn-io/video-player";

const Video = () => (
  <VideoPlayer className="overflow-hidden rounded-lg border p-4 ">
    <VideoPlayerContent
    className=""
      crossOrigin=""
      muted
      preload="auto"
      slot="media"
      src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
    />
    <VideoPlayerControlBar  className="" >

      <VideoPlayerPlayButton />
      <VideoPlayerSeekBackwardButton />
      <VideoPlayerSeekForwardButton />
      <VideoPlayerTimeRange />
      <VideoPlayerTimeDisplay showDuration />
      <VideoPlayerMuteButton />
      <VideoPlayerVolumeRange />
    </VideoPlayerControlBar>
  </VideoPlayer>
);
export default Video;
