import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild("txtTagInput")
  public tagInput?: ElementRef<HTMLInputElement>;

  searchTag() {
    console.log(this.tagInput?.nativeElement.value);
  }

}
