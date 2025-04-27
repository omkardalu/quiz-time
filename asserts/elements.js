const element = ({ element, className, id, src, href, target, children }) => {
  const htmlElement = document.createElement(element);
  htmlElement.className = className || '';
  htmlElement.id = id || '';

  if (element === 'a') {
    htmlElement.href = href || '';
    htmlElement.target = target || '';
  }

  if (element === 'img') {
    htmlElement.src = src || '';
  }
  
  if (Array.isArray(children)) {
    for (const child of children) {
      try {
        htmlElement.appendChild(child || '');
      } catch (e) {
        typeof (child) === 'string' && (htmlElement.innerText = child);
        console.log(e);
      }
    }
  } else {
    htmlElement.append(children || '');
  }

  return htmlElement;
};

export default element;
