

	// Form webstorage

		var myForm = document.getElementById("myForm");
		var store = new Persist.Store('My Application');

		//Persist.js define store
		var store;
		function load_data() {
		store = new Persist.Store('My Application');
		};

		//Hide recipes or display
			if (store.get('Name') != 'null'){
			document.getElementById('log').style.display = 'block';
				switch(true){
					case store.get('Name') == "Chicken":
						document.getElementById('chicken').style.display='block';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						document.getElementById('gridRadios1').checked = true;
						break;
					case store.get('Name') =="Beef":
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='block';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						document.getElementById('gridRadios2').checked = true;
						break;
					case store.get('Name') == "Pork" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='block';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						document.getElementById('gridRadios3').checked = true;
						break;
					case store.get('Name') == "Shrimp" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='block';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						document.getElementById('gridRadios4').checked = true;
						break;
					case store.get('Name') == "Fish" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='block';
						document.getElementById('shellfish').style.display='none';
						document.getElementById('gridRadios5').checked = true;
						break;
					default :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='block';
						document.getElementById('gridRadios6').checked = true;
				}
				
			} else{
				document.getElementById('log').style.display = 'none';
				document.getElementById('chicken').style.display='none';
				document.getElementById('beef').style.display='none';
				document.getElementById('pork').style.display='none';
				document.getElementById('shrimp').style.display='none';
				document.getElementById('fish').style.display='none';
				document.getElementById('shellfish').style.display='none';	
			};

		//Submit choice
			myForm.addEventListener("submit", function(event) {
			var data = new FormData(myForm);
			var output = '';
			var output1=[];
				for (const entry of data) {
					output =entry[1];
					output1.push(output);
				};
				
			//Local store choice
			store.set('Name', output1);
			//Hide recipes or display
			document.getElementById("log").innerHTML= store.get('Name');
			if (store.get('Name') != 'null'){
			document.getElementById('log').style.display = 'block';
			} else{
			document.getElementById('log').style.display = 'none';
			};

			//recipes display
			switch(true){
				case store.get('Name') == "Chicken":
						document.getElementById('chicken').style.display='block';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						break;
					case store.get('Name') =="Beef":
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='block';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						break;
					case store.get('Name') == "Pork" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='block';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						break;
					case store.get('Name') == "Shrimp" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='block';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='none';
						break;
					case store.get('Name') == "Fish" :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='block';
						document.getElementById('shellfish').style.display='none';
						break;
					default :
						document.getElementById('chicken').style.display='none';
						document.getElementById('beef').style.display='none';
						document.getElementById('pork').style.display='none';
						document.getElementById('shrimp').style.display='none';
						document.getElementById('fish').style.display='none';
						document.getElementById('shellfish').style.display='block';
			}
		
		 	
			event.preventDefault();
			}, false);
		
		//Reset Choice 
			myForm.reset.addEventListener("click", function(event) {
				store.set('Name', 'null');
				document.getElementsByClassName('first').checked = true;

				//reload page
				location.reload();

				//Hide recipes or display
				if (store.get('Name') != 'null'){
					document.getElementById('recipes').style.display = 'block';
					document.getElementById('log').style.display = 'block';
						
				} else{
					document.getElementById('recipes').style.display = 'none';
					document.getElementById('log').style.display = 'none';
				};
				event.preventDefault();
			}, false);
		
		document.getElementById("log").innerHTML= store.get('Name');
	
	// var elems = document.getElementById('job');
    // for (var i=0;i<elems.length;i+=1){
    // elems[i].style.display = 'none';
    // }
