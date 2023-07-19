function formToSvg(formsvgid) {
  // Select SVG group elements with specific attributes and store them in variables
  const form1200 = document.querySelector(`svg[g=formsvgid][class=w1200]`);
  const form992 = document.querySelector(`svg[g=formsvgid][class=w992]`);
  const form768 = document.querySelector(`svg[g=formsvgid][class=w768]`);
  const form576 = document.querySelector(`svg[g=formsvgid][class=w576]`);

  // Function to render the appropriate form based on the current resolution
  function renderForm(currentResolution, form1200, form992, form768, form576) {
    if (currentResolution >= 1200 && form1200) {
      form1200.style.display = 'block';
      form992.style.display = 'none';
      form768.style.display = 'none';
      form576.style.display = 'none';
    } else if (currentResolution >= 992 && form992) {
      form1200.style.display = 'none';
      form992.style.display = 'block';
      form768.style.display = 'none';
      form576.style.display = 'none';
    } else if (currentResolution >= 768 && form768) {
      form1200.style.display = 'none';
      form992.style.display = 'none';
      form768.style.display = 'block';
      form576.style.display = 'none';
    } else if (form576) {
      form1200.style.display = 'none';
      form992.style.display = 'none';
      form768.style.display = 'none';
      form576.style.display = 'block';
    }
  }

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
      form992.style.display = 'none';
      form768.style.display = 'none';
      form576.style.display = 'none';

      // Select all children of form1200 with the "element" attribute set to inputs, select, textarea, label, button
      form1200.querySelectorAll('[element="inputs"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        form1200.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        foreignObject.setAttribute('height', thisElement.getAttribute('height'));

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
    } else if (currentResolution > 992) {
      // Remove all foreignObject elements from form1200, form768, form576
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form768.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form576.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form768, form576
      form1200.style.display = 'none';
      form768.style.display = 'none';
      form576.style.display = 'none';

      // Select all children of form992 with the "element" attribute set to inputs, select, textarea, label, button
      form992.querySelectorAll('[element="inputs"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        form992.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        foreignObject.setAttribute('height', thisElement.getAttribute('height'));

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

    } else if (currentResolution > 768) {
      // Remove all foreignObject elements from form1200, form992, form576
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form992.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form576.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form992, form576
      form1200.style.display = 'none';
      form992.style.display = 'none';
      form576.style.display = 'none';

      // Select all children of form768 with the "element" attribute set to inputs, select, textarea, label, button
      form768.querySelectorAll('[element="inputs"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        form768.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        foreignObject.setAttribute('height', thisElement.getAttribute('height'));

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
    } else {
      // Remove all foreignObject elements from form1200, form992, form768
      form1200.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form992.querySelectorAll('foreignObject').forEach((element) => element.remove());
      form768.querySelectorAll('foreignObject').forEach((element) => element.remove());

      // Hide form1200, form992, form768
      form1200.style.display = 'none';
      form992.style.display = 'none';
      form768.style.display = 'none';

      // Select all children of form576 with the "element" attribute set to inputs, select, textarea, label, button
      form576.querySelectorAll('[element="inputs"], [element="select"], [element="textarea"], [element="label"], [element="button"]').forEach(thisElement => {
        // Append each thisElement item with a foreignObject element
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        form576.appendChild(foreignObject);

        // Set the x, y, width, and height attributes for foreignObject same as thisElement
        foreignObject.setAttribute('x', thisElement.getAttribute('x'));
        foreignObject.setAttribute('y', thisElement.getAttribute('y'));
        foreignObject.setAttribute('width', thisElement.getAttribute('width'));
        foreignObject.setAttribute('height', thisElement.getAttribute('height'));

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
  } else if (currentResolution > 992) {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w992"]`);
  } else if (currentResolution > 768) {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w768"]`);
  } else {
    svgForm = document.querySelector(`g[formsvgid="${formId}"][class="w576"]`);
  }

  const elements = svgForm.querySelectorAll('[element="inputs"], [element="select"], [element="textarea"], [element="label"], [element="button"]');
  
  elements.forEach(thisElement => {
    const regex = new RegExp(thisElement.getAttribute('aria-regex'));
    if (!regex.test(thisElement.value)) {
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
  xhr.onload = function () {
    try {
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
  };
  xhr.onerror = function () {
    console.error('AJAX request failed.');
    alert('Unknown error occurred. Check console error messages for details');
  };
  xhr.send(formData);
}
