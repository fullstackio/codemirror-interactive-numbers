(function() {
  var ele, myCodeMirror, text;

  ele = document.getElementsByClassName("editable")[0];

  text = ele.textContent || ele.innerText;

  ele.innerText = "";

  myCodeMirror = CodeMirror(ele, {
    value: text,
    mode: "javascript",
    interactiveNumbers: true
  });

}).call(this);
