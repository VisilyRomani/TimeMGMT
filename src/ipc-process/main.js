const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');


const database = new sqlite3.Database('./public/db.db', (err) =>{ 
    if (err) console.error('Database opening Error: ', err);
}) 

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg; 
    console.log(sql)
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    })

}); 
