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
* Function Name: renderForm(currentResolution, form1200, form992, form768, form576)
	* If currentResolution is greater than 1200 then do the following:
		* Remove all foreignObject elements from form992, form768, form576
		* Hide form992, form768, form576
		* Select all children of form1200 with the "element" attribute set to inputs, select, textarea, label, button, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is a element_type attribute set for thisElement, set the type attribute of the newFormElement to that
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormELement inside the foreignObject tag
	* Else if currentResolution is greater than 992 then do the following:
		* Remove all foreignObject elements from form1200, form768, form576
		* Hide form1200, form768, form567
		* Select all children of form992 with the "element" attribute set to inputs, select, textarea, label, button, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is a element_type attribute set for thisElement, set the type attribute of the newFormElement to that
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag
	* Else if currentResolution is greater than 768 then do the following:
		* Remove all foreignObject elements from form1200, form992, form576
		* Hide form1200, form992, form576
		* Select all children of form768 with the "element" attribute set to inputs, select, textarea, label, button, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is a element_type attribute set for thisElement, set the type attribute of the newFormElement to that
		* Set the css width and height of newFormElement to 100%
		* Set the id of the newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag
	* Else do the following
		* Remove all foreignObject elements from form1200, form992, form768
		* Hide form1200, form992, form768
		* Select all children of form576 with the "element" attribute set to inputs, select, textarea, label, button, looping through each using forEach(thisElement) loop
		* Append each thisElement item with a foreignObject element
		* Set the x, y, width and height attributes for foreignObject same as thisElement
		* If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
		* Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
		* If there is a element_type attribute set for thisElement, set the type attribute of the newFormElement to that
		* Set the css width and height of newFormElement to 100%
		* Set the id of newFormElement to the elementId attribute value of thisElement
		* Set the name of newFormElement to the elementName attribute of thisElement
		* Remove all borders and outlines etc from newFormElement element
		* Put this newFormElement inside the foreignObject tag
* Function Name: validateNSubmit(formId, dynamic)
	* Take the following parameters: 
		* formId (string)
		* dynamic (boolean)
	* Then does the following operations:
		* Create a variable formData by using FormData() constructor
		* Create a formValid variable and set it to boolean true
		* Check window width and store in currentResolution variable
		* If the currentResolution is greater than 1200, store g element with formsvgid same as formId argument passed and class w1200 as svgForm variable
		* Else if the currentResolution is greater than 992, store g element with formsvgid same as formId argument passed and class w992 as svgForm variable
		* Else if the currentResolution is greater than 768, store g element with formsvgid same as formId argument passed and class w768 as svgForm variable
		* Else store g element with formsvgid same as formId argument passed and class w576 as svgForm variable
		* Select all children of the svgForm variable with the "element" attribute set to inputs, select, textarea, label, button, looping through each using forEach(thisElement) loop and do the following with each "thisElement":
			* Check if the regex in "aria-regex" attribute of thisElement matches the value of thisElement. If not, add class "invalid" to the parent g element and set the formValid variable to false
			* If it does match, get value of each of the "thisElement" and append to the formData variable with name of the thisElement being key and value of thisElement being value in the formData
		* If formData value is false after the loop then check if there is formsvg_error_message attribute in svgForm, if yes then display its value in alert message, otherwise show "Errors on form" in alert message
		* If formData value is true then send the formData using vanilla AJAX (no jquery) to the page mentioned in formsvgaction using the method formsvgmethod of the svgForm
		* JSON.parse() the responseText and store it in JSO variable
		* If JSO is successfully parsed then do the following:
			* If JSO.return_message exists, alert the string stored in JSO.return_message
			* If JSO.redirect exists, redirect to the URL in JSO.redirect
		* If JSO could not be successfully parsed, catch the error and display it in console.error() and alert the message "Unknown error occured. Check console error messages for details" using alert() popup