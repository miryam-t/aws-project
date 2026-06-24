const prisma = require('./db'); // שימוש בחיבור המשותף

async function joinGame(userId, gameId) {
    // 1. בדיקת קיום משחק וסטטוס
    const game = await prisma.game.findUnique({ where: { id: gameId } });
    if (!game) throw new Error("Game not found");
    if (game.status !== 'Waiting') throw new Error("Game is already in progress or finished");

    // 2. בדיקה אם המשתמש כבר רשום
    const participant = await prisma.gameParticipant.findUnique({
        where: { userId_gameId: { userId, gameId } }
    });
    if (participant) throw new Error("User is already registered");

    // 3. רישום המשתמש
    return await prisma.gameParticipant.create({
        data: { userId, gameId, role: 'Player' }
    });
}

module.exports = { joinGame };