    function setValue() {
        target.value = '0';
        cash.value = '0';
    }

    //function to start PB
    function init() { 
    width = 0;
    isTargetReached = false; 
    document.querySelector(".progress").style.visibility = 'visible';
    document.querySelector("#progress-arrow").style.visibility = 'visible';
    document.querySelector(".target").classList.remove('blueBorder');
    document.querySelector(".target-text").classList.remove('blueShadowText');
    document.querySelector(".target-text-up").classList.remove('blueShadowText');
    document.getElementById("info-text").innerHTML = "$" + 0;
    document.getElementById("target-text-up").innerHTML = "$" + 0;
    document.getElementById('buttom').style.display = 'none';
    document.getElementById('targetTitle').style.visibility = 'visible';
    document.getElementById("myBar").style.width = width + "%";
    document.getElementById("numBar").style.width = width +"%";
    document.getElementById("arrowBar").style.width = width + "%";
    document.getElementById("numBar").innerHTML = "$" + 0;
	  target = document.getElementById('target');
	  target.onkeyup = getValueOfInputNumber;
    target.onchange = getValueOfInputNumber;
	  cash = document.getElementById( 'cash' );
    cash.onkeyup = getValueOfInputNumberCash;
    cash.onchange = getValueOfInputNumberCash;
    } 
	//init();
    
    // value of target
    var target;
    var targetValue = targetValue;
    
      function getValueOfInputNumber() {
            targetValue = this.value; 
            document.getElementById("target-text-up").innerHTML = "$" + targetValue;
        document.getElementById("info-text").innerHTML = "$" + targetValue;
      }
    
    //bottom 'add target'
    function addTarget(){
      document.getElementById( 'target' ).style.visibility = 'hidden' ;
      document.getElementById('targetTitle').style.visibility = 'hidden';
    }
    
    // value of cash add value
    var cash;
    var cashValue;
      function getValueOfInputNumberCash() {
            cashValue = this.value; 
      }
    
    //bottom 'Add in my Card' with logic
    var isTargetReached = false; var width = 0; var displayBill=0; var numToReach=0;
    function move() { 
            var elem = document.getElementById("myBar");
            var elemNum = document.getElementById("numBar");
            var elemArrowBar = document.getElementById("arrowBar");
            var infoText = document.getElementById("info-text");
    
            function targetIsReached(){
             document.querySelector(".progress").style.visibility = 'hidden';
             document.querySelector("#progress-arrow").style.visibility = 'hidden';
             document.querySelector(".target").classList.add('blueBorder');
             document.querySelector(".target-text").classList.add('blueShadowText');
             document.querySelector(".target-text-up").classList.add('blueShadowText');
             width = 100;
             elem.style.width = 100 + "%";
             displayBill += (+cashValue);
             elemNum.innerHTML = "$" + displayBill.toFixed(2);
             numToReach = targetValue - displayBill;
             infoText.innerHTML = "$" + numToReach.toFixed(2); 
              isTargetReached=true;    //to block bottom
            }
      if (!isTargetReached && +targetValue > +cashValue) {   
        var frame = (function() {
            if ( width >= 99.999999 - (100*cashValue/targetValue))  {
              targetIsReached();
            } else { 
            width += (100*cashValue/targetValue);
            displayBill += (+cashValue);
            elem.style.width = width + "%";
            elemNum.style.width = width + 6 +"%"; 
            elemNum.innerHTML = "$" + displayBill.toFixed(2);
            elemArrowBar.style.width = width + "%";
            numToReach = targetValue - displayBill;
            infoText.innerHTML = "$" + numToReach.toFixed(2);
          } 
        })();
		//frame();
      } 
      else if (!isTargetReached) {
             targetIsReached();
      } 
      
    }
	
	function render() {
		return '<div class=\"main-containter\"><div id = \"header\"><div class=\"text-head\">Target Indicator Demo</div></div><div class=\"containter\"><div class = \"section left\"></div><div class = \"section reached\"><div class=\"reached-text\">Reached:</div></div><div class = \"section section-progress-bar\"><div class= \"progress-top\"></div><div id = \"myProgress\"><div id=\"myBar\"></div></div><div id = \"progress-arrow\"><div id=\"arrowBar\"></div><div class=\"arrow-up\"></div></div><div class = \"progress num\"><div id=\"numBar\">$0</div></div></div><div class = \"section target\"><div class=\"target-text\">Target</div><div class=\"target-text-up\"id=\"target-text-up\">$</div></div><div class=\"section right\"></div><div class=\"info-buttom\"><img class=\"info-icon\" src=\"info-icon.png\"><div class=\"info-text\">You need <a id=\"info-text\">$</a> more to reach your target.<span></span></div></div></div></div>';
	}
    
    
    
    
