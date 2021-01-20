import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { CommonAlertComponent } from './common-alert/common-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-angular-app';

  constructor(
    private bsModalService: BsModalService,

  ) {

  }

  public showApiAlert(message?: string): void {
    if (!message) {
      message = '요청하신 서비스를 처리하는 도중에 일시적인 시스템 에러가 발생하였습니다.';
    }

    const initialState = {
      alertHtml: message,
      okObj: {
        fun: () => {
          this.returnMain();
        }
      }
    };

    this.bsModalService.show(CommonAlertComponent, { initialState });
  }

  private returnMain = () => {
    let flag = true;
    let returnUrl = '';
    // this.urlList.map(
    //   (item: PageUrl) => {
    //     if (flag && this.nowUrl.indexOf(item.url) > -1) {
    //       flag = false;
    //       returnUrl = item.returnUrl;
    //     }
    //   }
    // );
    window.location.replace(returnUrl);
  }

}
