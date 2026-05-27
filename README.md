# Give A Roof

The website for **Give A Roof**, a 501(c)(3) nonprofit that turns donated
airline miles, hotel points, and monetary gifts into safe nights of shelter for
people experiencing homelessness.

This is a rebuild of the original WordPress site (givearoof.org) as a modern
[Next.js](https://nextjs.org/) app, ready to deploy on
[Vercel](https://vercel.com/).

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, header + footer
  page.tsx            Home page (composes the section components)
  contact/page.tsx    Contact page
  api/contact/route.ts  Contact form submission handler
components/           UI sections (Hero, Stats, HowItWorks, Plan, News, etc.)
lib/content.ts        All site copy, stats, news links — edit content here
public/images/        Logo and book cover
```

To update copy, stats, or news articles, edit `lib/content.ts` — most of the
site's text lives there in one place.

## Contact form delivery

The contact form (`/contact`) posts to `app/api/contact/route.ts`. If no email
provider is configured, submissions are accepted and logged but not delivered.
To enable email delivery via [Resend](https://resend.com/), set these
environment variables (in Vercel project settings and/or a local `.env.local`):

| Variable             | Description                                        |
| -------------------- | -------------------------------------------------- |
| `RESEND_API_KEY`     | Your Resend API key                                |
| `CONTACT_TO_EMAIL`   | Where contact messages are delivered               |
| `CONTACT_FROM_EMAIL` | Verified sender address (e.g. `noreply@givearoof.org`) |

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel — it auto-detects Next.js, no extra config needed.
3. (Optional) Add the contact-form environment variables above.
4. Point the `givearoof.org` domain at the Vercel project once you're ready to
   cut over from WordPress.

## Notes / to-do

- **Donations** currently link out to the existing Stripe-backed donation form
  on the WordPress site (`lib/content.ts` → `org.donateUrl`). A custom
  frictionless donate flow with user accounts (collect name/email, auto-create
  an account, let donors log in to manage gifts) is planned as a follow-up.
- Verify the mailing address in `lib/content.ts` before launch.
