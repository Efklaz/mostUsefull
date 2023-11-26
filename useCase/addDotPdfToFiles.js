const fs = require('fs');
const path = require('path');
function renameFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        renameFiles(filePath);
      } else {
        const fileParts = file.split('.');
        const extension = fileParts.length === 1 ? '' : fileParts.pop();
        if (!extension) {
          const newFile = `${file}.pdf`;
          fs.rename(filePath, path.join(dir, newFile), err => {
            if (err) throw err;
            console.log(`${filePath} переименован в ${newFile}`);
          });
        }
      }
    });
  });
}
renameFiles('./');
