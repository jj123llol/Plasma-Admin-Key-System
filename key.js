const key = "This Is A Test Key"

if (document.referrer == ""){
   navigator.clipboard.writeText(key)
   alert('copied to clipboard!\n' + key);
}else{
   alert('Please Go Through The Advertise! Came From: ' + document.referrer);
}
