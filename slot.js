MAX_TOKENS=5

nItems=3
tokens=MAX_TOKENS
items=new Array()

function canSpin(){
  if(tokens>0)
    spin()
  else
    swal({title: "Want to restart?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, of course!",
          closeOnConfirm: false },
          function(){
            reset()
            swal("Welcome!",
                "You have got " + tokens + " tokens",
                "success"); });
}

function reset(){
  tokens=MAX_TOKENS
}

function spin(){
  tokens--
  for(i=0;i<nItems;i++)
    items[i]=document.getElementById("slot").getElementsByClassName("item")[i].innerHTML=getRandom()
  printResult()
  document.getElementById("result").innerHTML = tokens + " tokens left"
}

function getRandom(){
  return parseInt(Math.random()*10)
}

function printResult(){
  if(items[0]==items[1] || items[1]==items[2])
    if(items[0]==items[2]){
      document.getElementById("result").innerHTML="JACKPOT!!!"
      swal("JACKPOT!", "Great!!!", "success")
    }
    else {document.getElementById("result").innerHTML="COPPIA!!!"
      swal({title: "COMPLIMENTI!",
            text: "Hai fatto coppia!",
            timer: 2000 });
    }
  else{
    document.getElementById("result").innerHTML = "Ritenta!"
  }
}

window.onload = function(){
  swal({title: "Welcome human!",
      text: "Let's start gambling!",
      imageUrl: "./asserts/slotLogo.png" });
}
