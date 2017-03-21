var total = 0;

for(var i = 1; i<=100 ; i++){
  if(i%2!==0){
    total = total +i;
  }
  else{
    total = total-i;
  }
}
console.log('TOTAL: '+total);
