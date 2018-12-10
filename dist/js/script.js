
	window.onload = function () {

		let info = ['','','','','','','','',''];
	
		for (let i=0; i<9; i++) {
		document.getElementById('game').innerHTML+=`<div class="block" data-cell="${i}"></div>`;
		}
		let hod = 0;
		document.getElementById('game').onclick = function(event) {
		if (event.target.className == 'block') {
			if(info[event.target.dataset.cell] === ""){
				if (hod%2==0){
					info[event.target.dataset.cell]= "x";
					event.target.innerHTML = 'x';
				}
			else {
			info[event.target.dataset.cell]= "0";
			event.target.innerHTML = '0';
			}
		}	
			hod++;
			console.log(info);
			checkWinner();
		}
	}
	function checkWinner() {
		var allblock = document.getElementsByClassName('block');
		console.log(allblock);
		
		
		if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x'){
		alert("Победили крестики");
		}
		if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x'){
			alert("Победили крестики");
			}
			if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x'){
				alert("Победили крестики");
				}
				if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x'){
					alert("Победили крестики");
					}
					if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x'){
						alert("Победили крестики");
						}
						if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x'){
							alert("Победили крестики");
							}
							if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x'){
								alert("Победили крестики");
								}
								if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x'){
									alert("Победили крестики");
									}
if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0'){
	alert("Победили нолики");
	}
	if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0'){
		alert("Победили нолики");
		}
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0'){
			alert("Победили нолики");
			}
			if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0'){
				alert("Победили ноликии");
				}
				if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0'){
					alert("Победили нолики");
					}
					if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0'){
						alert("Победили нолики");
						}
						if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0'){
							alert("Победили нолики");
							}
							if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0'){
								alert("Победили нолики");
								}
	}
	}