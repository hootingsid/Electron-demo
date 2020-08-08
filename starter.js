const {app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
    // Create Browser window
    win = new BrowserWindow({webPreferences: {nodeIntegration: true}, width: 800, height: 600, icon: __dirname+'/assets/logo/logo.png'});

    // load inex.html
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // open dev tools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Run create window function
app.on('ready', createWindow);

// Quit when all winows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
