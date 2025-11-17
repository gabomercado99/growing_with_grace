import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-red-flags",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="red-flags">
			<h1>Red Flag Screening</h1>
			<p class="description">
				Early identification helps ensure your child gets the support they need
			</p>

			<div class="screening-cards">
				<div class="screening-card">
					<h3>🚨 Motor Development</h3>
					<ul>
						<li>Not rolling over by 6 months</li>
						<li>Not sitting independently by 9 months</li>
						<li>Not walking by 18 months</li>
						<li>Weak muscle tone or stiffness</li>
						<li>Asymmetrical movements</li>
					</ul>
					<button class="btn btn-learn">Learn More</button>
				</div>

				<div class="screening-card">
					<h3>🎯 Fine Motor Skills</h3>
					<ul>
						<li>Not reaching for objects by 5 months</li>
						<li>Not grasping objects by 6 months</li>
						<li>Persistent fisting after 4 months</li>
						<li>Favoring one side exclusively</li>
						<li>Difficulty with self-feeding</li>
					</ul>
					<button class="btn btn-learn">Learn More</button>
				</div>

				<div class="screening-card">
					<h3>🗣️ Communication</h3>
					<ul>
						<li>No babbling by 6 months</li>
						<li>Not responding to name by 9 months</li>
						<li>Limited eye contact</li>
						<li>Not understanding simple commands</li>
						<li>No first words by 15 months</li>
					</ul>
					<button class="btn btn-learn">Learn More</button>
				</div>

				<div class="screening-card">
					<h3>👥 Social & Behavioral</h3>
					<ul>
						<li>Limited social interaction</li>
						<li>Difficulty with transitions</li>
						<li>Repetitive movements</li>
						<li>Extreme sensitivity to sensations</li>
						<li>Difficulty making eye contact</li>
					</ul>
					<button class="btn btn-learn">Learn More</button>
				</div>
			</div>

			<div class="action-box">
				<h3>📞 Next Steps</h3>
				<p>
					If you've noticed any red flags, contact your pediatrician or request
					an evaluation from a speech-language pathologist or occupational
					therapist.
				</p>
			</div>
		</div>
	`,
	styleUrls: ["./red-flags.component.scss"],
})
export class RedFlagsComponent {}
