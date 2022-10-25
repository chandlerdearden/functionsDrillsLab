
  function luckyNumbers (n) {
    let possibleNum =  [1,2,3,4,5,6,7,8,9,10]
    let luckyNum = []
      for (i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * possibleNum.length)
        luckyNum.push(possibleNum[x])
        possibleNum.splice(x,1)
      }
    console.log(luckyNum)
    return luckyNum
    
  }
  luckyNumbers(10)