# Documentation
## How To Setup SVG Forms
* The form should be inside a group "g" tag
* The group should have an attribute formsvgid
* The group should have an attribute formsvgaction
* The group should have an attribute formsvgmethod
* Optionally group can have formsvg_error_message attribute set to a message to be shown when form is not valid
* The group should have class w1200, w992, w768 or w576
* All the inputs, select, textarea and label shapes should have "element" attribute with the value "inputs", "select", "textarea" and "label" 
* If the "element" attribute is set to input, set "element_type" attribute to the type of the input
* If the form element needs to have any additional attributes add that attribute and value to the relevant svg element with "element_" prepended to it
* All the form elements and their related label (if any) should be inside a group
* A CSS rule should be written for all form element groups that have "invalid" class