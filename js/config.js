 
 //---------------------------Settings---------------------------

 var currency='BYN';
 //var currency='RUB';
 //var currency='TUG';


 var color = 'green';
 //var color = 'red';
 //var color = '#eecee1';
 
//---------------------------------------------------------------

 
//---------------------------------------------------------------
//						Settings function
//---------------------------------------------------------------
 
function changeSettings(){
	 
	document.getElementsByClassName('crn')[0].innerHTML=currency;
	document.getElementsByClassName('crn')[1].innerHTML=currency;
	document.getElementById('btn').style.backgroundColor = color;
	document.getElementById('btn').style.borderColor = color;
 }


//-----------------------------------------------------------------
//						Branding card function
//-----------------------------------------------------------------

function brandingCard(){


	switch(document.getElementById("input-sender-card").value[0]){

	case '4':
				document.getElementById("visa-sender").style.visibility= 'visible';
				document.getElementById("maestro-sender").style.visibility= 'hidden';
				document.getElementById("mastercard-sender").style.visibility= 'hidden';

				document.getElementById("CVV").style.display= 'table-cell';	
				document.getElementById("CVC").style.display= 'none';
				document.getElementById("slash").style.display= 'none';
				break;

	case '5':
				document.getElementById("visa-sender").style.visibility= 'hidden';
				document.getElementById("mastercard-sender").style.visibility= 'hidden';
				document.getElementById("maestro-sender").style.visibility= 'visible';

				document.getElementById("CVC").style.display= 'table-cell';
				document.getElementById("CVV").style.display= 'none';
				document.getElementById("slash").style.display= 'none';
				break;

	case '6': 	
				document.getElementById("visa-sender").style.visibility= 'hidden';
				document.getElementById("mastercard-sender").style.visibility= 'visible';
				document.getElementById("maestro-sender").style.visibility= 'hidden';

				document.getElementById("CVV").style.display= 'none';
				document.getElementById("CVC").style.display= 'table-cell';
				document.getElementById("slash").style.display= 'none';
				break;

	default:	
				document.getElementById("visa-sender").style.visibility= 'hidden';
				document.getElementById("mastercard-sender").style.visibility= 'hidden';
				document.getElementById("maestro-sender").style.visibility= 'hidden';

				document.getElementById("CVV").style.display= 'table-cell';
				document.getElementById("CVC").style.display= 'table-cell';
				document.getElementById("slash").style.display= 'table-cell';

	}

	switch(document.getElementById("input-recipient-card").value[0]){

	case '4':
				document.getElementById("visa-recipient").style.visibility= 'visible';
				document.getElementById("maestro-recipient").style.visibility= 'hidden';
				document.getElementById("mastercard-recipient").style.visibility= 'hidden';
				break;

	case '5':
				document.getElementById("visa-recipient").style.visibility= 'hidden';
				document.getElementById("mastercard-recipient").style.visibility= 'hidden';
				document.getElementById("maestro-recipient").style.visibility= 'visible';
				break;

	case '6': 	
				document.getElementById("visa-recipient").style.visibility= 'hidden';
				document.getElementById("mastercard-recipient").style.visibility= 'visible';
				document.getElementById("maestro-recipient").style.visibility= 'hidden';	
				break;

	default:	
				document.getElementById("visa-recipient").style.visibility= 'hidden';
				document.getElementById("mastercard-recipient").style.visibility= 'hidden';
				document.getElementById("maestro-recipient").style.visibility= 'hidden';

	}

}
 
 document.addEventListener("DOMContentLoaded", changeSettings());