// setup the SIMPLE page controls
var pages = '<a href="#" title="Prev">' + '&lt;' + '</a><a href="#" title="Next">' + '&gt;' + '</a>' + '<span id="c-page">' + ' [ 1 ] ' + '</span>';
var pagesOffset = 2;
// setup the page numbers
ezSayItModel.ezobj.reverse();
for (i = 0; i < ezSayItModel.ezobj.length; i++) {
  thisSummary = ezSayItModel.ezobj[i].summary;
  pages = pages + '<a href="#" title="' + thisSummary + '">' + (i + 1) + '</a>';
}

// add the pages list
var pgs = document.getElementById('pages');
pgs.innerHTML = pages;

// setup the onclick for the pages
var childrens = pgs.getElementsByTagName("a");
for (i = 0; i < childrens.length; i++) {
  childrens[i].onclick = function() {
    doPage(this,ezSayItModel);  
  }
}
// start with page 1
doPage(childrens[0 + pagesOffset],ezSayItModel);

// when there's a click doPage
function doPage(thisPage, ezSayItModel){
  if ( thisPage.innerHTML == '&gt;' || thisPage.innerHTML == '&lt;' ){
    if ( typeof pg === 'undefined'){
     pg = 1;
   } else {
     if (thisPage.innerHTML == '&gt;' && (pg + 1) != ezSayItModel.ezobj.length){
	   pg = pg + 1;
	 } else{
	   if (thisPage.innerHTML == '&lt;' && pg != 0){
	     pg = pg - 1;
	   }
	 }
   }
  } else {
    pg = parseInt(thisPage.innerHTML) - 1;
  }
    document.getElementById('c-page').innerHTML = ' [ ' + (pg + 1) + ' ] ';
	var theWrap =document.getElementById('wrap');
	theWrap.setAttribute("class", 'wrap wrap-'  + (pg + 1)); //For Most Browsers
	theWrap.setAttribute("className", 'wrap wrap-' + (pg + 1)); //For IE; harmless to other browsers

	if ( ezSayItModel.ezobj[pg].title == '' || ezSayItModel.ezobj[pg].title == false || 'title' in ezSayItModel.ezobj[pg] === false ) {	
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
	}else{
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