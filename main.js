function main() {
   // Adverts/Analytics should be an opt in rather than an opt out.
   let ads = getCookie("adsEnabled");
   if (ads == "") {
      setCookie("adsEnabled", false, 365);
   }
   let analytics = getCookie("adsEnabled");
   if (analytics == "") {
      setCookie("analyticsEnabled", false, 365);
   }
   //alert("Hello!")
}

function toggleAds() {
   let ads = getCookie("adsEnabled");
   if (ads == false) {
      setCookie("adsEnabled", true, 30);
      console.log("Thank you!")
   }
}

function toggleAnalytics() {
   let analytics = getCookie("adsEnabled");
   if (analytics == "") {
      setCookie("analyticsEnabled", true, 30);
      console.log("The great Google monster thanks you...")
   }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
