function loadMarkdown(file) {
  fetch(file)
    .then((response) => response.text())
    .then((markdown) => {
      const html = marked(markdown);
      document.getElementById("markdown-container").innerHTML = html;
    });
}
