(function() {
if (!window || window.RedirectLandingMessageHandler || !navigator) {
  return;
}

var handler = {};
handler.sendLandingMessage = function(landingMessage) {
  var params = {'landing_message': landingMessage};
  navigator.googleInternal.dispatch(
      'redirectlandingmessageservice', 'sendLandingMessage', params);
};

window.RedirectLandingMessageHandler = handler;
})();
