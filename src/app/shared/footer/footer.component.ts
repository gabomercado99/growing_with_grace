import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule],
	template: `
		<footer class="footer">
			<div class="container">
				<div class="footer-content">
					<div class="footer-section">
						<h4>Growing With Grace</h4>
						<p>
							Supporting families through personalized physical therapy care.
						</p>
					</div>
					<div class="footer-section">
						<h4>Quick Links</h4>
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About Us</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
					<div class="footer-section">
						<h4>Services</h4>
						<ul>
							<li><a href="#milestones">Milestones</a></li>
							<li><a href="#blog">Blog</a></li>
							<li><a href="#videos">Video Interventions</a></li>
						</ul>
					</div>
				</div>
				<div class="footer-bottom">
					<p>&copy; 2025 Growing With Grace. All rights reserved.</p>
				</div>
			</div>
		</footer>
	`,
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {}
