"use client";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import { cn } from "@/lib/utils";

export const VideoPlayer = ({ style, ...props }) => (
  <MediaController
    style={{
      ...style,
    }}
    {...props}
  />
);

export const VideoPlayerControlBar = (props) => <MediaControlBar {...props} />;

export const VideoPlayerTimeRange = ({ className, ...props }) => (
  <MediaTimeRange className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerTimeDisplay = ({ className, ...props }) => (
  <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerVolumeRange = ({ className, ...props }) => (
  <MediaVolumeRange className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerPlayButton = ({ className, ...props }) => (
  <MediaPlayButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerSeekBackwardButton = ({ className, ...props }) => (
  <MediaSeekBackwardButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerSeekForwardButton = ({ className, ...props }) => (
  <MediaSeekForwardButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerMuteButton = ({ className, ...props }) => (
  <MediaMuteButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerContent = ({ className, ...props }) => (
  <video className={cn("mt-0 mb-0", className)} {...props} />
);
