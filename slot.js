tokens = MAX_TOKENS = 5
nItems = 3
nDouble = 0
nJackpot = 0
nSpin = 60
ch = 0 // number of times the slot's numbers changes
items = new Array()

window.onload = function(){
  reset()
  swal({title: "Welcome human!",
      text: "Let's start gambling!",
      imageUrl: "./asserts/slotLogo.png"});
}

function canSpin(){
  if(tokens>0){
    btSpin.disabled=true
    spinNum=window.setInterval(spin, 50)
    }
  else
    swal({title: "Wanna play again?",
          text: "You got "+nDouble+" Double and "+nJackpot+" Jackpot",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#6BDD55",
          confirmButtonText: "Yes, of course!",
          closeOnConfirm: false },
          function(){
            reset()
            swal("Let's restart!",
                "You start with " + tokens + " tokens",
                "success"); });
}

function spin(){
  for(i=0;i<nItems;i++){
    if(ch<nSpin/3)
      document.getElementById("slot").getElementsByClassName("item")[0].innerHTML=getRandom()
    if(ch<nSpin/3*2)
      document.getElementById("slot").getElementsByClassName("item")[1].innerHTML=getRandom()
    document.getElementById("slot").getElementsByClassName("item")[2].innerHTML=getRandom()
  }
  ch++
  if (ch==nSpin){
    window.clearInterval(spinNum);
    ch=0;
    tokens--
    btSpin.disabled=false
    printResult()}
}

function printResult(){
  if(tokens==0)
    document.getElementById("btSpin").innerHTML="End!"
  for(i=0;i<nItems;i++)
    items[i]=document.getElementById("slot").getElementsByClassName("item")[i].innerHTML
  if(items[0]==items[1] || items[1]==items[2])
    if(items[0]==items[2]){
      swal({title:"JACKPOT!", text:"Great!!!", imageUrl:"./asserts/jackpot2.png", imageSize:"250x250"})
      tokens+=10
      nJackpot++
    }
    else {
      swal({title: "DOUBLE!!!",
            text: "COOL! You got a DOUBLE!",
            timer: 2000 });
      tokens++
      nDouble++
    }
  document.getElementById("result").innerHTML = tokens + " tokens left"
}

function reset(){
  tokens=MAX_TOKENS
  document.getElementById("result").innerHTML = tokens + " tokens left"
  document.getElementById("btSpin").innerHTML = "Spin!"
  nDouble=0
  nJackpot=0
}

function getRandom(){
  return parseInt(Math.random()*7)
}
