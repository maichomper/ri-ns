import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PanGestureEventData, TouchGestureEventData } from "ui/gestures";
import { ScrollEventData } from "ui/scroll-view";

import { VideoModalVisibleView } from "../components/video-modal/video-modal.component";

export class PubSubService {

    appLaunch: AppLaunchEventEmitter;
    appSuspend: AppSuspendEventEmitter;
    appResume: AppResumeEventEmitter;
    appExit: AppExitEventEmitter;

    videoModalVisible: VideoModalVisibleEventEmitter;
    videoModalHidden: VideoModalHiddenEventEmitter;

    constructor() {
        this.appLaunch = new AppLaunchEventEmitter();
        this.appSuspend = new AppSuspendEventEmitter();
        this.appResume = new AppResumeEventEmitter();
        this.appExit = new AppExitEventEmitter();
        this.videoModalVisible = new VideoModalVisibleEventEmitter();
        this.videoModalHidden = new VideoModalHiddenEventEmitter();
       
    }

}

export class AppLaunchEventEmitter extends Subject<null>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}

export class AppSuspendEventEmitter extends Subject<null>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}

export class AppResumeEventEmitter extends Subject<null>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}

export class AppExitEventEmitter extends Subject<null>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}

export class VideoModalVisibleEventEmitter extends Subject<VideoModalVisibleView>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}
export class VideoModalHiddenEventEmitter extends Subject<null>{

    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}
