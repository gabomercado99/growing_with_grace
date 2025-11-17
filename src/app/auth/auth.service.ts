import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface ChildProfile {
	name: string;
	age: number; // in months
	developmentalStage: string;
}

export interface User {
	username: string;
	childProfile: ChildProfile;
}

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private loggedInSubject = new BehaviorSubject<boolean>(false);
	private userSubject = new BehaviorSubject<User | null>(null);

	isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();
	user$: Observable<User | null> = this.userSubject.asObservable();

	// Test users database
	private testUsers: { [key: string]: User } = {
		test: {
			username: "test",
			childProfile: {
				name: "Emma",
				age: 9, // 9 months
				developmentalStage: "Crawling & Pulling to Standing",
			},
		},
	};

	constructor() {
		this.checkStoredLogin();
	}

	private checkStoredLogin() {
		const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
		const storedUsername = localStorage.getItem("username");

		if (isLoggedIn && storedUsername) {
			const user = this.testUsers[storedUsername];
			if (user) {
				this.loggedInSubject.next(true);
				this.userSubject.next(user);
			}
		}
	}

	login(username: string, password: string): boolean {
		// Mock authentication - check if user exists and password matches username
		if (username === password && this.testUsers[username]) {
			const user = this.testUsers[username];
			localStorage.setItem("isLoggedIn", "true");
			localStorage.setItem("username", username);
			this.loggedInSubject.next(true);
			this.userSubject.next(user);
			return true;
		}
		return false;
	}

	logout() {
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("username");
		this.loggedInSubject.next(false);
		this.userSubject.next(null);
	}

	getUsername(): string | null {
		return localStorage.getItem("username");
	}

	getUser(): User | null {
		return this.userSubject.value;
	}

	isLoggedIn(): boolean {
		return this.loggedInSubject.value;
	}
}
