import { Routes } from "@angular/router";
import { PortalLayoutComponent } from "./portal-layout/portal-layout.component";

export const PORTAL_ROUTES: Routes = [
	{
		path: "",
		component: PortalLayoutComponent,
		children: [
			{
				path: "dashboard",
				loadComponent: () =>
					import("./dashboard/dashboard.component").then(
						(m) => m.DashboardComponent
					),
			},
			{
				path: "milestones",
				loadComponent: () =>
					import("./milestones/milestones.component").then(
						(m) => m.MilestonesComponent
					),
			},
			{
				path: "red-flags",
				loadComponent: () =>
					import("./red-flags/red-flags.component").then(
						(m) => m.RedFlagsComponent
					),
			},
			{
				path: "blog",
				loadComponent: () =>
					import("./blog/blog.component").then((m) => m.BlogComponent),
			},
			{
				path: "qa-board",
				loadComponent: () =>
					import("./qa-board/qa-board.component").then(
						(m) => m.QABoardComponent
					),
			},
			{
				path: "videos",
				loadComponent: () =>
					import("./videos/videos.component").then((m) => m.VideosComponent),
			},
			{
				path: "products",
				loadComponent: () =>
					import("./products/products.component").then(
						(m) => m.ProductsComponent
					),
			},
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
		],
	},
];
