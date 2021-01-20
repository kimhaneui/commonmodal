import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as _ from 'lodash';

@Component({
  selector: 'app-common-alert',
  templateUrl: './common-alert.component.html',
  styleUrls: ['./common-alert.component.css']
})
export class CommonAlertComponent implements OnInit, OnDestroy {

  cloadingBool: boolean = false;
  element: any;

  alertTitle: string | undefined;
  titleTxt: string | undefined;
  alertHtml: string | undefined;
  closeObj: any;
  okObj: any;
  cancelObj: any;

  isAlertTitle: boolean | undefined;
  isTitleTxt: boolean | undefined;
  isAlertHtml: boolean | undefined;
  isCloseObj: boolean | undefined;
  isOkObj: boolean | undefined;
  isCancelObj: boolean | undefined;

  constructor(
    private el: ElementRef,
    public bsModalRef: BsModalRef
  ) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.propertyInit();
  }

  ngOnDestroy() { }

  // 속성 초기
  propertyInit() {
    this.isAlertTitle = _.has(this, 'alertTitle');
    this.isTitleTxt = _.has(this, 'titleTxt');
    this.isAlertHtml = _.has(this, 'alertHtml');
    this.isCloseObj = _.has(this, 'closeObj');
    this.isOkObj = _.has(this, 'okObj');
    this.isCancelObj = _.has(this, 'cancelObj');



    if (!this.isAlertTitle) {
      this.alertTitle = '알림';
    }

    if (!this.isTitleTxt) {
      this.titleTxt = '알림';
    }

    if (this.isCancelObj) {
      if (!_.has(this.cancelObj, 'name')) {
        this.cancelObj['name'] = '취소';
      }
    } else {
      this.cancelObj = {
        name: '취소'
      };
    }

    if (this.isOkObj) {
      if (!_.has(this.okObj, 'name')) {
        this.okObj['name'] = '확인';
      }
    } else {
      this.okObj = {
        name: '확인'
      };
    }
  }

  modalClose() {
    this.bsModalRef.hide();
  }

  onCloseClick() {
    if (this.closeObj && this.closeObj.fun) {
      this.closeObj.fun();
    }
    this.modalClose();
  }

  onOkClick() {
    console.info('[onOkClick]', this.okObj.fun);
    if (this.okObj && this.okObj.fun) {
      console.info('[this.okObj.fun]');
      this.okObj.fun();
    }
    this.modalClose();
  }

  onCancelClick() {
    if (this.cancelObj.fun) {
      this.cancelObj.fun();
    }
    this.modalClose();
  }


}
