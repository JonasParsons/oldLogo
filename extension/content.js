document.getElementById("eServicesLogo").src = "/img/logo_v2.png";
document.getElementById("eServicesLogoRight").src = "/img/logo_right.png";

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);
