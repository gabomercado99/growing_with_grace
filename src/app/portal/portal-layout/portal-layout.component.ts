import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-portal-layout",
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	template: `
		<div class="portal-layout">
			<aside class="portal-sidebar">
				<nav class="portal-nav">
					<ul>
						<li>
							<a
								routerLink="dashboard"
								routerLinkActive="active"
								[routerLinkActiveOptions]="{ exact: true }">
								📊 Dashboard
							</a>
						</li>
						<li>
							<a
								routerLink="milestones"
								routerLinkActive="active">
								📅 Milestone Calendar
							</a>
						</li>
						<li>
							<a
								routerLink="red-flags"
								routerLinkActive="active">
								🚨 Red Flag Screening
							</a>
						</li>
						<li>
							<a
								routerLink="blog"
								routerLinkActive="active">
								📚 Blog & Resources
							</a>
						</li>
						<li>
							<a
								routerLink="qa-board"
								routerLinkActive="active">
								💬 Q&A Board
							</a>
						</li>
						<li>
							<a
								routerLink="videos"
								routerLinkActive="active">
								🎥 Video Interventions
							</a>
						</li>
						<li>
							<a
								routerLink="products"
								routerLinkActive="active">
								🛒 Recommended Products
							</a>
						</li>
					</ul>
				</nav>
			</aside>

			<main class="portal-content">
				<router-outlet></router-outlet>
			</main>
		</div>
	`,
	styleUrls: ["./portal-layout.component.scss"],
})
export class PortalLayoutComponent {}
