function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1 ){
      console.log("I am 1 strange loop.")
    } else {
      console.log(`I am ${array[i] strange loops.}`)
    }
  } return forLoop(array)
}
