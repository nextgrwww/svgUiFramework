function formToSvg(formsvgid) {
  console.log("formToSvg() function ran with formsvgid: " + formsvgid);
  // Select SVG group elements with specific attributes and store them in variables
  const form1200 = document.querySelector(`g[formsvgid=${formsvgid}][class=w1200]`);
  const form992 = document.querySelector(`g[formsvgid=${formsvgid}][class=w992]`);
  const form768 = document.querySelector(`g[formsvgid=${formsvgid}][class=w768]`);
  const form576 = document.querySelector(`g[formsvgid=${formsvgid}][class=w576]`);

  console.log(form1200, form992, form768, form576);

  // Initial render based on the current browser window width
  const currentResolution = window.innerWidth;
  renderForm(currentResolution, form1200, form992, form768, form576);

  // Function to handle the change in browser window width and re-render the form
  function handleResize() {
    const newResolution = window.innerWidth;
    renderForm(newResolution, form1200, form992, form768, form576);
  }

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
}

function renderForm(currentResolution, form1200, form992, form768, form576) {
  try{  
    if (currentResolution > 1200) {
      // Remove all foreignObject elements from form992, form768, form576
      form992.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form768.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form576.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form992, form768, form576
      form992.closest("svg").style.display = 'none';
      form768.closest("svg").style.display = 'none';
      form576.closest("svg").style.display = 'none';

      // Select all children of form1200 with the "element" attribute set to inputs, select, textarea, label, button
      console.log("form1200: ", form1200);
      form1200.querySelectorAll('[element="input"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {

        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        thisElement.closest("g").appendChild(foreignObject);
        // form1200.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        console.log("thisElement: ", thisElement);
        
        console.log("thisElement.x: " + thisElement.getAttribute("x"));
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        
        console.log("thisElement.y: " + thisElement.getAttribute("y"));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        
        console.log("thisElement.width: " + thisElement.getAttribute("width"));
        if(thisElement.getAttribute('width')) foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        else foreignObject.setAttribute('width', thisElement.getBoundingClientRect().width)
        
        console.log("thisElement.height: " + thisElement.getAttribute("height"));
        if(thisElement.getAttribute('height')) foreignObject.setAttribute('height', thisElement.getAttribute('height'));
        else foreignObject.setAttribute('height', thisElement.getBoundingClientRect().height);

        // If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
        const transform = thisElement.getAttribute('transform');
        const transform2 = thisElement.style.transform;
        if (transform) {
          // alert("Transform information for " + thisElement.getAttribute("element_id") + " found in attributes: " + transform); // debug alert
          foreignObject.setAttribute("transform", transform);
        }
        else{
          // alert("Transform information " + thisElement.getAttribute("element_id") + " found in CSS: " + transform2); // debug alert
          foreignObject.style.transform = transform2;
        }

        // Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
        const newFormElement = document.createElement(thisElement.getAttribute('element'));

        // If there is an element_type attribute set for thisElement, set the type attribute of the newFormElement to that
        const elementType = thisElement.getAttribute('element_type');
        
        if (elementType) {
          newFormElement.setAttribute('type', elementType);
        }

        // Loop through all attributes of thisElement
        for (const attr of thisElement.attributes) {
          // Check if the attribute name starts with 'element_'
          if (attr.name.startsWith('element_')) {
            // Get the attribute name without 'element_' prefix
            const attributeName = attr.name.slice(8);

            // alert("Setting attribute " + attributeName + " with value " + attr.value + " for " + newFormElement.outerHTML); // debug alert
            // Add the attribute and value to the newFormElement
            newFormElement.setAttribute(attributeName, attr.value);
          }
        }

        // Set the css width and height of newFormElement to 100%
        newFormElement.style.width = '100%';
        newFormElement.style.height = '100%';

        // Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
        newFormElement.setAttribute('id', thisElement.getAttribute('element_id'));

        // Set the name of newFormElement to the elementName attribute of thisElement
        newFormElement.setAttribute('name', thisElement.getAttribute('element_name'));

        // Remove all borders and outlines etc from newFormElement element
        newFormElement.style.border = 'none';
        newFormElement.style.outline = 'none';

        // Put this newFormElement inside the foreignObject tag
        foreignObject.appendChild(newFormElement);
      });
    } 
    else if (currentResolution > 992) {
      // Remove all foreignObject elements from form1200, form768, form576
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form768.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form576.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form768, form576
      form1200.closest("svg").style.display = 'none';
      form768.closest("svg").style.display = 'none';
      form576.closest("svg").style.display = 'none';

      // Select all children of form992 with the "element" attribute set to inputs, select, textarea, label, button
      form992.querySelectorAll('[element="input"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        thisElement.closest("g").appendChild(foreignObject);
        // form992.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        console.log("thisElement: ", thisElement);
        
        console.log("thisElement.x: " + thisElement.getAttribute("x"));
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        
        console.log("thisElement.y: " + thisElement.getAttribute("y"));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        
        console.log("thisElement.width: " + thisElement.getAttribute("width"));
        if(thisElement.getAttribute('width')) foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        else foreignObject.setAttribute('width', thisElement.getBoundingClientRect().width)
        
        console.log("thisElement.height: " + thisElement.getAttribute("height"));
        if(thisElement.getAttribute('height')) foreignObject.setAttribute('height', thisElement.getAttribute('height'));
        else foreignObject.setAttribute('height', thisElement.getBoundingClientRect().height);

        // If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
        const transform = thisElement.getAttribute('transform');
        if (transform) {
          foreignObject.style.transform = transform;
        }

        // Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
        const newFormElement = document.createElement(thisElement.getAttribute('element'));

        // If there is an element_type attribute set for thisElement, set the type attribute of the newFormElement to that
        const elementType = thisElement.getAttribute('element_type');
        if (elementType) {
          newFormElement.setAttribute('type', elementType);
        }

        // Loop through all attributes of thisElement
        for (const attr of thisElement.attributes) {
          // Check if the attribute name starts with 'element_'
          if (attr.name.startsWith('element_')) {
            // Get the attribute name without 'element_' prefix
            const attributeName = attr.name.slice(8);
            // Add the attribute and value to the newFormElement
            newFormElement.setAttribute(attributeName, attr.value);
          }
        }

        // Set the css width and height of newFormElement to 100%
        newFormElement.style.width = '100%';
        newFormElement.style.height = '100%';

        // Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
        newFormElement.setAttribute('id', thisElement.getAttribute('elementId'));

        // Set the name of newFormElement to the elementName attribute of thisElement
        newFormElement.setAttribute('name', thisElement.getAttribute('elementName'));

        // Remove all borders and outlines etc from newFormElement element
        newFormElement.style.border = 'none';
        newFormElement.style.outline = 'none';

        // Put this newFormElement inside the foreignObject tag
        foreignObject.appendChild(newFormElement);
      });
    } 
    else if (currentResolution > 768) {
      // Remove all foreignObject elements from form1200, form992, form576
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form992.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form576.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form992, form576
      form1200.closest("svg").style.display = 'none';
      form992.closest("svg").style.display = 'none';
      form576.closest("svg").style.display = 'none';

      // Select all children of form768 with the "element" attribute set to inputs, select, textarea, label, button
      form768.querySelectorAll('[element="input"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        thisElement.appendChild(foreignObject);
        // form768.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        console.log("thisElement: ", thisElement);
        
        console.log("thisElement.x: " + thisElement.getAttribute("x"));
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        
        console.log("thisElement.y: " + thisElement.getAttribute("y"));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        
        console.log("thisElement.width: " + thisElement.getAttribute("width"));
        if(thisElement.getAttribute('width')) foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        else foreignObject.setAttribute('width', thisElement.getBoundingClientRect().width)
        
        console.log("thisElement.height: " + thisElement.getAttribute("height"));
        if(thisElement.getAttribute('height')) foreignObject.setAttribute('height', thisElement.getAttribute('height'));
        else foreignObject.setAttribute('height', thisElement.getBoundingClientRect().height);

        // If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
        const transform = thisElement.getAttribute('transform');
        if (transform) {
          foreignObject.style.transform = transform;
        }

        // Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
        const newFormElement = document.createElement(thisElement.getAttribute('element'));

        // If there is an element_type attribute set for thisElement, set the type attribute of the newFormElement to that
        const elementType = thisElement.getAttribute('element_type');
        if (elementType) {
          newFormElement.setAttribute('type', elementType);
        }

        // Loop through all attributes of thisElement
        for (const attr of thisElement.attributes) {
          // Check if the attribute name starts with 'element_'
          if (attr.name.startsWith('element_')) {
            // Get the attribute name without 'element_' prefix
            const attributeName = attr.name.slice(8);
            // Add the attribute and value to the newFormElement
            newFormElement.setAttribute(attributeName, attr.value);
          }
        }

        // Set the css width and height of newFormElement to 100%
        newFormElement.style.width = '100%';
        newFormElement.style.height = '100%';

        // Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
        newFormElement.setAttribute('id', thisElement.getAttribute('elementId'));

        // Set the name of newFormElement to the elementName attribute of thisElement
        newFormElement.setAttribute('name', thisElement.getAttribute('elementName'));

        // Remove all borders and outlines etc from newFormElement element
        newFormElement.style.border = 'none';
        newFormElement.style.outline = 'none';

        // Put this newFormElement inside the foreignObject tag
        foreignObject.appendChild(newFormElement);
      });
    } 
    else {
      // Remove all foreignObject elements from form1200, form992, form768
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form992.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form768.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form992, form768
      form1200.closest("svg").style.display = 'none';
      form992.closest("svg").style.display = 'none';
      form768.closest("svg").style.display = 'none';

      // Select all children of form576 with the "element" attribute set to inputs, select, textarea, label, button
      form576.querySelectorAll('[element="input"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        thisElement.closest("g").appendChild(foreignObject);
        // form576.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        console.log("thisElement: ", thisElement);
        
        console.log("thisElement.x: " + thisElement.getAttribute("x"));
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        
        console.log("thisElement.y: " + thisElement.getAttribute("y"));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        
        console.log("thisElement.width: " + thisElement.getAttribute("width"));
        if(thisElement.getAttribute('width')) foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        else foreignObject.setAttribute('width', thisElement.getBoundingClientRect().width)
        
        console.log("thisElement.height: " + thisElement.getAttribute("height"));
        if(thisElement.getAttribute('height')) foreignObject.setAttribute('height', thisElement.getAttribute('height'));
        else foreignObject.setAttribute('height', thisElement.getBoundingClientRect().height);

        // If there is a transform attribute of CSS transform property set for thisElement, apply that as css transform to the foreignObject
        const transform = thisElement.getAttribute('transform');
        if (transform) {
          foreignObject.style.transform = transform;
        }

        // Create the tag with the same tagname mentioned in the "element" attribute of the elements and save in newFormElement variable
        const newFormElement = document.createElement(thisElement.getAttribute('element'));

        // If there is an element_type attribute set for thisElement, set the type attribute of the newFormElement to that
        const elementType = thisElement.getAttribute('element_type');
        if (elementType) {
          newFormElement.setAttribute('type', elementType);
        }

        // Loop through all attributes of thisElement
        for (const attr of thisElement.attributes) {
          // Check if the attribute name starts with 'element_'
          if (attr.name.startsWith('element_')) {
            // Get the attribute name without 'element_' prefix
            const attributeName = attr.name.slice(8);
            // Add the attribute and value to the newFormElement
            newFormElement.setAttribute(attributeName, attr.value);
          }
        }

        // Set the css width and height of newFormElement to 100%
        newFormElement.style.width = '100%';
        newFormElement.style.height = '100%';

        // Set the id of the newFormElement to the elementId attribute value mentioned in thisElement
        newFormElement.setAttribute('id', thisElement.getAttribute('elementId'));

        // Set the name of newFormElement to the elementName attribute of thisElement
        newFormElement.setAttribute('name', thisElement.getAttribute('elementName'));

        // Remove all borders and outlines etc from newFormElement element
        newFormElement.style.border = 'none';
        newFormElement.style.outline = 'none';

        // Put this newFormElement inside the foreignObject tag
        foreignObject.appendChild(newFormElement);
      });
    }
    if(document.querySelector('[element_type=submit]')) document.querySelector('[element_type=submit]').setAttribute("onclick", "validateNSubmitThis(this)");
    if(document.querySelector('[element_type=reset')) document.querySelector('[element_type=reset').setAttribute("onclick", "clearThis(this)");
  } catch (error) {
    console.error('Error in SVG form construction:', error.message);
    alert('Your SVG form is not constructed according to the standards defined. Please check error log.');
  }
}

