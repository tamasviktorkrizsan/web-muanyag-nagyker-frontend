import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SearchBoxComponent} from "../../component/search-box/search-box.component";
// import {AppComponent} from "../../app.component";
import {CommonService} from "../../service/common/common.service";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        SearchBoxComponent,
        RouterLink
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  CommonService: CommonService = inject(CommonService);

  onClick(): void {
    this.CommonService.sidebarToggleClick();
  }
}
