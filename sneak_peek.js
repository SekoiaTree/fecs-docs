  document.addEventListener('DOMContentLoaded', menuSetup);
  
  function menuSetup() {
  
 	 var elemDiv = document.createElement('div');
         elemDiv.id = "frameContainer";
         elemDiv.style.cssText = 'position:absolute;display: none;z-index:100; width:400px; height:250px; border:1px solid #aaaaaa; border-radius: 8px';
         document.body.appendChild(elemDiv);
	// delays in milliseconds
	let showDelay = 300, hideDelay = 300;
	// holding variables for timers
	let menuEnterTimer, menuLeaveTimer;
	// get the top-level menu items
	let allMenuItems = document.querySelectorAll('.internal-link');


	for (let i = 0; i < allMenuItems.length; i++) {
		// triggered when user's mouse enters the menu item
		allMenuItems[i].addEventListener('mouseenter', function(event) {
			let thisItem = this;
			let viewDiv = document.getElementById("frameContainer");
			// clear the opposite timer
			clearTimeout(menuLeaveTimer);
			clearTimeout(menuEnterTimer);
			if (viewDiv.ref != thisItem.href) {
			  // add active class after a delay
			  menuEnterTimer = setTimeout(function() {
				  viewDiv.style.display = "inline-block";
				  viewDiv.ref = thisItem.href;
				  viewDiv.innerHTML = '<iframe src=\''+thisItem.href+'\' frameborder=\'0\' width=\'400px\'  height=\'250px\' style=\'border-radius: 8px;\'></iframe>';
				  viewDiv.style.left = (event.pageX+10)+"px";
				  viewDiv.style.top = (event.pageY-260)+"px";
			  }, showDelay);
			}
		});

		// triggered when user's mouse leaves the menu item
		allMenuItems[i].addEventListener('mouseleave', function() {
			let thisItem = this;
			// clear the opposite timer
			clearTimeout(menuLeaveTimer);
			clearTimeout(menuEnterTimer);
			// remove active class after a delay
			menuLeaveTimer = setTimeout(function() {
				let viewDiv = document.getElementById("frameContainer");
				viewDiv.style.display = "none";
				viewDiv.ref = null;
				
			}, hideDelay);
		});
		elemDiv.addEventListener('mouseenter', function(event) {
			let thisItem = this;
			// clear the opposite timer
			clearTimeout(menuLeaveTimer);
			clearTimeout(menuEnterTimer);
		});
		elemDiv.addEventListener('mouseleave', function(event) {
			let thisItem = this;
			// clear the opposite timer
			clearTimeout(menuLeaveTimer);
			clearTimeout(menuEnterTimer);
			// remove active class after a delay
			menuLeaveTimer = setTimeout(function() {
				thisItem.style.display = "none";
				thisItem.ref = null;
			}, hideDelay);
		});
	}
  }
