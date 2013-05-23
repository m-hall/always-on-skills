// ==UserScript==
// @name           Always on skills
// @description    Always on skills for KoL
// @include        *kingdomofloathing.com/topmenu.php*
// @include        *kingdomofloathing.com/skills.php?*tiny=1*
// @version        1.0
// ==/UserScript==

function showSkills() {
	skillpane.location.href = 'skills.php?tiny=1';
}
function checkVisible(){
	if (document.querySelector('#skillbit').style.display != "inline-block" || document.querySelector('#menus').style.display != "inline-block"){
		showSkills();
	}
}
function initMenu () {
	document.body.innerHTML += '<style>'+
		'#menus, #skillpane { width: 350px; vertical-align: middle; }' +
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
function initSkills(){
	parent.document.querySelector('#skillbit').style.display = 'inline-block';
	parent.document.querySelector('#menus').style.display = 'inline-block';
	var div = document.createElement('div');
	div.innerHTML = '<style>select {width:250px;}.tinybutton { padding-bottom: 2px }</style>';
	document.body.appendChild(div);
}
if (window.location.href.indexOf('topmenu.php') > 1){
	initMenu();
	showSkills();
	setInterval(checkVisible,3000);
}else if (window.location.href.indexOf('skills.php') > 1){
	initSkills();
}