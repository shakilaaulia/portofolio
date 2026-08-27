const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'lanyard');
fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading...');
  await download('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/card.glb', path.join(dir, 'card.glb'));
  console.log('Downloaded card.glb');
  await download('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/lanyard.png', path.join(dir, 'lanyard.png'));
  console.log('Downloaded lanyard.png');
  console.log('Done!');
}
run();
