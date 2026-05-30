# Houssem Chaouch – Portfolio

Personal portfolio website built with [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) and [Once UI](https://once-ui.com) for Next.js.

## Getting Started

**1. Install dependencies**
```bash
npm install
```

**2. Run dev server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

**3. Build for production**
```bash
npm run build
```

## Customization

- **Content & personal data**: `src/resources/content.tsx`
- **Site config (theme, URL, routes)**: `src/resources/once-ui.config.ts`
- **Projects**: Add `.mdx` files to `src/app/work/projects/`
- **Blog posts**: Add `.mdx` files to `src/app/blog/posts/`
- **Gallery images**: Place images in `public/images/gallery/` and update `gallery.images` in `content.tsx`
- **Avatar**: Replace `public/images/avatar.jpg` with your own photo

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HoussemEddineChaouch/portfolio)

1. Push this repo to GitHub as `portfolio` (or any name)
2. Import into Vercel
3. Set `NEXT_PUBLIC_BASE_URL` env var to your Vercel domain
4. Deploy!

## Push to GitHub

```bash
git remote add origin https://github.com/HoussemEddineChaouch/portfolio.git
git push -u origin main
```

## Tech Stack

- [Next.js](https://nextjs.org) 15
- [Once UI](https://once-ui.com)
- [TypeScript](https://www.typescriptlang.org)
- [MDX](https://mdxjs.com) for project & blog content
