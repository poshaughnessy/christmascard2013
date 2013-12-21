var iframeEl = document.getElementById('scene');

if (iframeEl.contentWindow) {
    iframeEl.contentWindow.focus();
}
