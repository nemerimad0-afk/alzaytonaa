const fs = require('fs');

let menuData = fs.readFileSync('menuData.json', 'utf8');
menuData = menuData.replace(/"\.\/uploads\//g, '"/uploads/');
menuData = menuData.replace(/"\.\/waffle\.png"/g, '"/waffle.png"');
menuData = menuData.replace(/"\.\/shisha\.png"/g, '"/shisha.png"');
fs.writeFileSync('menuData.json', menuData);

let userMenu = fs.readFileSync('src/UserMenu.tsx', 'utf8');
userMenu = userMenu.replace(/"\.\/logo\.png"/g, '"/logo.png"');
userMenu = userMenu.replace(/"\.\/waffle\.png"/g, '"/waffle.png"');
userMenu = userMenu.replace(/"\.\/shisha\.png"/g, '"/shisha.png"');
fs.writeFileSync('src/UserMenu.tsx', userMenu);

let settingsData = fs.readFileSync('src/settingsData.ts', 'utf8');
settingsData = settingsData.replace(/"\.\/logo\.png"/g, '"/logo.png"');
fs.writeFileSync('src/settingsData.ts', settingsData);
