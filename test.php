<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<ul id="list">
		<li element_id='one'>Item 1</li>
		<li>Item 2</li>
		<li element_id='three'>Item 3</li>
		<li element_id='four'>Item 4</li>
		<li>Item 5</li>
		<li element_id='six'>Item 6</li>
		<li element_id='seven'>Item 7</li>
		<li element_id='eight'>Item 8</li>
		<li element_id='nine'>Item 9</li>
		<li>Item 10</li>
	</ul>
</body>
<script>
	/*
	const list = document.getElementById("list");
	const itemToMove = list.querySelector("li:nth-child(2)"); // Select the second li item

	// Get the last list item (assuming there are at least two items in the list)
	const lastItem = list.lastElementChild;
	const secondLastItem = lastItem.previousElementSibling;

	// Move the item before the last list item
	list.insertBefore(itemToMove, secondLastItem);
	*/

	/*
	const list = document.getElementById("list");
	const itemToMove = list.querySelector("li:nth-child(2)"); // Select the second li item

	list.addEventListener("mouseenter", () => {
	  // Get the last list item (assuming there are at least two items in the list)
	  const lastItem = list.lastElementChild;
	  const secondLastItem = lastItem.previousElementSibling;

	  // Move the item before the last list item
	  list.insertBefore(itemToMove, lastItem);
	});

	list.addEventListener("mouseleave", () => {
	  // Move the item back to its original position (as the second item)
	  list.insertBefore(itemToMove, list.children[1]);
	});
	*/
// alert("Hello");
document.querySelectorAll("ul").forEach((list, n)=>{

	// const list = document.getElementById("list");
	const elementsWithId = list.querySelectorAll("li[element_id]");

	console.log("elementsWithId: ", elementsWithId);

	list.addEventListener("mouseenter", () => {
	  const lastItemWithId = elementsWithId[elementsWithId.length - 1];
	  const secondItemWithId = elementsWithId[1]; // Index 1 since we want the second element with "element_id" defined
	  // alert(secondItemWithId.outerHTML);
	  console.log("secondItemWithId" + secondItemWithId);

	  // Move the second element with "element_id" defined before the last item with "element_id" defined
	  list.insertBefore(secondItemWithId, lastItemWithId);
	});

	list.addEventListener("mouseleave", () => {
	  // const firstItem = list.firstElementChild;
	  const firstItem = elementsWithId[0];
	  alert("First Item is: " + firstItem.outerHTML);
	  const secondItemWithId = elementsWithId[1]; // Index 1 since we want the second element with "element_id" defined
	  alert("Second Item with ID: " + secondItemWithId.outerHTML);

	  // Move the second element with "element_id" defined back to its original position (as the second item in the list)
	  list.insertBefore(secondItemWithId, firstItem.nextSibling);
	});
});


</script>
</html>