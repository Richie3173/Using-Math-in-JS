//math function - break version

const 一番いいゲーム = ['ニーア　オートマタ', '龍が如く','鉄拳', 'つしま']

let randomNumber = Math.random()*一番いいゲーム.length

let randomInteger = Math.floor(randomNumber)

console.log(一番いいゲーム[randomInteger])

// math function - all together 

console.log(一番いいゲーム[Math.floor(Math.random()*一番いいゲーム.length)])

