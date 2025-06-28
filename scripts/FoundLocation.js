if (navigator.appName == 'Netscape')
var language = navigator.language;
else
var language = navigator.browserLanguage;
if (language.indexOf('en') > -1) document.location.href = 'english.htm';
else if (language.indexOf('nl') > -1) document.location.href = 'dutch.htm';
else if (language.indexOf('fr') > -1) document.location.href = 'french.htm';
else if (language.indexOf('de') > -1) document.location.href = 'german.htm';
else if (language.indexOf('ja') > -1) document.location.href = 'japanese.htm';
else if (language.indexOf('it') > -1) document.location.href = 'italian.htm';
else if (language.indexOf('pt') > -1) document.location.href = 'portuguese.htm';
else if (language.indexOf('es') > -1) document.location.href = 'Spanish.htm';
else if (language.indexOf('sv') > -1) document.location.href = 'swedish.htm';
else if (language.indexOf('zh') > -1) document.location.href = 'chinese.htm';
else
document.location.href = 'english.htm';