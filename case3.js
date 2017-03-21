var bintang = '';
for(var i = 1; i<=10; i++){
  for(var j = 0; j<i; j++){
    bintang += '*';
  }
  console.log(bintang);
  bintang = '';
}
