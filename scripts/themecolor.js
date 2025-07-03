// 获取系统主题色
var systemThemeColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? '#333' : '#0078d7';

// 将系统主题色应用到CSS变量中
document.documentElement.style.setProperty('--theme-color', systemThemeColor);