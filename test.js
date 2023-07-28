function formEventHandler(pseudoSelector){
  document.querySelectorAll(".element_container").forEach((list, n)=>{

    // const list = document.getElementById("list");
    const elementsWithId = list.querySelectorAll("[element_id]");
    const normalElement = elementsWithId.querySelector("[pseudo_class=normal");
    const pseudoElement = elementsWithId.querySelector(`[pseudo_class=${pseudoSelector}]`);

    console.log("elementsWithId: ", elementsWithId);

    list.addEventListener("mouseenter", () => {
      list.insertBefore(pseudoElement, lastItemWithId);
      list.insertBefore(normalElement, pseudoElement);
    });

    list.addEventListener("mouseleave", () => {
      list.insertBefore(normalElement, lastItemWithId);
      list.insertBefore(pseudoElement, lastItemWithId);
    });
  });
}
