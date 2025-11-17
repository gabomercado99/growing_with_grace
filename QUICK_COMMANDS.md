# Quick Commands Reference

## Installation & Running

```bash
# Navigate to project
cd "/Users/gabomm99/Desktop/Growing With Grace"

# Install dependencies (run once)
npm install

# Start development server
npm start

# Build for production
npm run build

# Watch for changes (development)
npm run watch

# Run tests
npm test
```

## Development URLs

```
Main Application:     http://localhost:4200
Home Page:           http://localhost:4200
About Page:          http://localhost:4200/about
Login Page:          http://localhost:4200/login
Portal Dashboard:    http://localhost:4200/portal (requires login)
```

## Project Structure Commands

```bash
# List all files
find . -type f -name "*.ts" -o -name "*.scss" -o -name "*.html"

# View project tree
tree src/

# Check file sizes
du -sh src/
```

## Testing Credentials

```
Username: test
Password: test
(Any non-empty values work with mock auth)
```

## Component Locations

| Feature    | File                                                |
| ---------- | --------------------------------------------------- |
| Navbar     | `src/app/shared/navbar/navbar.component.ts`         |
| Footer     | `src/app/shared/footer/footer.component.ts`         |
| Home Page  | `src/app/public/home/home.component.ts`             |
| About Page | `src/app/public/about/about.component.ts`           |
| Login      | `src/app/auth/login/login.component.ts`             |
| Dashboard  | `src/app/portal/dashboard/dashboard.component.ts`   |
| Milestones | `src/app/portal/milestones/milestones.component.ts` |
| Red Flags  | `src/app/portal/red-flags/red-flags.component.ts`   |
| Blog       | `src/app/portal/blog/blog.component.ts`             |
| Q&A Board  | `src/app/portal/qa-board/qa-board.component.ts`     |
| Videos     | `src/app/portal/videos/videos.component.ts`         |
| Products   | `src/app/portal/products/products.component.ts`     |

## Port Configuration

To run on a different port:

```bash
ng serve --port 3000
```

## Clear Cache

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Environment Setup (Optional)

Create `src/environments/environment.ts`:

```typescript
export const environment = {
	production: false,
	apiUrl: "http://localhost:3000/api",
};
```

Create `src/environments/environment.prod.ts`:

```typescript
export const environment = {
	production: true,
	apiUrl: "https://api.growingwithgrace.com",
};
```

## VS Code Useful Extensions

```
Angular Essentials (Version 16) - johnpapa.angular-essentials
Angular Language Service - Angular.ng-template
SCSS IntelliSense - mrmlnc.vscode-scss
Prettier - Code formatter - esbenp.prettier-vscode
GitLens - eamodio.gitlens
```

## Debugging

**Browser DevTools**

- F12 to open developer tools
- Angular DevTools extension recommended
- Check Console for TypeScript errors
- Check Network tab for API calls

**VS Code Debugging**

- Add breakpoints (click line number)
- Run `npm start` in debug mode
- Open http://localhost:4200

## Production Build

```bash
# Build for production (optimized & minified)
npm run build

# Output: dist/growing-with-grace/

# View build size
du -sh dist/
```

## Common Issues & Solutions

| Issue             | Solution                  |
| ----------------- | ------------------------- |
| Port 4200 in use  | `ng serve --port 4201`    |
| Module not found  | `npm install`             |
| Cache issues      | `npm cache clean --force` |
| TypeScript errors | Check `tsconfig.json`     |

## Project Statistics

- **Components**: 12+
- **Services**: 1 (AuthService)
- **Routes**: 10+
- **Styles**: 12+ SCSS files
- **Lines of Code**: ~3000+
- **Features**: 7 portal modules + public pages

## File Sizes (Approximate)

```
package.json           ~1 KB
angular.json          ~5 KB
tsconfig.json         ~1 KB
Component TS files    ~2 KB each
Component SCSS files  ~1 KB each
Total Source Code     ~50+ KB
```

## Next Steps After Setup

1. ✅ Run `npm install`
2. ✅ Run `npm start`
3. ✅ Open http://localhost:4200
4. ✅ Try the demo login (test/test)
5. ✅ Explore all portal features
6. ✅ Review code in VS Code
7. ✅ Customize colors in `src/styles.scss`
8. ✅ Add your content to components

---

**Ready to go!** 🚀
