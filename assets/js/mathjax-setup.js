window.MathJax = {
  tex: {
    tags: "ams",
    // Use only \( ... \) for inline math so currency like $12,000
    // is never parsed as MathJax.
    inlineMath: [["\\(", "\\)"]],
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
