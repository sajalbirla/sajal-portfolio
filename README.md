# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Google Analytics 4

Analytics is initialized in `src/lib/analytics.js`, before React renders. It reuses
this site's existing measurement ID, `G-6VNCE9RP65`, and loads the Google tag only
once. The config command sends the initial page view; section links send custom
navigation events rather than manually sending additional page views.

Production builds enable tracking by default. Development and tests do not load
the tag unless explicitly enabled. See `.env.example`: copy the needed variables
into `.env.local`, or set them in the build environment. Restart the dev server
or rebuild after changing variables. `REACT_APP_GA_ENABLED=false` disables tag
initialization. Measurement IDs are public identifiers, not secrets.

| Event | Trigger | Parameters |
| --- | --- | --- |
| `page_view` | Google tag initialization | Google tag defaults |
| `resume_click` | Resume download link | `source: hero` |
| `contact_click` | Contact Me, email, or phone | `method`, `source` |
| `social_click` | Social profile link | `platform` |
| `navigation_click` | Header section link | `section` |

`resume_click` measures download intent, not successful download completion.
Custom payloads use labels rather than email addresses or phone numbers. Native
links still work when Analytics is unavailable. GA4 Enhanced Measurement may
also emit its own `file_download` and outbound `click` events; do not combine those
counts with custom events as if they represented separate interactions.

### Verify after deployment

1. Open the deployed site and click Resume, Contact Me, and a social profile.
2. Check the matching property's Realtime report for the events.
3. For local DebugView testing, set `REACT_APP_GA_ENABLED=true` and
   `REACT_APP_GA_DEBUG=true` in `.env.local`, then restart `npm start`.
   Use a test property ID if you do not want local events in production reports.
4. Remove the debug overrides before a production build. For reporting by custom
   parameters, register `source`, `method`, `platform`, and `section` as
   event-scoped custom dimensions in GA4 as needed.

Reference: [Google's event setup guide](https://developers.google.com/analytics/devguides/collection/ga4/events).

### Diagnose missing resume clicks

After deployment, open
`https://sajalbirla.github.io/sajal-portfolio/?analytics_debug=1`, click Resume,
and look for `resume_click` in the property's Admin > Data display > DebugView.
The URL flag marks this visit's events for debugging without a special build.
It does not enable tracking if analytics is disabled. Events explicitly target
the configured measurement ID and resume clicks include `file_name` and
`file_extension`. Normal visits do not have debug mode enabled.

If the event appears in DebugView but not standard reports, allow processing
time and check the property's developer/internal traffic filters. Avoid changing
filters until their settings have been reviewed. A successful browser event does
not confirm that the user completed the file download.

### Report social and contact clicks separately

Every footer social button sends `social_click` with `platform` set to
`Instagram`, `LinkedIn`, `GitHub`, `Facebook`, `X`, or `WhatsApp` and `source`
set to `footer`. Phone and email links send `contact_click` with `method`
set to `phone` or `email` and `source` set to `footer`.

In GA4 > Admin > Data display > Custom definitions, create event-scoped
custom dimensions named **Social platform** (event parameter `platform`),
**Contact method** (event parameter `method`), and **Click source** (event
parameter `source`), unless they are already registered. Parameter names are
case-sensitive. Allow 24–48 hours for custom dimension reporting.

Create two Explore > Free form tables:

- Social clicks: filter Event name exactly `social_click`, rows Social platform,
  values Event count and Total users.
- Contact clicks: filter Event name exactly `contact_click` and Click source
  exactly `footer`, rows Contact method, values Event count and Total users.

Event count includes repeat clicks; Total users measures distinct tracked users.
Phone and email events measure clicks, not completed calls or sent emails.
For a quick verification, click the buttons and inspect event parameters in
Realtime or DebugView before waiting for the historical tables.


## Search visibility and SEO

`public/llms.txt` provides an overview and curated links for AI tools, and
`public/index.md` provides a readable portfolio summary without JavaScript.
The homepage links to both resources. Keep these files synchronized with
the profile, experience, skills, and resume when updating the website.
They are published under `/sajal-portfolio/`, the root of this project site.
The llms.txt proposal does not guarantee AI search inclusion or ranking and
does not replace the sitemap, robots.txt, or search-engine verification.

The public HTML includes a descriptive title, description, canonical URL,
Open Graph/Twitter previews, and ProfilePage/Person structured data. These help
search engines understand the page; they do not guarantee indexing, rich results,
or a particular ranking. The app content is still rendered with React: verify
Google's rendered page through Search Console before deciding whether to add
prerendering. Analytics does not submit the site to Google Search.

After deploying:

1. Add a URL-prefix property in Google Search Console:
   `https://sajalbirla.github.io/sajal-portfolio/`.
2. Verify ownership using an offered method. For HTML-tag verification, insert
   the exact verification meta tag supplied by Google into `public/index.html`
   and deploy it. Do not invent a verification value.
3. Submit `https://sajalbirla.github.io/sajal-portfolio/sitemap.xml` in Sitemaps.
4. Inspect the homepage URL, run the live test, check the rendered content,
   and request indexing. Monitor Page indexing and Search performance for
   actual indexing status, search queries, impressions, clicks, and position.
5. Link this preferred URL from your GitHub and LinkedIn profiles.

The sitemap contains only the real homepage URL. Section anchors are not
separate pages. Google reads robots.txt at the host root
(`https://sajalbirla.github.io/robots.txt`), not this project's
`/sajal-portfolio/robots.txt`; submit the sitemap directly in Search Console.

If moving to a custom domain, update `package.json` homepage, the canonical,
all absolute metadata/structured-data URLs in `public/index.html`, and the
sitemap. Configure GitHub Pages/DNS and redirects, then verify the new Search
Console property. Keep all URLs consistent with the final HTTPS address.
