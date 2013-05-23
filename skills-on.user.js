// ==UserScript==
// @name           Always on skills
// @description    Always on skills for KoL
// @include        *kingdomofloathing.com/topmenu.php*
// @include        *kingdomofloathing.com/skills.php?*tiny=1*
// @version        1.0
// ==/UserScript==

/**
 * Refreshes the skillpane
 **/
function showSkills() {
	skillpane.location.href = 'skills.php?tiny=1';
}

/**
 * Sets up the menupane
 **/
function initMenu () {
	document.body.innerHTML += '<style>'+
		'#menus, #skillpane { width: 350px; vertical-align: middle; display: inline-block !important; }' +
		'#yep > center > table{ width: 100% }' +
	'</style>';
	var el = document.querySelector('#yep > center > table > tbody > tr > td:first-child');
	el.innerHTML = "";
	el.nextSibling.querySelector('img').addEventListener('click', showSkills, false);
	var loading = document.createElement('span');
	loading.id = 'loading';
	loading.style.display = 'inline-block';
	loading.style.width = '50px';
	el.nextSibling.nextSibling.appendChild(loading);
}

/**
 * Sets up the skillpane
 **/
function initSkills(){
	var div = document.createElement('div');
	div.innerHTML = '<style>select {width:250px;}.tinybutton { padding-bottom: 2px }</style>';
	document.body.appendChild(div);
}

if (window.location.pathname == '/topmenu.php'){
	initMenu();
	showSkills();
}else if (window.location.pathname == '/skills.php'){
	initSkills();
}