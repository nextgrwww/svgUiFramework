# Documentation
## How To Setup SVG Forms
* The form should be inside a group "g" tag
* The group should have an attribute formsvgid
* The group should have an attribute formsvgaction
* The group should have an attribute formsvgmethod
* Optionally group can have formsvg_error_message attribute set to a message to be shown when form is not valid
* The group should have class w1200, w992, w768 or w576
* All the inputs, select, textarea and label shapes should have "element" attribute with the value "inputs", "select", "textarea" and "label" and optionally a pseudo-selector attribute set to any pseudo-selector like active, hover, click. (By default only pseudo-selector with value "normal" or with no pseudo-selector will be visible)
* 
* If the "element" attribute is set to input, set "element_type" attribute to the type of the input
* If the form element needs to have any additional attributes add that attribute and value to the relevant svg element with "element_" prepended to it
* All the form elements with their pseudo-selector copies and their related label (if any) should be inside a group with class element_container
* A CSS rule should be written for all form element groups that have "invalid" class
* The submit button should have an attribute "element_type" set to "submit"
* The reset button should have an attribute "element_type" set to "reset"

---

## How to setup content div
* Add a rectangle with element_type=div 
* Add element_id as id we wish to give (required)
* Add any other attributes prepended by the "element_" string
* Create a variable with JSON string in the following format: `[{"id": "elementID", "content": "Some content"}, {"id": "anotherID", "content": "Some more content"}]`;
* Add parseAndPrintContent(JSONData) function where JSONData is string containing content of the element in the format above

---

## How to add hover effect
* Give the parent element class "element_container"
* Add the attribute pseudo_selector with value "normal" to the element shape
* Duplicate the element with pseudo_selector value changed to "hover" and id set to same as normal shape with "hover" appended to it

---

## How to add click effect
* Give the parent element class "element_container"
* Add the attribute pseudo_selector with value "normal" to the element shape
* Duplicate the element with pseudo_selector value changed to "click" and id set to same as normal shape with "click" appended to it

---

## How to add active/focus effect
* Give the parent element class "element_container"
* Add the attribute pseudo_selector with value "normal" to the element shape
* Duplicate the element with pseudo_selector value changed to "active" and id set to same as normal shape with "active" appended to it
