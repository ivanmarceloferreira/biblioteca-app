1- npm init -y // iniciando o projeto <br>
2- npm install typescript --save-dev<br>
3- npx tsc --init<br>
4- npm install express sequelize mysql2<br>
5- npm install @types/express @types/sequelize @types/node --save-dev<br>
6- npm install ts-node --save-dev<br>

-- no package.json
"scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
  
npm run dev

http://localhost:3000/

---
npm install
