const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { joinGame } = require('./game.service'); // נניח שזה השם של הקובץ שבו כתבנו את הלוגיקה

async function main() {
    console.log("Starting script...");

    // הגדרת החיבור (כמו ב-service)
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    try {
        // 1. יצירת נתוני דמי
        const user = await prisma.user.create({ data: { name: "Test User" } });
        const game = await prisma.game.create({ data: { status: 'Waiting' } });
        
        console.log(`Created User ID: ${user.id}, Game ID: ${game.id}`);

        // 2. קריאה לפונקציה המבוקשת
        const result = await joinGame(user.id, game.id);
        console.log("Success! User joined the game:", result);

    } catch (error) {
        console.error("Error during execution:", error.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();