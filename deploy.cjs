const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, 'out');
const nojekyll = path.join(outDir, '.nojekyll');

if (!fs.existsSync(nojekyll)) {
  fs.writeFileSync(nojekyll, '');
}

ghpages.publish(outDir, {
  dotfiles: true,
  branch: 'gh-pages',
  message: 'deploy',
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  }
  console.log('Deploy complete!');
  console.log('Site: https://nourhenebenothmen22.github.io/docker-master-lab/');
});
