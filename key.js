const key = "This Is A Test Key"
const ref = document.referrer

if (ref.includes("https://tpi")){
   navigator.clipboard.writeText(key)
   alert('copied to clipboard!\n' + key);
}else{
   alert('Please Go Through The Advertise! Came From: ' + document.referrer);
}
