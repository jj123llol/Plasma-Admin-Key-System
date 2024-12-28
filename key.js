const prams = new URLSearchParams(window.location.search)
const hwid = prams.get("HWID")
const key = hwid + "This Is A Test Key"
if (hwid == null){
  alert('No Hwid Found!');
}
else{
  if (document.referrer == ""){
    navigator.clipboard.writeText(key)
    alert('copied to clipboard!\n' + key);
  }else{
    alert('Please Go Through The Advertise! Came From: ' + document.referrer);
  }
}
