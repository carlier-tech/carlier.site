# Carlier site restructure
Build: npm run build (outputs /dist/consulting, /dist/apps, /dist/hosting)
Preview: serve /dist/consulting, /dist/apps, /dist/hosting separately.
Shared: /shared (CSS tokens, partials, images, favicon)
Sites: /sites/{consulting,apps,hosting}
Build script: scripts/build.js copies site + shared and injects <!-- @include header --> / footer.
