document.getElementById('page-wrap').style.opacity="0";

window.onload = function (){

// setup the SIMPLE paging controls

// setup the select
ezSayItModel.ezobj.reverse();
for (i = 0; i < ezSayItModel.ezobj.length; i++) {
  if ( 'select' in ezSayItModel.ezobj[i] === false ){
    thisSummary = setupNoSelect
  }else{
    thisSummary = ezSayItModel.ezobj[i].select;
  }
  document.form1.page.options[i] = new Option( (i + 1) + ' - ' + thisSummary, (i + 1) );
}

// cheat and use the #hash as the page number
var hashPage = window.location.hash;
if (hashPage == ''){
  currentPage = 1
} else {
  hashPage = hashPage.substring(1);
  if ( typeof ezSayItModel.ezobj[hashPage-1] === 'undefined' ){
    functOops(hashPage);
    currentPage = 1;
	window.location.hash = '#' + currentPage;
  }else{
    currentPage = hashPage;
  }
}
doPage(currentPage,ezSayItModel);
document.getElementById('page').options[currentPage-1].selected = true;

// has the select been changed?
document.getElementById('page').onchange=function(){
  console.log('selected value ' + document.getElementById('page').value);
  doPage(document.getElementById('page').value, ezSayItModel);
  currentPage = document.getElementById('page').value;
  window.location.hash = '#' + currentPage;
};

// next / down
document.getElementById('next-down').onclick = function() {
  if (currentPage >= ezSayItModel.ezobj.length){
    currentPage = ezSayItModel.ezobj.length;
  } else {
    currentPage = parseInt(currentPage) + 1;
	doPage(currentPage, ezSayItModel);
	document.getElementById('page').options[currentPage-1].selected = true;
	window.location.hash = '#' + currentPage;
  }
  return false;
}

// prev / up
document.getElementById('prev-up').onclick = function() {  
  if (currentPage < 2){
    currentPage = 1;
  } else {
    currentPage = parseInt(currentPage) - 1;
	doPage(currentPage, ezSayItModel);
	document.getElementById('page').options[currentPage-1].selected = true;
	window.location.hash = '#'+ currentPage;
  }
  return false;
}

// display the new "page"
function doPage(thisPage, ezSayItModel){
  // adjust for js starting at 0
 console.log('thisPage ' + thisPage); 
  pg = parseInt(thisPage) - 1;
  console.log('pg ' + pg);  
  var theWrap = document.getElementById('wrap');
  theWrap.setAttribute("class", 'wrap wrap-'  + (pg + 1)); //For Most Browsers
  theWrap.setAttribute("className", 'wrap wrap-' + (pg + 1)); //For IE; harmless to other browsers

  if ( 'title' in ezSayItModel.ezobj[pg] === false || ezSayItModel.ezobj[pg].title == '' || ezSayItModel.ezobj[pg].title == false ) {	
    document.getElementById('title').innerHTML = '';
	} else {
	  document.getElementById('title').innerHTML = ezSayItModel.ezobj[pg].title;
	}
	
	if ( ezSayItModel.ezobj[pg].idea_size == '' || ezSayItModel.ezobj[pg].idea_size == false || 'idea_size' in ezSayItModel.ezobj[pg] === false ) {	
	  document.getElementById('idea').style.fontSize = '100%';
	} else {
	  document.getElementById('idea').style.fontSize = ezSayItModel.ezobj[pg].idea_size + setupIdeaSizeUnit;
	} 
	
	if ( ezSayItModel.ezobj[pg].idea == '' || ezSayItModel.ezobj[pg].idea == false || 'idea' in ezSayItModel.ezobj[pg] === false ) {
	  document.getElementById('idea').innerHTML = '';
	} else {
	  if (ezSayItModel.ezobj[pg].quotes != false){
	    document.getElementById('idea').innerHTML = setupQuoteLeft + ezSayItModel.ezobj[pg].idea + setupQuoteRight;
		} else { 
		document.getElementById('idea').innerHTML = ezSayItModel.ezobj[pg].idea;
	  }	
	}

	if ( ezSayItModel.ezobj[pg].who == '' || ezSayItModel.ezobj[pg].who == false || 'who' in ezSayItModel.ezobj[pg] === false ) {	
	  document.getElementById('who').innerHTML = '';
	} else {
	  document.getElementById('who').innerHTML = setupDashWho + ezSayItModel.ezobj[pg].who;
	}
	
	if ( ezSayItModel.ezobj[pg].note == '' || ezSayItModel.ezobj[pg].note == false || 'note' in ezSayItModel.ezobj[pg] === false ) {
	  document.getElementById('note').innerHTML = '';
	} else {
	  document.getElementById('note').innerHTML = setupDashNote + ezSayItModel.ezobj[pg].note;
	} 
	
	if ( ezSayItModel.ezobj[pg].caption == '' || ezSayItModel.ezobj[pg].caption == false || 'caption' in ezSayItModel.ezobj[pg] === false ) {
	 document.getElementById('caption').innerHTML = ''; 
	} else {
	  document.getElementById('caption').innerHTML = ezSayItModel.ezobj[pg].caption;
	} 
}

document.getElementById('page-wrap').style.opacity="1";
}