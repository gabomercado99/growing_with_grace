# Growing With Grace - Angular PT Portal

A modern, responsive Angular application prototype for a pediatric physical therapy subscription portal.

## Features

### Public Pages

- **Home**: Landing page showcasing all services
- **About**: Information about the mission and offerings
- **Login**: Secure family portal login

### Subscription Portal (Member-Only)

- **Dashboard**: Personalized welcome and quick access to resources
- **Milestone Calendar**: Track developmental milestones by age
- **Red Flag Screening**: Early identification of potential concerns
- **Blog & Resources**: Educational content and research articles
- **Family Q&A Board**: Community support and FAQ section
- **Video Interventions**: Professional-guided home exercises
- **Recommended Products**: Amazon storefront integration

## Design

- **Color Scheme**: Teal/turquoise primary colors (#7dd3c0, #9dd4d4) with accent orange (#f4a261) and red (#d62828)
- **Logo**: Flower design (🌸)
- **Modern & Accessible**: Clean UI with intuitive navigation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Navigate to `http://localhost:4200/`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── auth/                 # Authentication service and login
│   ├── public/               # Public pages (Home, About)
│   ├── portal/               # Member portal features
│   ├── shared/               # Navbar, Footer components
│   ├── app.component.ts      # Root component
│   └── app.routes.ts         # Application routing
├── assets/                   # Images and static files
├── styles.scss              # Global styles
└── main.ts                  # Application bootstrap
```

## Testing

Demo Login Credentials:

- **Username**: test
- **Password**: test

## Features Implemented

✅ Responsive design
✅ Standalone components (Angular 17+)
✅ Lazy loading for portal routes
✅ SCSS styling with modern design
✅ Authentication service
✅ Local storage persistence
✅ Accessible navigation
✅ Mobile-friendly layout

## Future Enhancements

- Backend API integration
- Video player implementation
- File upload for Q&A board
- Email notifications
- User profile management
- Payment processing for subscriptions
- Analytics dashboard

## License

© 2025 Growing With Grace. All rights reserved.
