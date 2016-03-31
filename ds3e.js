
  function button(response)
    { document.getElementById("button").addEventListener("click", function(){
      document.getElementById('grabphpdiv').innerHTML = response; })
    };


AjaxGet("api/jots.txt",button);
