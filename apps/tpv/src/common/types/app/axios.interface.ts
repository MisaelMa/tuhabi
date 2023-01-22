export interface onUploadProgress {
    bubbles: Boolean;
    cancelBubble: Boolean;
    cancelable: Boolean;
    composed: Boolean;
    currentTarget: XMLHttpRequestUpload;
    defaultPrevented: false
    eventPhase: number;
    isTrusted: true
    lengthComputable: true
    loaded: number;
    path: any
    returnValue: true
    srcElement: XMLHttpRequestUpload;
    target: XMLHttpRequestUpload;
    timeStamp: Date;
    total: number;
    type: string;
}

interface XMLHttpRequestUpload {
    onabort: any
    onerror: any
    onload: any
    onloadend: any
    onloadstart: any
    onprogress: any
    ontimeout: any
}

