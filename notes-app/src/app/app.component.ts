import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { 

  public readonly sidenavIsOpened = signal<boolean>(false);

  public openSidenav(): void {
    this.sidenavIsOpened.update((lastValue) => !lastValue);
  }
}