function validateNSubmit(formId, dynamic) {
  const formData = new FormData();
  let formValid = true;
  const currentResolution = window.innerWidth;

  let svgForm;
  if (currentResolution > 1200) {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w1200"]`);
  } 
  else if (currentResolution > 992) {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w992"]`);
  } 
  else if (currentResolution > 768) {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w768"]`);
  } 
  else {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w576"]`);
  }

  // const elements = svgForm.querySelectorAll('[element="input"], [element="select"], [element="textarea"], [element="label"], [element="button"]');
  const elements = svgForm.querySelectorAll('input, select, textarea');
  
  elements.forEach(thisElement => {
    const regex = new RegExp(thisElement.getAttribute('aria-regex'));
    const regexString = thisElement.getAttribute('aria-regex');
    if (regexString && regexString!='' && !regex.test(thisElement.value)) {
      const parentG = thisElement.closest('g');
      parentG.classList.add('invalid');
      formValid = false;
    } else {
      formData.append(thisElement.getAttribute('name'), thisElement.value);
    }
  });

  if (!formValid) {
    const errorMessage = svgForm.getAttribute('formsvg_error_message');
    alert(errorMessage ? errorMessage : 'Errors on form');
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open(svgForm.getAttribute('formsvgmethod'), svgForm.getAttribute('formsvgaction'), true);
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState==4 && xhr.status==200){    
      try {
        console.log(xhr.responseText);
        const JSO = JSON.parse(xhr.responseText);
        if (JSO.return_message) {
          alert(JSO.return_message);
        }
        if (JSO.redirect) {
          window.location.href = JSO.redirect;
        }
      } catch (error) {
        console.error(error);
        alert('Unknown error occurred. Check console error messages for details');
      }
    }
  }
  xhr.onerror = function () {
    console.error('AJAX request failed.');
    alert('Could not process request. Unknown error occurred. Check console error messages for details');
  };
  xhr.send(formData);
}

