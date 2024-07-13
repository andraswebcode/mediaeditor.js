import { Clip } from 'core/clip';
import { VideoLayer } from 'layer/video-layer';
import { VisualEffect } from 'types/types';

class VideoClip extends Clip<HTMLVideoElement, VisualEffect> {
	public layer: VideoLayer;

	public constructor(element: HTMLVideoElement) {
		super(element);
		this.layer = new VideoLayer(this);
	}
}

export { VideoClip };
