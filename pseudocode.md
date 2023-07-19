# Javascript SVG To Form Routine:
* Function Name: formToSvg()
* Parameters, formsvgid attribute name
* Do the following operations:
	* Select the svg group elemeng 'g' with attribute formsvgid same as provided in formToSvg() function and class w1200, then store in variable named form1200
	* Select the svg group element 'g' with attribute formsvgid same as provided in formToSvg() function and class w992, then store in variable named form992
	* Select the svg group element 'g' with attribute formsvgid same as provided in formToSvg() function and class w768, then store in variable named form768
	* Select the svg group element 'g' with attribute formsvgid same as provided in formToSvg() function and class w576, then store in variable named form576
	* Get current browser window width and store it in variable currentResolution
	* Run the "renderForm(currentResolution, form1200, form992, form768, form576)" routine with the value of current browser width stored in currentResolution passed as argument
	* Wait for change in browser width and then get the browser window width again and store it in currentResolution and then run the "renderForm(currentResolution, form1200, form992, form768, form576)" routine with the value of current browser width passed as argument
* Function Name: renderForm()
	* If currentResolution is greater than 1200 then do the following:
		* Remove all foreignObject elements from form992, form768, form576
		* Hide form992, form768, form576
		* Select all children of form1200 with the "element" attribute set to inputs, select, textarea, label, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is a elementType attribute set for thisElement, set the type attribute of the newFormElement to that
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormELement inside the foreignObject tag
	* Else if currentResolution is greater than 992 then do the following:
		* Remove all foreignObject elements from form1200, form768, form576
		* Hide form1200, form768, form567
		* Select all children of form992 with the "element" attribute set to inputs, select, textarea, label, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* Create the tag with the same tagname menioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is an elementType attribute set for thisElement, set the type attribute of the elements and save in newFormElement variable
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag
	* Else if currentResolution is greater than 768 then do the following:
		* Remove all foreignObject elements from form1200, form992, form576
		* Hide form1200, form992, form576
		* Select all children of form768 with the "element" attribute set to inputs, select, textarea, label, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is an elementType attribute set for thisElement, set the type attribute of the elements and save in newFormElement variable
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag
	* Else do the following
		* Remove all foreignObject elements from form1200, form992, form768
		* Hide form1200, form992, form768
		* Select all children of form576 with the "element" attribute set to inputs, select, textarea, label, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is an elementTye attribute set for thisElement, set the type attribute of the elements and save in newFormElement variable
		* Set the css width and height of newFormElement to 100%
		* Set the id of newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag