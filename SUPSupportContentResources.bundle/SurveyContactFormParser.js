window.form = function(page) {
  var formObj = page.getChild('form');
  formObj.listen('submitend', function() {
    window.webkit.messageHandlers['surveySubmitted'].postMessage({});
  });
};
