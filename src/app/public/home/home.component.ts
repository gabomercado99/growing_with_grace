import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<div class="home">
			<!-- HERO SECTION -->
			<section class="hero">
				<div class="container">
					<div class="hero-content">
						<h1>Growing With Grace</h1>
						<p class="tagline">Professional Physical Therapy Support for Your Child</p>
						<button class="btn btn-primary btn-lg" routerLink="/login">Get Started</button>
					</div>
					<div class="hero-image">🌸🌼🌻</div>
				</div>
			</section>

			<!-- FEATURES WITH PREVIEWS -->
			<section class="features">
				<div class="container">
					<h2>Our Services</h2>
					
					<!-- MILESTONE PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">📅</span>
							<div>
								<h3>Milestone Calendar</h3>
								<p>Track your child's developmental milestones and know when to be concerned.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Developmental Stages:</h4>
								<div class="milestone-preview">
									<div class="milestone-item">
										<strong>3 Months:</strong> Lifts head, follows objects, smiles socially
									</div>
									<div class="milestone-item">
										<strong>6 Months:</strong> Rolls over, sits with support, reaches for toys
									</div>
									<div class="milestone-item">
										<strong>9 Months:</strong> Sits independently, crawls, pulls to standing
									</div>
									<div class="milestone-item">
										<strong>12+ Months:</strong> Stands with support, walks, waves bye-bye
									</div>
								</div>
								<button class="btn btn-small" routerLink="/login">View Full Calendar</button>
							</div>
						</div>
					</div>

					<!-- RED FLAG PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">🚨</span>
							<div>
								<h3>Red Flag Screening</h3>
								<p>Early identification tools to help you recognize when professional support might be needed.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Screening Categories:</h4>
								<div class="flag-preview">
									<div class="flag-item">🚨 <strong>Motor Development</strong> - Movement & strength concerns</div>
									<div class="flag-item">🎯 <strong>Fine Motor Skills</strong> - Hand and finger coordination</div>
									<div class="flag-item">🗣️ <strong>Communication</strong> - Speech and hearing development</div>
									<div class="flag-item">👥 <strong>Social & Behavioral</strong> - Social interaction & behavior</div>
								</div>
								<button class="btn btn-small" routerLink="/login">Take Screening</button>
							</div>
						</div>
					</div>

					<!-- BLOG PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">📚</span>
							<div>
								<h3>Educational Blog</h3>
								<p>Expert articles on positioning, development, and supporting your child's growth.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Featured Articles:</h4>
								<div class="article-preview">
									<div class="article-item">
										<strong>"The Importance of Tummy Time"</strong><br>
										<small>Learn why tummy time is crucial and how to make it enjoyable</small>
									</div>
									<div class="article-item">
										<strong>"Positions to Avoid During Development"</strong><br>
										<small>Safety tips for daily activities and proper positioning</small>
									</div>
									<div class="article-item">
										<strong>"Understanding Gross Motor Milestones"</strong><br>
										<small>A guide to major movements and how to support them</small>
									</div>
								</div>
								<button class="btn btn-small" routerLink="/login">Read All Articles</button>
							</div>
						</div>
					</div>

					<!-- Q&A PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">💬</span>
							<div>
								<h3>Family Q&A Board</h3>
								<p>Connect with other families and get answers to your developmental questions.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Featured Questions:</h4>
								<div class="qa-preview">
									<div class="qa-item">
										<div class="question">❓ When should my child start physical therapy?</div>
										<div class="answer">Early intervention is recommended for any developmental delays...</div>
									</div>
									<div class="qa-item">
										<div class="question">❓ How often should we do home exercises?</div>
										<div class="answer">Most therapists recommend 3-5 times per week for best results...</div>
									</div>
								</div>
								<button class="btn btn-small" routerLink="/login">Join Community</button>
							</div>
						</div>
					</div>

					<!-- VIDEO INTERVENTIONS PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">🎥</span>
							<div>
								<h3>Video Interventions</h3>
								<p>Professional-guided exercises you can do at home with your child.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Video Collections:</h4>
								<div class="video-preview">
									<div class="video-item">🎥 Neck Strengthening (Ages 2-4mo)</div>
									<div class="video-item">🎥 Tummy Time Activities (Ages 1-6mo)</div>
									<div class="video-item">🎥 Rolling Practice (Ages 4-8mo)</div>
									<div class="video-item">🎥 Sitting Support (Ages 5-9mo)</div>
								</div>
								<button class="btn btn-small" routerLink="/login">Watch Videos</button>
							</div>
						</div>
					</div>

					<!-- AMAZON STOREFRONT PREVIEW -->
					<div class="feature-section">
						<div class="feature-header">
							<span class="icon">🛒</span>
							<div>
								<h3>Amazon Storefront</h3>
								<p>Recommended toys and products specially selected for developmental support.</p>
							</div>
						</div>
						<div class="feature-preview">
							<div class="preview-content">
								<h4>Featured Products:</h4>
								<div class="product-preview">
									<div class="product-item">🧸 Developmental Toy Set - Multi-sensory play</div>
									<div class="product-item">🏃 Balance Board - Build coordination</div>
									<div class="product-item">🎨 Fine Motor Activity Set - Hand development</div>
									<div class="product-item">🧘 Foam Play Mat - Safe floor play</div>
								</div>
								<button class="btn btn-small" routerLink="/login">Shop Now</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- CTA SECTION -->
			<section class="cta">
				<div class="container">
					<h2>Join Our Community</h2>
					<p>Start your subscription today and get access to all our resources</p>
					<button class="btn btn-secondary btn-lg" routerLink="/login">Subscribe Now</button>
				</div>
			</section>
		</div>
	`,
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
