/**
 * @fileoverview Bridge that transforms Gaia FE's JavaScript methods to WebKit
 * messages that can be handled by an iOS app.
 */

/**
 * Passes the message received as a result of the Embedded ReAuth flow to the
 * iOS app.
 * @param {string} message The stringified JSON sent from Gaia FE.
 * @return {boolean} Boolean indicating whether the message was successfully
 *     parsed.
 */
const setReauthResult = (message) => {
  // LINT.IfChange(handleSetReAuthResultMessage)
  const promise =
      window.webkit.messageHandlers.handleSetReAuthResultMessage.postMessage(
          message);
  // LINT.ThenChange(../../../EmbeddedReAuthConstants/EmbeddedReAuthConstants.swift:handleSetReAuthResultMessage)

  promise.then(
      function(result) {
        return true;
      },
      function(error) {
        return false;
      });
};

/**
 * Informs the app that the web view presenting the Embedded ReAuth flow should
 * be dismissed.
 */
const closeView = () => {
  // LINT.IfChange(handleCloseViewMessage)
  window.webkit.messageHandlers.handleCloseViewMessage.postMessage({});
  // LINT.ThenChange(../../../EmbeddedReAuthConstants/EmbeddedReAuthConstants.swift:handleCloseViewMessage)
};

window.ios = {
  'closeView': closeView,
  'setReauthResult': setReauthResult,
};
