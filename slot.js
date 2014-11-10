MAX_TOKENS=5

nItems=3
nDouble=0
nJackpot=0
tokens=MAX_TOKENS
items=new Array()

function canSpin(){
  if(tokens>0)
    spin()
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
                "You have got " + tokens + " tokens",
                "success"); });
}

function reset(){
  tokens=MAX_TOKENS
  document.getElementById("result").innerHTML = tokens + " tokens left"
  document.getElementById("btSpin").innerHTML="Spin!"
  nDouble=0
  nJackpot=0
}

function spin(){
  tokens--
  if(tokens==0)
    document.getElementById("btSpin").innerHTML="End!"
  for(i=0;i<nItems;i++)
    items[i]=document.getElementById("slot").getElementsByClassName("item")[i].innerHTML=getRandom()
  printResult()
  document.getElementById("result").innerHTML = tokens + " tokens left"

}

function fastspin(arg){ // Fa partire la rotazione dei numeri e ritona l'handler
  return window.setInterval(function(){
    arg.innerHTML = Math.ceil(Math.random() * 7)
  },50)
}

function getRandom(){
  return parseInt(Math.random()*7)
}

function printResult(){
  if(items[0]==items[1] || items[1]==items[2])
    if(items[0]==items[2]){
      swal("JACKPOT!", "Great!!!", "success")
      tokens+=10
      nJackpot++
    }
    else {
      swal({title: "COOL!",
            text: "You got a DOUBLE!",
            timer: 2000 });
      tokens++
      nDouble++
    }
  else{
    document.getElementById("result").innerHTML = "Ritenta!"
  }
}

window.onload = function(){
  reset()
  swal({title: "Welcome human!",
      text: "Let's start gambling!",
      imageUrl: "./asserts/slotLogo.png" });

}
