import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url)
      throw new Error('No llegó Url');

  }
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onload() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
