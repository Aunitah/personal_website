
# Personal Website

Simple web app that renders minimailist personal website

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics
- **Content:** MDX for blog posts

## Features

- Minimalist design
- Auto-generated layout
- Responsive to different devices
- Blog with MDX support
- Project showcase
- Dynamic GitHub repository integration
- Fast page loads
- Analytics tracking

## Local Development

```bash
# Clone repository
git clone https://github.com/ethanmclark1/personal_website.git

# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build
```

## Project Structure

```
src/
├── app/             # Next.js app router pages
├── components/      # React components
├── content/         # MDX blog posts
├── lib/             # Utilities and constants
└── types/           # TypeScript types
```

## Blog Posts

Blog posts are written in MDX format and stored in `content/posts/`. Each post includes frontmatter with metadata:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
---
```

## Deployment

The site automatically deploys to Vercel when changes are pushed to the main branch.

## License

This project is open source and available under the [MIT License](LICENSE).
