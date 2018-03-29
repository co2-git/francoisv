import fs from 'fs';

export const read = (file, options) => new Promise((resolve, reject) => {
  let source = '';
  fs.createReadStream(file, options)
    .on('error', reject)
    .on('data', data => {
      source += data.toString();
    })
    .on('end', () => {
      resolve(source);
    });
});
