import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { AdItem } from '../../models/ad-item';
import { AdDirective } from '../directives/ad.directive';
import { AdComponent } from '../../interfaces/ad.component';

@Component({
  selector: 'ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.less']
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _changeDetectionRef : ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
    this._changeDetectionRef.detectChanges();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
