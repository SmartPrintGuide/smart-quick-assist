type JivoApi = {
  open?: () => void;
  show?: () => void;
  openChat?: () => void;
  launch?: () => void;
};

declare global {
  interface Window {
    jivo_api?: JivoApi;
  }
}

export function openJivoChat() {
  if (typeof window === "undefined") {
    return;
  }

  const jivoApi = window.jivo_api;
  const candidates = [jivoApi?.open, jivoApi?.show, jivoApi?.openChat, jivoApi?.launch];

  for (const candidate of candidates) {
    if (typeof candidate === "function") {
      try {
        candidate.call(jivoApi);
        return;
      } catch (error) {
        alert("Failed to open Jivo chat. Please try again later.");
        console.error("Failed to open Jivo chat", error);
      }
    }
  }

  const jivoWidget = document.querySelector<HTMLElement>(
    "[data-jivo-id], #jivo_chat_widget, #jivo-iframe, .jivo-iframe"
  );

  if (jivoWidget) {
    try {
      jivoWidget.click();
      return;
    } catch (error) {
      console.error("Failed to click Jivo widget", error);
    }
  }

  try {
    window.open("https://www.jivosite.com", "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Failed to open Jivo fallback link", error);
  }

  alert("Chat is not opening right now. Please try again in a moment or contact us directly.");
}
