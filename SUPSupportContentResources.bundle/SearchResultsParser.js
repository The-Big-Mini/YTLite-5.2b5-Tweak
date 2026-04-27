window['<visit_id>'] = function(js_obj) {
  if (js_obj) {
    try {
      var results = js_obj.getChild().getResults();
      window.webkit.messageHandlers.searchResults.postMessage(results);
    } catch (err) {
      window.webkit.messageHandlers.searchResults.postMessage(err.message);
    }
  } else {
    window.webkit.messageHandlers.searchResults.postMessage(
        'js object is null');
  }
};
