1- npm init -y // iniciando o projeto
2- npm install typescript --save-dev
3- npx tsc --init
4- npm install express sequelize mysql2
5- npm install @types/express @types/sequelize @types/node --save-dev
6- npm install ts-node --save-dev

-- no package.json
"scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
  
npm run dev

http://localhost:3000/
