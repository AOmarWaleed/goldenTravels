import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sideNav',
  templateUrl: './sideNavbar.component.html',
  styleUrls: ['./sideNavbar.component.css'],
})
export class sideNavbarComponent implements OnInit {
  ngOnInit(): void {
    this.onMenueBtnChange.emit('79px');
  }
  @Output() onMenueBtnChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('navList') navList!: ElementRef;
  close(sidebar: HTMLElement) {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
      this.closeBtn.nativeElement.style.opacity = '0';
    } else {
      this.closeBtn.nativeElement.style.opacity = '1';
    }
    this.menuBtnChange();
  }

  searchBtn(sidebar: HTMLElement) {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
      this.closeBtn.nativeElement.style.opacity = '0';
    } else {
      this.closeBtn.nativeElement.style.opacity = '1';
    }
    this.menuBtnChange();
  }

  menuBtnChange() {
    if (this.sidebar.nativeElement.classList.contains('open')) {
      this.closeBtn.nativeElement.classList.replace(
        'bx-menu',
        'bx-menu-alt-right'
      );
      this.navList.nativeElement.classList.replace('ps-0', 'ps-2');
      this.onMenueBtnChange.emit('250px');
      // mainBody.style.marginRight = '250px';
    } else {
      this.closeBtn.nativeElement.classList.replace(
        'bx-menu-alt-right',
        'bx-menu'
      );

      this.navList.nativeElement.classList.replace('ps-2', 'ps-0');
      // mainBody.style.marginRight = '77px';
      this.onMenueBtnChange.emit('79px');
    }
  }
}