function validateNSubmitThis(target){
  console.log(target);
  var formId = target.closest('svg').querySelector('[formsvgid]').getAttribute('formsvgid');
  validateNSubmit(formId);
}

function clearForm(formsvgid) {
  // Select element with attribute formsvgid set to the 'formsvgid' parameter passed to the function and store in formElement variable
  const formElement = document.querySelector(`[formsvgid="${formsvgid}"]`);

  // Select all input, textarea and select tags inside formElement using .querySelectorAll() method
  const formInputs = formElement.querySelectorAll('input, textarea, select');

  // Reset all the above selected elements to their default values
  formInputs.forEach(inputElement => {
    switch (inputElement.tagName.toLowerCase()) {
      case 'input':
        switch (inputElement.type.toLowerCase()) {
          case 'radio':
          case 'checkbox':
            inputElement.checked = false;
            break;
          default:
            inputElement.value = '';
            break;
        }
        break;
      case 'textarea':
        inputElement.value = '';
        break;
      case 'select':
        inputElement.selectedIndex = 0;
        break;
    }
  });
}


function clearThis(target){
  console.log(target);
  var formId = target.closest('svg').querySelector('[formsvgid]').getAttribute('formsvgid');
  clearForm(formId);
}



// // Get all the elements with attribute "pseudo_selector" inside the <g> tag
// const elements = document.querySelectorAll("g [pseudo_selector]");

