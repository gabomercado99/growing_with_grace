import { Component } from "@angular/core";

@Component({
	selector: "app-logo",
	standalone: true,
	template: `
		<svg
			class="logo-svg"
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg">
			<!-- Grass -->
			<path
				d="M 20 140 Q 30 130 40 135 Q 50 130 60 138 Q 70 132 80 140 Q 90 135 100 140 Q 110 135 120 140 Q 130 132 140 138 Q 150 130 160 135 Q 170 130 180 140 L 180 180 L 20 180 Z"
				fill="#52b788"
				opacity="0.9" />
			<path
				d="M 15 160 Q 25 155 35 160 Q 45 155 55 162 Q 65 157 75 160 Q 85 155 95 160 Q 105 155 115 160 Q 125 157 135 162 Q 145 155 155 160 Q 165 155 175 160 L 175 180 L 15 180 Z"
				fill="#7dd3c0"
				opacity="0.6" />

			<!-- Left Pink Flower -->
			<g transform="translate(45, 90)">
				<!-- Petals -->
				<circle
					cx="0"
					cy="-20"
					r="12"
					fill="#ff69b4"
					opacity="0.9" />
				<circle
					cx="18"
					cy="-10"
					r="12"
					fill="#ff1493"
					opacity="0.9" />
				<circle
					cx="18"
					cy="10"
					r="12"
					fill="#ff69b4"
					opacity="0.9" />
				<circle
					cx="0"
					cy="20"
					r="12"
					fill="#ff1493"
					opacity="0.9" />
				<circle
					cx="-18"
					cy="10"
					r="12"
					fill="#ff69b4"
					opacity="0.9" />
				<circle
					cx="-18"
					cy="-10"
					r="12"
					fill="#ff1493"
					opacity="0.9" />
				<!-- Center -->
				<circle
					cx="0"
					cy="0"
					r="8"
					fill="#ffd700" />
				<!-- Stem -->
				<line
					x1="0"
					y1="25"
					x2="0"
					y2="50"
					stroke="#52b788"
					stroke-width="3" />
				<!-- Leaves -->
				<ellipse
					cx="-8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(-30 -8 35)" />
				<ellipse
					cx="8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(30 8 35)" />
			</g>

			<!-- Center Yellow Flower -->
			<g transform="translate(100, 70)">
				<!-- Petals -->
				<circle
					cx="0"
					cy="-22"
					r="13"
					fill="#ffd700"
					opacity="0.95" />
				<circle
					cx="20"
					cy="-11"
					r="13"
					fill="#ffed4e"
					opacity="0.95" />
				<circle
					cx="20"
					cy="11"
					r="13"
					fill="#ffd700"
					opacity="0.95" />
				<circle
					cx="0"
					cy="22"
					r="13"
					fill="#ffed4e"
					opacity="0.95" />
				<circle
					cx="-20"
					cy="11"
					r="13"
					fill="#ffd700"
					opacity="0.95" />
				<circle
					cx="-20"
					cy="-11"
					r="13"
					fill="#ffed4e"
					opacity="0.95" />
				<!-- Center -->
				<circle
					cx="0"
					cy="0"
					r="9"
					fill="#ff8c00" />
				<!-- Stem -->
				<line
					x1="0"
					y1="28"
					x2="0"
					y2="55"
					stroke="#52b788"
					stroke-width="3" />
				<!-- Leaves -->
				<ellipse
					cx="-9"
					cy="40"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(-30 -9 40)" />
				<ellipse
					cx="9"
					cy="40"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(30 9 40)" />
			</g>

			<!-- Left Blue Flowers -->
			<g transform="translate(70, 85)">
				<!-- Petals -->
				<circle
					cx="0"
					cy="-18"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="16"
					cy="-9"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<circle
					cx="16"
					cy="9"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="0"
					cy="18"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<circle
					cx="-16"
					cy="9"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="-16"
					cy="-9"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<!-- Center -->
				<circle
					cx="0"
					cy="0"
					r="7"
					fill="#ff6b6b" />
				<!-- Stem -->
				<line
					x1="0"
					y1="23"
					x2="0"
					y2="50"
					stroke="#52b788"
					stroke-width="3" />
				<!-- Leaves -->
				<ellipse
					cx="-8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(-30 -8 35)" />
				<ellipse
					cx="8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(30 8 35)" />
			</g>

			<!-- Right Blue Flowers -->
			<g transform="translate(130, 85)">
				<!-- Petals -->
				<circle
					cx="0"
					cy="-18"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="16"
					cy="-9"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<circle
					cx="16"
					cy="9"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="0"
					cy="18"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<circle
					cx="-16"
					cy="9"
					r="10"
					fill="#00bfff"
					opacity="0.9" />
				<circle
					cx="-16"
					cy="-9"
					r="10"
					fill="#1e90ff"
					opacity="0.9" />
				<!-- Center -->
				<circle
					cx="0"
					cy="0"
					r="7"
					fill="#ff6b6b" />
				<!-- Stem -->
				<line
					x1="0"
					y1="23"
					x2="0"
					y2="50"
					stroke="#52b788"
					stroke-width="3" />
				<!-- Leaves -->
				<ellipse
					cx="-8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(-30 -8 35)" />
				<ellipse
					cx="8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(30 8 35)" />
			</g>

			<!-- Right Red Flower -->
			<g transform="translate(155, 95)">
				<!-- Petals -->
				<circle
					cx="0"
					cy="-20"
					r="12"
					fill="#ff4500"
					opacity="0.95" />
				<circle
					cx="18"
					cy="-10"
					r="12"
					fill="#ff0000"
					opacity="0.95" />
				<circle
					cx="18"
					cy="10"
					r="12"
					fill="#ff4500"
					opacity="0.95" />
				<circle
					cx="0"
					cy="20"
					r="12"
					fill="#ff0000"
					opacity="0.95" />
				<circle
					cx="-18"
					cy="10"
					r="12"
					fill="#ff4500"
					opacity="0.95" />
				<circle
					cx="-18"
					cy="-10"
					r="12"
					fill="#ff0000"
					opacity="0.95" />
				<!-- Center -->
				<circle
					cx="0"
					cy="0"
					r="8"
					fill="#ffd700" />
				<!-- Stem -->
				<line
					x1="0"
					y1="25"
					x2="0"
					y2="50"
					stroke="#52b788"
					stroke-width="3" />
				<!-- Leaves -->
				<ellipse
					cx="-8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(-30 -8 35)" />
				<ellipse
					cx="8"
					cy="35"
					rx="4"
					ry="12"
					fill="#52b788"
					transform="rotate(30 8 35)" />
			</g>
		</svg>
	`,
	styles: [
		`
			.logo-svg {
				width: 50px;
				height: 50px;
				filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
				transition: transform 0.3s ease;
			}

			.logo-svg:hover {
				transform: scale(1.1);
			}
		`,
	],
})
export class LogoComponent {}
