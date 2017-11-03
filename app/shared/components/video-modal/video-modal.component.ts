import * as Platform from 'platform';
import { Component, Input, Output, ViewChild, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { View } from 'ui/core/view';
import { Animation, AnimationDefinition } from "ui/animation";
import { AnimationCurve } from 'ui/enums';
import { Subscription } from 'rxjs';
import { PubSubService } from '../../services/pub-sub.service';
import { WebView, LoadEventData } from "ui/web-view";

declare var android: any;

@Component({
    selector: "video-modal",
    moduleId: module.id,
    templateUrl: "./video-modal.component.html",
    styleUrls: ["./video-modal.component.css"]
})
export class VideoModalComponent {

    isVisible: boolean = false;

    private _kalturaEntryId: string = "0_51s26m1i";

    @ViewChild("videoModal") _videoModal: ElementRef;
    @ViewChild("webView") _webView: ElementRef;

    // public webViewSrc: string = "~/shared/components/video-modal/video-modal-web-view.html";
    public webViewSrc: string = `
    <div id="myEmbedTarget" style="width:360px;height:300px;"></div>
    <!-- Substitute 1658161 for your Kaltura partner id, {uiConfId} for an actual player id, also known as the uiconf id and {entryId} for an actual entry id. -->
    <script src="http://cdnapi.kaltura.com/p/1658161/sp/165816100/embedIframeJs/uiconf_id/39558981/partner_id/1658161"></script>
    <script>
        kWidget.embed({
            'targetId': 'myEmbedTarget',
            'wid': '_1658161',
            'uiconf_id' : '39558981',
            'entry_id' : '${this._kalturaEntryId}',
            'flashvars':{ // flashvars allows you to set runtime uiVar configuration overrides. 
                'autoPlay': false
            },
            'params':{ // params allows you to set flash embed params such as wmode, allowFullScreen etc
                'wmode': 'transparent' 
            }
        });
    </script>
    `

    private _videoModalVisible: Subscription;
    private _videoModalHidden: Subscription;

    private _appResume: Subscription;
    private _appSuspend: Subscription;

    constructor(
        private _pubSubService: PubSubService,
        private _ref: ChangeDetectorRef
    ) {

    }

    ngAfterViewInit() {

        this._initApplicationEventListeners();

        this._videoModalVisible = this._pubSubService.videoModalVisible.subscribe((event: VideoModalVisibleView) => {
            this.isVisible = true;
            this._kalturaEntryId = event.kalturaEntryId;
            this._ref.detectChanges();

        });

        this._videoModalHidden = this._pubSubService.videoModalHidden.subscribe((event) => {
            this.isVisible = false;
            this._ref.detectChanges();
        });

    }

    ngOnDestroy() {
        this._appResume && this._appResume.unsubscribe();
        this._appSuspend && this._appSuspend.unsubscribe();


        this._videoModalVisible.unsubscribe();
        this._videoModalHidden.unsubscribe();
    }

    private _initApplicationEventListeners() {

        this._appResume = this._pubSubService.appResume.subscribe(() => {
            // this.isVisible && this._startAnimation();
        })

        this._appSuspend = this._pubSubService.appSuspend.subscribe(() => {
            // this.isVisible && this._cancelAnimation();
        })

    }

    public onWebViewLoaded(args: LoadEventData) {
        let message;
        if (!args.error) {
            message = "WebView finished loading of " + args.url;
        } else {
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log("WebView message - " + message);

        // setTimeout(() => {
        //     this.configureWebView();
        // }, 500);
    }

    public configureWebView() {
        let webView = <WebView>this._webView.nativeElement;

        webView.android.getSettings().setJavaScriptEnabled(true);
        webView.android.setWebChromeClient(new android.webkit.WebChromeClient());
    }

}

export class VideoModalVisibleView {
    kalturaEntryId: string;

    constructor(
        kalturaEntryId: string
    ) {
        this.kalturaEntryId = kalturaEntryId;
    }
}