// // Attach event listeners to each element
// elements.forEach((element) => {
//   element.addEventListener("mouseenter", () => {
//     // When mouse hovers over the "hover" element, bring it forward
//     if (element.getAttribute("pseudo_selector") === "hover") {
//       element.parentNode.appendChild(element);
//         console.log("Element hovered");
//     }
//   });

//   element.addEventListener("mouseleave", () => {
//     // When the mouse is not hovering over the "hover" element, bring the "normal" element forward
//     if (element.getAttribute("pseudo_selector") === "normal") {
//       element.parentNode.appendChild(element);
//     }
//   });
// });

function formEventHandler(pseudoSelector){
  document.querySelectorAll(".element_container").forEach((list, n)=>{

    // const list = document.getElementById("list");
    const elementsWithId = list.querySelectorAll("[element_id]");
    const lastItemWithId = elementsWithId[elementsWithId.length-1];
    console.log("elementsWithId: ", elementsWithId);
    const normalElement = list.querySelector("[pseudo_selector=normal");
    const pseudoElement = list.querySelector(`[pseudo_selector=${pseudoSelector}]`);
    if(normalElement && pseudoElement){
      console.log("Both normalElement & pseudoElement found. Going to add add event listeners");
      list.addEventListener("mouseenter", () => {
        console.log("hovered over...");
        list.insertBefore(pseudoElement, lastItemWithId);
        list.insertBefore(normalElement, pseudoElement);
      });

      list.addEventListener("mouseleave", () => {
        console.log("hovered out...");
        list.insertBefore(normalElement, lastItemWithId);
        list.insertBefore(pseudoElement, lastItemWithId);
      });
    }
    else{
      console.log("Either normal or pseudo element is missing..", normalElement, pseudoElement);
    }
  });
}
