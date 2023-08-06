import { writable } from "svelte/store";

export const stateStore = writable({ rout: "botlist", 
                                    showmenu: false,
                                    selectbotname: "",
                                    urlhost: "localhost",
                                    urlhostenv: "localhost",
                                    darkmodestatus: true,
                                    timerId: "",
                                    timerIdlist: ""});