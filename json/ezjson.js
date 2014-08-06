/**
 * <br> = return
 * <br><br> = paragraph break
 *
 * * * * * * * IMPORTANT  * * * * * * * 
 * * * Order is oldest on the bottom, newest on top. 
 * * * This is done so adding a new "page" doesn't require scrolling. Instead just stack it on top.
 *
 */

var ezSayItModel = {
  "ezobj":[
    {
	  'index'		: 3,
	  'title'		: 'TITLE Title',
      'idea_size'	: 110,	  
	  'idea'		:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br><br>Nam fringilla posuere ligula id aliquam. Sed bibendum ante facilisis porttitor ultrices. Proin mattis metus in mauris accumsan fringilla. Maecenas feugiat orci eu orci rutrum, ac sodales velit egestas. Duis mollis ultricies odio, nec aliquet ligula rhoncus in.",
	  'quotes'		: true,
	  'summary'		: 'sum 3',
	  'who'			: 'David Rock',
	  'note'		: 'Your Brain at Work - Chapter 2',
	  'caption' 	: setupCaption
    },
    {
	  'index'	: 2,
	  'title'	: '',
	  'idea_size'	: 90,
	  'idea'	: "This book will help you work smarter, be more focused and productive, stay cool under pressure, reduce the length of meetings, and even tackle the hardest challenge of all: influencing other people<br><br>This book will transform your performance at work by letting you in on recent and important discoveries about the human brain.",
	  'quotes'	: true,
	  'summary'	: 'sum 2',
	  'who'		: 'David Rock',
	  'note'	: 'Your Brain at Work - Introduction',
	  'caption'	: setupCaption
    },
    {
	  'index'	: 1,
	  'title'	: "", 
	  'idea'	: '<img src="img/cover.jpg">',
	  'quotes'	: false,
	  'summary'	: 'Cover: "Your Brain At Work" - David Rock',
	  'who'		: '',
	  'note'	: '',
	  'caption'	: setupCaption
    }
  ]}