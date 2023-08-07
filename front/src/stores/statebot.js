import { writable } from "svelte/store";

export const stateStore = writable({ rout: "botlist", 
                                    showmenu: false,
                                    selectbotname: "",
                                    urlhost: "https://1880-tirudin-tir5-q4yjt6i3115.ws-eu102.gitpod.io/",
                                    urlhostenv: "https://1880-tirudin-tir5-q4yjt6i3115.ws-eu102.gitpod.io/",
                                    darkmodestatus: true,
                                    timerId: "",
                                    timerIdlist: ""});