import { Injectable } from "@angular/core";

import { LoadingIndicator } from "nativescript-loading-indicator";

@Injectable()
export class LoaderService {
    loader = new LoadingIndicator();
    options: any;

    constructor() {
        this.options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: true,
                cancelListener: function(dialog) { console.log("Loading cancelled") },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                details: "Additional detail note!",
                margin: 10,
                dimBackground: true,
                color: "#4B9ED6", // color of indicator and labels
                // background box around indicator
                // hideBezel will override this if true
                backgroundColor: "yellow",
                userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
                hideBezel: true // default false, can hide the surrounding bezel
            }
        }
    }

    show( message:string ){
        console.log('showing with message:' + message);
        this.options.message = message;
        this.loader.show( this.options );
    }

    hide(){
        this.loader.hide();
    }
}
