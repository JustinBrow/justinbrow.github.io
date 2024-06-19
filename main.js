function main() {
   try {
      localStorage.getItem("adsEnabled") && (this.settingsData.adsEnabled = localStorage.getItem("adsEnabled"),
      localStorage.getItem("adsAnalytics") && (this.settingsData.adsEnabled = localStorage.getItem("adsAnalytics")
   } catch {
      alert("error in main")
   }
}

function toggleAds() {
}

function toggleAnalytics() {
}
