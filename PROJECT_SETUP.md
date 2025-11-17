# Growing With Grace - Angular Project Setup Guide

## Project Overview

A modern, fully-responsive Angular 17+ application prototype for a Physical Therapy (PT) subscription portal. The application features:

- **Public-facing website** to promote business and services
- **Subscription-based member portal** with protected routes
- **Educational resources** including milestones, screenings, and videos
- **Community features** for family support and interaction

## Color Scheme & Design

The application uses a calming, professional palette inspired by your provided design:

- **Primary Colors**: Teal (#7dd3c0) and Light Teal (#9dd4d4)
- **Accent Colors**: Orange (#f4a261), Red (#d62828), Green (#52b788)
- **Logo**: Flower emoji (🌸) representing growth and grace

## Key Features Implemented

### 1. **Public Pages**

- **Home**: Hero section, features showcase, call-to-action
- **About**: Mission statement, services overview, subscription model
- **Login**: Secure authentication gateway

### 2. **Member Portal** (Protected)

- **Dashboard**: Personalized welcome, quick stats, recent activity
- **Milestone Calendar**: Age-based developmental milestones (3-24 months)
- **Red Flag Screening**: Early identification tools for concerns
- **Blog & Resources**: Educational articles and research links
- **Q&A Board**: Family community forum with FAQ section
- **Video Interventions**: 6 professional exercise videos with descriptions
- **Products**: Amazon storefront with recommended items

### 3. **Navigation & Layout**

- **Sticky navbar** with responsive design
- **Sidebar portal navigation** for easy access to features
- **Footer** with quick links and company info
- **Mobile-responsive** grid layouts

### 4. **Authentication**

- Mock authentication service using localStorage
- Login/logout functionality
- Protected portal routes
- Demo credentials: username: `test`, password: `test`

## File Structure

```
Growing With Grace/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── auth.service.ts
│   │   │   └── login/
│   │   │       ├── login.component.ts
│   │   │       └── login.component.scss
│   │   ├── public/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   └── home.component.scss
│   │   │   └── about/
│   │   │       ├── about.component.ts
│   │   │       └── about.component.scss
│   │   ├── portal/
│   │   │   ├── portal.routes.ts
│   │   │   ├── portal-layout/
│   │   │   │   ├── portal-layout.component.ts
│   │   │   │   └── portal-layout.component.scss
│   │   │   ├── dashboard/
│   │   │   ├── milestones/
│   │   │   ├── red-flags/
│   │   │   ├── blog/
│   │   │   ├── qa-board/
│   │   │   ├── videos/
│   │   │   └── products/
│   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   └── navbar.component.scss
│   │   │   └── footer/
│   │   │       ├── footer.component.ts
│   │   │       └── footer.component.scss
│   │   ├── app.component.ts
│   │   ├── app.component.scss
│   │   └── app.routes.ts
│   ├── assets/
│   ├── styles.scss
│   ├── main.ts
│   ├── index.html
│   └── favicon.ico
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
├── package.json
└── README.md
```

## Technology Stack

- **Angular**: 17.0.0+ (latest)
- **TypeScript**: 5.2+
- **SCSS**: For component styling
- **RxJS**: 7.8+ for reactive programming
- **Standalone Components**: Modern Angular architecture

## Getting Started

### 1. Install Dependencies

```bash
cd "/Users/gabomm99/Desktop/Growing With Grace"
npm install
```

### 2. Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200`

### 3. Build for Production

```bash
npm run build
```

## Application Routes

### Public Routes

- `/` - Home page
- `/about` - About page
- `/login` - Login page

### Protected Portal Routes

- `/portal/dashboard` - Member dashboard
- `/portal/milestones` - Milestone calendar
- `/portal/red-flags` - Red flag screening
- `/portal/blog` - Blog & resources
- `/portal/qa-board` - Family Q&A board
- `/portal/videos` - Video interventions
- `/portal/products` - Product storefront

## Design Highlights

### Responsive Design

- Mobile-first approach
- Grid and flexbox layouts
- Touch-friendly buttons and navigation

### Color Usage

- **Teal gradient**: Navigation bars, primary buttons, accent elements
- **Orange**: Call-to-action buttons, learn more links
- **Red**: Logout buttons, alerts, red flag indicators
- **Green**: Checkmarks, confirmation states

### Typography

- Clean, readable fonts (Segoe UI)
- Consistent heading hierarchy
- Proper contrast ratios for accessibility

### Interactive Elements

- Hover effects on cards and buttons
- Smooth transitions and animations
- Loading states and visual feedback

## Customization Guide

### Change Colors

Edit `/src/styles.scss`:

```scss
:root {
	--primary-teal: #7dd3c0;
	--secondary-teal: #9dd4d4;
	--accent-orange: #f4a261;
	/* ... etc */
}
```

### Update Company Info

- Edit navbar and footer component templates
- Update page content in component templates
- Modify brand name and taglines

### Add New Features

Each portal section is a lazy-loaded component. To add new features:

1. Create new component in `/portal`
2. Add route to `portal.routes.ts`
3. Add navigation link to `portal-layout.component.ts`

## Next Steps for Production

1. **Backend Integration**: Connect to real authentication API
2. **Database**: Implement persistent data storage
3. **Video Platform**: Integrate video hosting (YouTube, Vimeo)
4. **Payment**: Add subscription payment processing
5. **CMS**: Allow admins to manage blog posts and resources
6. **Email**: Setup email notifications and reminders
7. **Analytics**: Add usage tracking and reporting
8. **SEO**: Implement meta tags and structured data

## Support & Maintenance

- Component-based architecture for easy updates
- Lazy loading for optimal performance
- Modular styling for easy theme changes
- Clear separation of concerns (auth, public, portal)

---

**Project Ready!** 🎉

Your Modern Angular PT Portal is ready to run. Start the development server and begin customizing with your content!
