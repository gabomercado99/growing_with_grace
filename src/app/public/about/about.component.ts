import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="about">
			<div class="container">
				<section class="about-hero">
					<h1>About Growing With Grace</h1>
					<p>
						Empowering families with professional physical therapy guidance and
						resources
					</p>
				</section>

				<section class="about-content">
					<div class="about-section">
						<h2>Our Mission</h2>
						<p>
							Growing With Grace is dedicated to providing accessible,
							professional physical therapy support for families. Through our
							comprehensive online portal, we offer educational resources,
							screening tools, and community support to help families support
							their children's developmental journey.
						</p>
					</div>

					<div class="about-section">
						<h2>What We Offer</h2>
						<ul class="service-list">
							<li>
								<strong>Milestone Calendar:</strong> Track developmental
								milestones and identify concerns early
							</li>
							<li>
								<strong>Red Flag Screening:</strong> Evidence-based screening
								tools for common concerns
							</li>
							<li>
								<strong>Educational Content:</strong> Blog posts and research
								articles on positioning and development
							</li>
							<li>
								<strong>Family Community:</strong> Connect with other families
								and share experiences
							</li>
							<li>
								<strong>Video Interventions:</strong> Home-based therapy
								exercises demonstrated by professionals
							</li>
							<li>
								<strong>Recommended Products:</strong> Carefully selected items
								for child development
							</li>
						</ul>
					</div>

					<div class="about-section">
						<h2>Our Subscription Model</h2>
						<p>
							Our subscription provides families with a secure login portal to
							access all premium content. Subscriptions automatically renew,
							ensuring continuous access to the latest resources and community
							support. Part of our website remains publicly accessible to
							promote our services and mission.
						</p>
					</div>
				</section>
			</div>
		</div>
	`,
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent {}
