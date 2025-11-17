import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Video {
	id: string;
	title: string;
	ageGroup: string;
	description: string;
	duration: string;
	youtubeId: string;
	thumbnail: string;
}

@Component({
	selector: "app-videos",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="videos">
			<h1>Video Interventions for Home</h1>
			<p class="description">
				Professional-guided exercises you can do at home. Click any video to watch.
			</p>

			<div class="videos-grid">
				<div *ngFor="let video of videos" class="video-card" (click)="selectVideo(video)">
					<div class="video-thumbnail">
						<img
							[src]="'https://img.youtube.com/vi/' + video.youtubeId + '/maxresdefault.jpg'"
							[alt]="video.title"
							class="thumbnail-img" />
						<div class="play-button">
							<span>▶</span>
						</div>
					</div>
					<div class="video-info">
						<h4>{{ video.title }}</h4>
						<p class="age-group">📍 {{ video.ageGroup }}</p>
						<p>{{ video.description }}</p>
						<span class="duration">⏱️ Duration: {{ video.duration }}</span>
					</div>
				</div>
			</div>

			<div *ngIf="selectedVideo" class="video-player-modal" (click)="closeVideo()">
				<div class="modal-content" (click)="$event.stopPropagation()">
					<button class="close-btn" (click)="closeVideo()">✕</button>
					<h3>{{ selectedVideo.title }}</h3>
					<div class="iframe-container">
						<iframe
							[src]="'https://www.youtube.com/embed/' + selectedVideo.youtubeId"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
					</div>
					<div class="video-details">
						<p><strong>Age Group:</strong> {{ selectedVideo.ageGroup }}</p>
						<p><strong>Duration:</strong> {{ selectedVideo.duration }}</p>
						<p>{{ selectedVideo.description }}</p>
					</div>
				</div>
			</div>

			<div class="safety-box">
				<h3>⚠️ Safety Reminder</h3>
				<p>
					Always supervise your child during exercises. Stop if your child shows
					signs of discomfort. Consult your therapist before starting any new
					exercises.
				</p>
			</div>
		</div>
	`,
	styleUrls: ["./videos.component.scss"],
})
export class VideosComponent {
	selectedVideo: Video | null = null;

	videos: Video[] = [
		{
			id: "neck-strengthening",
			title: "Neck Strengthening Exercises",
			ageGroup: "2-4 months",
			description:
				"Help strengthen neck muscles for better head control. Learn techniques to encourage your baby to lift and turn their head.",
			duration: "5 min",
			youtubeId: "8Yxu3U-ZY7c",
			thumbnail: "neck-strengthening",
		},
		{
			id: "tummy-time",
			title: "Tummy Time Activities",
			ageGroup: "1-6 months",
			description:
				"Interactive activities to make tummy time engaging and beneficial. Includes exercises to build upper body strength.",
			duration: "7 min",
			youtubeId: "Y8Yqa-X_65I",
			thumbnail: "tummy-time",
		},
		{
			id: "rolling-practice",
			title: "Rolling Practice",
			ageGroup: "4-8 months",
			description:
				"Techniques to help your baby learn to roll over independently. Includes progressions and modifications.",
			duration: "8 min",
			youtubeId: "I9kYVjF_v3M",
			thumbnail: "rolling-practice",
		},
		{
			id: "sitting-support",
			title: "Sitting Support Exercises",
			ageGroup: "5-9 months",
			description:
				"Build balance and core strength for sitting. Learn how to provide support and encourage independence.",
			duration: "10 min",
			youtubeId: "KR1wlKb5W7o",
			thumbnail: "sitting-support",
		},
		{
			id: "crawling-readiness",
			title: "Crawling Readiness",
			ageGroup: "6-10 months",
			description:
				"Prepare your child for crawling milestones. Includes exercises to build coordination and strength.",
			duration: "9 min",
			youtubeId: "qkHKOlXeIl4",
			thumbnail: "crawling-readiness",
		},
		{
			id: "standing-walking",
			title: "Standing & Walking Techniques",
			ageGroup: "9-15 months",
			description:
				"Support your child's journey to independent walking. Learn techniques for cruising, standing, and first steps.",
			duration: "12 min",
			youtubeId: "hjF-J-JrJvI",
			thumbnail: "standing-walking",
		},
	];

	selectVideo(video: Video) {
		this.selectedVideo = video;
	}

	closeVideo() {
		this.selectedVideo = null;
	}
}
