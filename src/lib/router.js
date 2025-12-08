import { writable } from "svelte/store";

export const currentRoute = writable("/about");

export function navigate(path) {
  history.pushState({}, "", path);
  currentRoute.set(path);
}
