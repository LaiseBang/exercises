function getList(catArrI) {
  let ul = catArrI.parentElement.nextElementSibling;

  if (ul.tagName.toLowerCase() != "ul") {
    ul = ul.nextElementSibling;
  }

  const list = Array.from(ul.children).map(a => a.textContent);

  return list;
}

catArr.map(getList);
