import { PrismaClient } from '../../generated/prisma/index.js';
export const prismaClient = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
    { emit: 'event', level: 'error' },
  ],
});

prismaClient.$on('query', (e) => {
  console.info(`Query : ${e.query}`);
});

prismaClient.$on('error', (e) => {
  console.error(`Error : ${e.message}`);
});

prismaClient.$on('info', (e) => {
  console.info(`Info : ${e.message}`);
});

prismaClient.$on('warn', (e) => {
  console.warn(`Warn : ${e.message}`);
});
