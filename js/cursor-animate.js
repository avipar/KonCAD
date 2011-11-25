	var captionLength =0;
	var caption = "";

	function testTypingEffect()
	{
	  caption = $("input#userCaption").val();
	  type();
	}

	function type()
	{
	    $('p.caption').html(caption.substr(0, captionLength++));
	    if(captionLength < caption.length+1)
	    {
	        setTimeout("type()", 50);
	    }
	    else {
	        captionLength = 0;
	        caption = "";
	    }
	}

	function cursorAnimation() 
	{
	  $("p.cursor").animate(
	  {
	    opacity: 0
	  }, "fast", "swing").animate(
	  {
	    opacity: 1
	  }, "fast", "swing");
	}