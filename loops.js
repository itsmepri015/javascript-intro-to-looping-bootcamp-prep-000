function forLoop(array)
{
  
  for (let i = 0; i < 25; i++) {
  if(i==1)
  {
    console.log("I am 1 strange loop.")
  }
  else
  {
    console.log("I am ${i} strange loops.")
  }
   }
}

function whileLoop(n)
{
  let countdown = n;
  
  while (countdown > 0) {
  --countdown
  console.log("done")
}
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array)
{
do{
  return array
}while(array.length > 0 && maybeTrue())

}