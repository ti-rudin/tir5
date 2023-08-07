import { writable } from "svelte/store";

export const stateStore = writable({ rout: "botlist", 
                                    showmenu: false,
                                    selectbotname: "",
                                    urlhost: "http://localhost:1880/",
                                    urlhostenv: "http://localhost:1880/",
                                    darkmodestatus: true,
                                    timerId: "",
                                    timerIdlist: ""});