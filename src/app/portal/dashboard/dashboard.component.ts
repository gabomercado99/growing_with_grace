import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService, User } from "../../auth/auth.service";

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="dashboard">
			<h1>Welcome, {{ user?.childProfile?.name }}!</h1>
			<p class="subtitle">
				Age: {{ user?.childProfile?.age }} months |
				Stage: {{ user?.childProfile?.developmentalStage }}
			</p>

			<div class="stats-grid">
				<div class="stat-card">
					<span class="stat-icon">📅</span>
					<h3>Milestones</h3>
					<p class="stat-value">Monitor developmental progress</p>
				</div>
				<div class="stat-card">
					<span class="stat-icon">🚨</span>
					<h3>Screenings</h3>
					<p class="stat-value">Red flag assessments</p>
				</div>
				<div class="stat-card">
					<span class="stat-icon">📚</span>
					<h3>Resources</h3>
					<p class="stat-value">Blog posts & research</p>
				</div>
				<div class="stat-card">
					<span class="stat-icon">💬</span>
					<h3>Community</h3>
					<p class="stat-value">Connect with families</p>
				</div>
			</div>

			<section class="quick-access">
				<h2>Quick Access</h2>
				<div class="card-row">
					<div class="info-card">
						<h4>Next Milestones</h4>
						<p>
							For a {{ user?.childProfile?.age }} month old,
							{{ user?.childProfile?.name }} should be working on:
							{{ getNextMilestones() }}
						</p>
					</div>
					<div class="info-card">
						<h4>Resources for This Age</h4>
						<p>
							Check out our videos and articles tailored for
							{{ user?.childProfile?.developmentalStage }} stage.
						</p>
					</div>
				</div>
			</section>
		</div>
	`,
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	user: User | null = null;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.user = this.authService.getUser();
		this.authService.user$.subscribe((user: User | null) => {
			this.user = user;
		});
	}

	getNextMilestones(): string {
		const age = this.user?.childProfile.age || 0;
		if (age < 3) return "lifting head and tracking objects";
		if (age < 6) return "rolling over and grasping toys";
		if (age < 9) return "sitting independently";
		if (age < 12) return "standing with support";
		if (age < 18) return "walking independently";
		return "running and jumping";
	}
}
