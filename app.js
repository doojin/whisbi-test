const express = require('express');

const app = express();

app.get('/set-cookie', (req, res) => {
    res.cookie('testCookie', 'testValue', {
        domain: 'events-whisbi.com',
        sameSite: 'none',
    });

    res.status(200).json({ ok: true });
});

app.get('/get-cookie', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.status(200).json(cookies);
});

app.listen(80, () => {
    console.log('server started');
});
