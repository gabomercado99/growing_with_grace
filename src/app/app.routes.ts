import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./public/home/home.component").then((m) => m.HomeComponent),
	},
	{
		path: "about",
		loadComponent: () =>
			import("./public/about/about.component").then((m) => m.AboutComponent),
	},
	{
		path: "login",
		loadComponent: () =>
			import("./auth/login/login.component").then((m) => m.LoginComponent),
	},
	{
		path: "portal",
		loadChildren: () =>
			import("./portal/portal.routes").then((m) => m.PORTAL_ROUTES),
	},
	{
		path: "**",
		redirectTo: "",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
