
module.exports = function({ shim, body }) {
  return /* html */ `
    <!doctype html>
    <html lang="en">
    <title>Fritz app</title>
    <meta charset="utf-8">
    <script>${shim}</script>

    ${body}

    <div>
      <blockquote>
        <span>Something</span>
      </blockquote>
    </div>
  `;
};