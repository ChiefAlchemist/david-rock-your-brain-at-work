/**
 * *Not* min'ed (yet) because load is minimal and time short
 */
window.onload = function (){
  document.getElementById('page-wrap').style.opacity="0";

// setup the SIMPLE paging controls

  if ( typeof setupStyles != 'undefined' && setupStyles instanceof Array ){

    var selectStyle = document.createElement("select");
    selectStyle.setAttribute("id", "select-style");
  
    // setup the select for the style variation
    for (i = 0; i < setupStyles.length; i++) {
      option = document.createElement("option");
	  option.setAttribute("value", (i + 1));
	  option.innerHTML = setupStyles[i];
	  selectStyle.appendChild(option);
    }  
    document.getElementById('styles').appendChild(selectStyle);
  }

  if ( document.getElementById('select-style') instanceof Object) {
    // has the select been changed?
    objIdSelectStyle = document.getElementById('select-style');
    objIdSelectStyle.onchange=function(){
      document.getElementsByTagName('body')[0].className = 'style-' + objIdSelectStyle.value;
    };
  }

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
objIdPage = document.getElementById('page');
objIdPage.options[currentPage-1].selected = true;

// has the select been changed?
objIdPage.onchange=function(){
  doPage(objIdPage.value, ezSayItModel);
  currentPage = objIdPage.value;
  window.location.hash = '#' + currentPage;
};

// next / down
document.getElementById('next-down').onclick = function() {
  if (currentPage >= ezSayItModel.ezobj.length){
    currentPage = ezSayItModel.ezobj.length;
  } else {
    currentPage = parseInt(currentPage) + 1;
	doPage(currentPage, ezSayItModel);
	objIdPage.options[currentPage-1].selected = true;
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
	objIdPage.options[currentPage-1].selected = true;
	window.location.hash = '#'+ currentPage;
  }
  return false;
}

// display the new "page"
function doPage(thisPage, ezSayItModel){
  // adjust for js starting at 0
  pg = parseInt(thisPage) - 1;
  var theWrap = document.getElementById('wrap');
  theWrap.setAttribute("class", 'wrap wrap-'  + (pg + 1)); //For Most Browsers
  theWrap.setAttribute("className", 'wrap wrap-' + (pg + 1)); //For IE; harmless to other browsers

  objIdTitle = document.getElementById('title');
  if ( 'title' in ezSayItModel.ezobj[pg] === false || ezSayItModel.ezobj[pg].title == '' || ezSayItModel.ezobj[pg].title == false ) {	
    objIdTitle.innerHTML = '';
	objIdTitle.style.display = "none";
  } else {
    objIdTitle.style.display = "block";
    objIdTitle.innerHTML = ezSayItModel.ezobj[pg].title;
  }
	
	objIdIdea = document.getElementById('idea');
	if ( ezSayItModel.ezobj[pg].idea_size == '' || ezSayItModel.ezobj[pg].idea_size == false || 'idea_size' in ezSayItModel.ezobj[pg] === false ) {	
	  objIdIdea.style.fontSize = '100%';
	} else {
	  objIdIdea.style.fontSize = ezSayItModel.ezobj[pg].idea_size + setupIdeaSizeUnit;
	} 
	
	if ( ezSayItModel.ezobj[pg].idea == '' || ezSayItModel.ezobj[pg].idea == false || 'idea' in ezSayItModel.ezobj[pg] === false ) {
	  objIdIdea.innerHTML = '';
	  objIdIdea.style.display = "none";
	} else {
	   objIdIdea.style.display = "block";
	  if (ezSayItModel.ezobj[pg].quotes != false){
	    objIdIdea.innerHTML = setupQuoteLeft + ezSayItModel.ezobj[pg].idea + setupQuoteRight;
	  } else { 
		objIdIdea.innerHTML = ezSayItModel.ezobj[pg].idea;
	  }	
	}
	
	objIdWho = document.getElementById('who');
	if ( ezSayItModel.ezobj[pg].who == '' || ezSayItModel.ezobj[pg].who == false || 'who' in ezSayItModel.ezobj[pg] === false ) {	
	  objIdWho.innerHTML = '';
	  objIdWho.style.display = "none";
	} else {
	  objIdWho.style.display = "block";
	  objIdWho.innerHTML = setupDashWho + ezSayItModel.ezobj[pg].who;
	}
	
	objIdNote = document.getElementById('note');
	if ( ezSayItModel.ezobj[pg].note == '' || ezSayItModel.ezobj[pg].note == false || 'note' in ezSayItModel.ezobj[pg] === false ) {
	  objIdNote.innerHTML = '';
	  objIdNote.style.display = "none";
	} else {
	  objIdNote.style.display = "block";
	  objIdNote.innerHTML = setupDashNote + ezSayItModel.ezobj[pg].note;
	} 
	
	objIdCaption = document.getElementById('caption');
	if ( ezSayItModel.ezobj[pg].caption == '' || ezSayItModel.ezobj[pg].caption == false || 'caption' in ezSayItModel.ezobj[pg] === false ) {
	 objIdCaption.innerHTML = ''; 
	 objIdCaption.style.display = "none";
	} else {
	  objIdCaption.style.display = "block";
	  objIdCaption.innerHTML = ezSayItModel.ezobj[pg].caption;
	} 
}

document.getElementById('page-wrap').style.opacity="1";
}