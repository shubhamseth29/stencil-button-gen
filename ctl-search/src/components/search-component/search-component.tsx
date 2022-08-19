import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { generateUniqueKey } from '../../utils/utils';

@Component({
  tag: 'search-component',
  styleUrl: 'search-component.sass',
  shadow: false,
})
export class SearchComponent {
  @Prop() data: [];
  @Prop() searchPlaceholder: string;
  @Prop() searchFunction;

  @Event() changed :EventEmitter;

  inputId: string;

  filteredSearch = [];

  searchIcon = {
      class: 'search',
      type: 'SVG',
      extraClass: 'svg-primary-fill'
  };



  connectedCallback() {
      this.inputId = generateUniqueKey(10);
  }

  search(value) {
    console.log(value);
      if (this.searchFunction) {
          this.searchFunction(this.inputId);
          return;
      }
      if (value) {
          this.filteredSearch = this.data.filter((item) =>
              JSON.stringify(item).toLowerCase().includes(value.trim())
          );
      } else {
          this.filteredSearch = this.data;
      }
      this.changed.emit(this.filteredSearch);
  }

  render() {
    return (

        <div class="search">
        {/* <label appIcon [data]="searchIcon" [for]="inputId"> </label> */}
        <input
           id = {this.inputId}
           onKeyUp = {(event) => this.search(event)}
           placeholder = { this.searchPlaceholder ? this.searchPlaceholder : 'Search' }
        />
    </div>

    );

  }
}
