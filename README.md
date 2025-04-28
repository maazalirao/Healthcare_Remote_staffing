# Clearview Healthcare Staffing Website

A modern, responsive website for a healthcare staffing agency built with Next.js and Tailwind CSS.

## Features

- Modern UI with glassmorphism and animations
- Fully responsive design
- Custom UI components system
- SEO optimized with sitemap generation
- Performance optimized

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Fonts**: Inter and Outfit via Google Fonts
- **Deployment**: Vercel

## Development

First, clone the repository:

```bash
git clone https://your-repo-url/clearview-staffing.git
cd clearview-staffing
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

Build the application for production:

```bash
npm run build
```

This will also generate a sitemap automatically.

## Deploying to Vercel

This project is optimized for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com/import)
3. Vercel will detect Next.js automatically and use the optimal settings
4. Your site will be deployed and you'll get a URL to access it

### Environment Variables

Copy `env.example` to `.env.local` for local development or add the environment variables in the Vercel dashboard for production deployment.

- `SITE_URL`: Your production URL (for sitemap generation)

## Project Structure

- `components/` - All React components
  - `ui/` - Reusable UI components (Button, Card, Badge, etc.)
  - `home/` - Page-specific components for the home page
- `pages/` - Next.js pages
- `public/` - Static assets
  - `images/` - Image files
- `styles/` - Global styles and animations

## License

[MIT](https://choosealicense.com/licenses/mit/)
