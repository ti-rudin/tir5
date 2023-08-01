import { writable } from "svelte/store";

export const stateStore = writable({ rout: "botlist", 
                                    showmenu: false,
                                    selectbotname: "",
                                    urlhost: "https://api.ti-robots.ru/",
                                    urlhostenv: "https://api.ti-robots.ru/",
                                    darkmodestatus: true,
                                    timerId: "",
                                    timerIdlist: ""});