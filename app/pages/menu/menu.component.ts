import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { Page } from "ui/page";

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

import { PubSubService } from "../../shared/services/pub-sub.service";
import { VideoModalVisibleView } from "../../shared/components/video-modal/video-modal.component";

@Component({
    moduleId: module.id,
    selector: "menu",
    templateUrl: "menu.component.html",
    styleUrls: ["menu.component.css"]
})
export class MenuComponent implements AfterViewInit {
    private _mainContentText: string;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    constructor(
        private _changeDetectionRef: ChangeDetectorRef, 
        page: Page,
        private _pubSubService: PubSubService
    ) {
        page.actionBarHidden = true;
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public videoModalTest() {
        let videoModalVisible: VideoModalVisibleView = new VideoModalVisibleView("0_51s26m1i");
        this._pubSubService.videoModalVisible.emit(videoModalVisible);
    }

}