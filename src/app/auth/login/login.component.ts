import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [CommonModule, FormsModule],
	template: `
		<div class="login-container">
			<div class="login-card">
				<div class="login-header">
					<span class="logo">🌸</span>
					<h1>Growing With Grace</h1>
					<p>Family Portal Login</p>
				</div>

				<form
					(ngSubmit)="onLogin()"
					#loginForm="ngForm">
					<div class="form-group">
						<label for="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							[(ngModel)]="username"
							placeholder="Enter your username"
							required />
					</div>

					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							[(ngModel)]="password"
							placeholder="Enter your password"
							required />
					</div>

					<button
						type="submit"
						class="btn btn-primary btn-block">
						Sign In
					</button>

					<div
						*ngIf="errorMessage"
						class="error-message">
						{{ errorMessage }}
					</div>
				</form>

				<div class="login-footer">
					<p>Don't have an account? <a href="#signup">Sign up here</a></p>
				</div>
			</div>
		</div>
	`,
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	username = "";
	password = "";
	errorMessage = "";

	constructor(private authService: AuthService, private router: Router) {}

	onLogin() {
		if (this.authService.login(this.username, this.password)) {
			this.router.navigate(["/portal"]);
		} else {
			this.errorMessage = "Invalid credentials. Please try again.";
		}
	}
}
