const key = "This Is A Test Key"

if (document.referrer == null){
  navigator.clipboard.writeText(key)
  alert('copied to clipboard!\n' + key);
}else{
  alert('Please Go Through The Loot Link');
}
