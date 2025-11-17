import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Milestone {
	month: string;
	range: string;
	motorSkills: string[];
	fineMotor: string[];
	cognitive: string[];
	socialEmotional: string[];
}

@Component({
	selector: "app-milestones",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="milestones">
			<h1>Developmental Milestone Calendar</h1>
			<p class="description">
				Track your child's developmental progress month by month. Each milestone is
				a guide—all children develop at their own pace!
			</p>

			<div class="milestone-filter">
				<button
					*ngFor="let range of ageRanges"
					[class.active]="selectedRange === range"
					(click)="selectedRange = range">
					{{ range }}
				</button>
			</div>

			<div class="milestones-detailed">
				<div
					*ngFor="let milestone of filteredMilestones"
					class="milestone-card-detailed">
					<div class="card-header">
						<h3>{{ milestone.month }}</h3>
						<span class="range-badge">{{ milestone.range }}</span>
					</div>

					<div class="card-content">
						<div class="skill-category">
							<h4>🏃 Gross Motor Skills</h4>
							<ul>
								<li *ngFor="let skill of milestone.motorSkills">{{ skill }}</li>
							</ul>
						</div>

						<div class="skill-category">
							<h4>✋ Fine Motor Skills</h4>
							<ul>
								<li *ngFor="let skill of milestone.fineMotor">{{ skill }}</li>
							</ul>
						</div>

						<div class="skill-category">
							<h4>🧠 Cognitive Skills</h4>
							<ul>
								<li *ngFor="let skill of milestone.cognitive">{{ skill }}</li>
							</ul>
						</div>

						<div class="skill-category">
							<h4>❤️ Social & Emotional</h4>
							<ul>
								<li *ngFor="let skill of milestone.socialEmotional">
									{{ skill }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="concern-box">
				<h3>⚠️ When to Consult a Professional</h3>
				<p>
					Every child develops at their own pace. However, if you notice
					significant delays across multiple areas, consult with your pediatrician
					or physical therapist. Early intervention services can help support your
					child's development.
				</p>
			</div>
		</div>
	`,
	styleUrls: ["./milestones.component.scss"],
})
export class MilestonesComponent {
	selectedRange = "0-3 Months";
	ageRanges = [
		"0-3 Months",
		"3-6 Months",
		"6-9 Months",
		"9-12 Months",
		"12-15 Months",
		"15-18 Months",
		"18-21 Months",
		"21-24 Months",
	];

	milestones: Milestone[] = [
		{
			month: "0-3 Months",
			range: "Birth to 3 Months",
			motorSkills: [
				"Lifts head briefly when on belly (by 1-2 months)",
				"Makes jerky, uncontrolled movements",
				"Moves arms and legs when excited",
				"Holds head at 45-degree angle (by 2 months)",
				"Kicks legs when lying down",
			],
			fineMotor: [
				"Hands mostly closed in fists",
				"Follows moving objects with eyes",
				"Begins to focus on faces",
				"Starts to track objects side to side",
			],
			cognitive: [
				"Responds to sounds and voices",
				"Shows interest in high-contrast patterns",
				"Begins to coo and make sounds",
				"Starts developing object recognition",
			],
			socialEmotional: [
				"Smiles socially (by 2-3 months)",
				"Recognizes parent's voice and face",
				"Starts to calm down when held",
				"Makes eye contact for short periods",
			],
		},
		{
			month: "3-6 Months",
			range: "3 to 6 Months",
			motorSkills: [
				"Holds head steady without support",
				"Rolls from back to side (by 4 months)",
				"Brings hands to mouth",
				"Transfers objects from hand to hand",
				"Starts to bear weight on legs when held",
			],
			fineMotor: [
				"Reaches for objects with both hands",
				"Grasps objects with whole hand (raking grasp)",
				"Brings toys to mouth",
				"Shakes rattles and toys",
			],
			cognitive: [
				"Recognizes familiar people and objects",
				"Shows interest in cause and effect",
				"Babbles and makes varied sounds",
				"Looks for partially hidden objects",
			],
			socialEmotional: [
				"Laughs out loud",
				"Shows preference for familiar people",
				"Becomes upset if toy is taken away",
				"Enjoys social interaction and play",
			],
		},
		{
			month: "6-9 Months",
			range: "6 to 9 Months",
			motorSkills: [
				"Sits with minimal support (by 6-7 months)",
				"Rolls both directions easily",
				"Starts to crawl or scoot (by 8-9 months)",
				"Pulls self up using furniture",
				"May cruise along furniture",
			],
			fineMotor: [
				"Uses pincer grasp (thumb and fingers)",
				"Picks up small objects with ease",
				"Transfers objects between hands",
				"Bangs objects together",
				"Releases objects intentionally",
			],
			cognitive: [
				"Understands 'no' and shakes head",
				"Looks for objects that are hidden",
				"Repeats actions to get attention",
				"Plays peek-a-boo",
			],
			socialEmotional: [
				"Shows separation anxiety",
				"Waves goodbye",
				"Shows fear of strangers",
				"Enjoys interactive games",
			],
		},
		{
			month: "9-12 Months",
			range: "9 to 12 Months",
			motorSkills: [
				"Sits independently",
				"Crawls forward on belly (by 10 months)",
				"Pulls to standing using furniture",
				"Cruises along furniture",
				"Takes first steps (by 12 months, though can be later)",
			],
			fineMotor: [
				"Uses refined pincer grasp",
				"Points with index finger",
				"Throws objects intentionally",
				"Claps hands",
				"Attempts to feed self with utensil",
			],
			cognitive: [
				"Understands simple words: 'mama,' 'dada,' 'bye-bye'",
				"Follows simple one-step directions",
				"Shows interest in pictures in books",
				"Searches for hidden objects",
			],
			socialEmotional: [
				"Says first words",
				"Shows affection to familiar people",
				"May have strong fears (vacuum, etc.)",
				"Enjoys games with other children",
			],
		},
		{
			month: "12-15 Months",
			range: "12 to 15 Months",
			motorSkills: [
				"Walks independently (may be wobbly)",
				"Climbs stairs with support",
				"Squats and stands",
				"Throws a ball (not far)",
				"Pulls toys while walking",
			],
			fineMotor: [
				"Scribbles with crayons",
				"Stacks 2-3 blocks",
				"Puts objects into containers",
				"Points to pictures",
				"Feeds self with fingers",
			],
			cognitive: [
				"Identifies body parts when asked",
				"Understands 10-50 words",
				"Points to familiar objects",
				"Shows interest in animal sounds",
			],
			socialEmotional: [
				"Says 4-10 words",
				"Shows preference for certain people",
				"Begins pretend play",
				"Enjoys music and dancing",
			],
		},
		{
			month: "15-18 Months",
			range: "15 to 18 Months",
			motorSkills: [
				"Walks and rarely falls",
				"Climbs stairs with support",
				"Runs stiffly",
				"Kicks a ball forward",
				"Jumps with both feet",
			],
			fineMotor: [
				"Stacks 3-4 blocks",
				"Scribbles in imitation",
				"Turns pages in a book",
				"Uses utensil with some spilling",
				"Builds simple tower",
			],
			cognitive: [
				"Knows 10-50 words",
				"Points to pictures when named",
				"Enjoys simple picture books",
				"Shows understanding of 'me' and 'mine'",
			],
			socialEmotional: [
				"Speaks 10-50 words",
				"Shows affection",
				"Enjoys simple games",
				"May show jealousy or possessiveness",
			],
		},
		{
			month: "18-21 Months",
			range: "18 to 21 Months",
			motorSkills: [
				"Runs with more control",
				"Walks backward",
				"Climbs stairs holding rail",
				"Throws and kicks with better control",
				"Dances to music",
			],
			fineMotor: [
				"Stacks 4-6 blocks",
				"Scribbles more purposefully",
				"Uses spoon and fork (with help)",
				"Drinks from cup independently",
				"Begins to show hand preference",
			],
			cognitive: [
				"Vocabulary of 50-100 words",
				"Follows 2-step instructions",
				"Identifies familiar objects",
				"Shows interest in categorizing items",
			],
			socialEmotional: [
				"Uses 50+ words",
				"Names familiar people",
				"Shows empathy and concern",
				"Plays alongside other children",
			],
		},
		{
			month: "21-24 Months",
			range: "21 to 24 Months",
			motorSkills: [
				"Runs smoothly",
				"Climbs stairs alone",
				"Walks up and down stairs",
				"Jumps with both feet",
				"Rides on toy (pushing with feet)",
			],
			fineMotor: [
				"Builds tower of 6-8 blocks",
				"Copies circles and lines",
				"Turns 2-3 pages at a time",
				"Uses utensil with increasing control",
				"Holds pencil with thumb and fingers",
			],
			cognitive: [
				"Vocabulary of 200+ words",
				"Understands 'in' and 'on'",
				"Follows 2-3 step instructions",
				"Shows interest in colors and shapes",
			],
			socialEmotional: [
				"Speaks in 2-3 word sentences",
				"Engages in imaginative play",
				"Shows independence and may resist help",
				"Plays near (but not always with) other children",
			],
		},
	];

	get filteredMilestones(): Milestone[] {
		return this.milestones.filter((m) =>
			m.range.toLowerCase().includes(this.selectedRange.toLowerCase())
		);
	}
}
