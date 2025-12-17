# Manual Deploy

```
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:badexperience-io/bad-experience-dot-io.git main:gh-pages
cd ..
```