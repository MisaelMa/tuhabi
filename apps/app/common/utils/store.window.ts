import { Sell } from "../hooks/context/sell.context";

export function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

export function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    const loadState = JSON.parse(value) as Sell;
    return value ? loadState : initialValue;
  } catch (e) {
    return initialValue;
  }
}

export function getFile(base64: string) {
  var arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], "picture", { type: mime });
}

export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0;
}
