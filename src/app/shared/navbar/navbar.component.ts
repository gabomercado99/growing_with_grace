import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { LogoComponent } from "../logo/logo.component";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
	template: `
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<app-logo></app-logo>
					<span class="brand-name">Growing With Grace</span>
				</div>

				<ul class="nav-links">
					<li>
						<a
							routerLink="/"
							routerLinkActive="active"
							[routerLinkActiveOptions]="{ exact: true }"
							>Home</a
						>
					</li>
					<li>
						<a
							routerLink="/about"
							routerLinkActive="active"
							>About</a
						>
					</li>
					<li
						*ngIf="!isLoggedIn"
						class="auth-links">
						<a
							routerLink="/login"
							class="btn btn-primary"
							>Sign In</a
						>
					</li>
					<li
						*ngIf="isLoggedIn"
						class="auth-links">
						<a
							routerLink="/portal"
							class="btn btn-success"
							>Portal</a
						>
						<button
							(click)="logout()"
							class="btn btn-secondary">
							Logout
						</button>
					</li>
				</ul>
			</div>
		</nav>
	`,
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
	isLoggedIn = false;

	constructor(private authService: AuthService) {
		this.authService.isLoggedIn$.subscribe((status: boolean) => {
			this.isLoggedIn = status;
		});
	}

	logout() {
		this.authService.logout();
	}
}
