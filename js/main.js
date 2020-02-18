

$('#uss').click(function(){
	if (screen.width < 500){
		closeNav();		
	}
});
$('#servicess').click(function(){
	if (screen.width < 500){
		closeNav();		
	}
});
$('#productss').click(function(){
  	if (screen.width < 500){
		closeNav();		
	}
});
$('#clientss').click(function(){
  	if (screen.width < 500){
		closeNav();		
	}
});
$('#contactss').click(function(){
	if (screen.width < 500){
		closeNav();		
	}
});

function openNav() {    
    document.getElementById("mySidenav").style.transform = 'translateX(0%)';
	console.log("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = 'translateX(-100%)';
}