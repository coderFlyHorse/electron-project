// 引入窗口功能
const { app, BrowserWindow } = require("electron")

// app.whenReady().then(() => {
//     const win = new BrowserWindow({ width: 300, height: 300 })
// })
const path = require("path")
const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        // 窗口永远在别的窗口上面
        alwaysOnTop: true,
        // 默认窗口的位置
        x:100,
        y:100,
    })
    // 自动打开开发者工具
    // win.webContents.toggleDevTools()
   
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
  })


// Or load a local HTML file
// win.loadFile('index.html')