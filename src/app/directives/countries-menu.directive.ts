import {
  Directive, Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {ITEMS_IN_MENU} from "../shared/global-exports/exports";

interface ContextInterface {
  $implicit: {},
  control: {
    next: () => void,
    prev: () => void
  },
  currentIndex: number,
  itemsInMenu: number
}

@Directive({
  selector: '[countriesMenu]'
})
export class CountriesMenuDirective implements OnInit{

  @Input('countriesMenuOf') countries: Array<string>;
  private context: ContextInterface;
  currentIndex: number = 0;

  constructor(private vcR: ViewContainerRef,
              private tmpRef: TemplateRef<any>,
              @Inject(ITEMS_IN_MENU) private itemsInMenu) {

          if(!(this.itemsInMenu >= 2 && this.itemsInMenu <= 4)){
            this.itemsInMenu = 3;
          }
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.countries.slice(this.currentIndex,this.itemsInMenu + this.currentIndex),
      control: {
        next: this.next.bind(this),
        prev: this.prev.bind(this)
      },
      currentIndex: this.currentIndex,
      itemsInMenu: this.itemsInMenu
    };
    this.createMenuItems();
  }

  createMenuItems(){
    this.vcR.clear();// before creating clear the container
    this.vcR.createEmbeddedView(this.tmpRef,
      this.context);
  }

  // methods to go through list of countries backward and forwards
  next(){
    if(this.currentIndex >= this.countries.length - this.itemsInMenu){
      this.currentIndex = 0;
      this.updateContextObject(this.countries.slice(0,this.itemsInMenu), this.currentIndex);
      return;
    }
    ++this.currentIndex;
    this.updateContextObject(this.countries.slice(this.currentIndex,this.currentIndex + this.itemsInMenu),
      this.currentIndex);
  }

  prev(){

    if(this.currentIndex <= 0){
      this.currentIndex = this.countries.length - this.itemsInMenu;
      this.updateContextObject(this.countries.slice(this.currentIndex,this.currentIndex + this.itemsInMenu),
        this.currentIndex);
      return;
    }
    --this.currentIndex;
    this.updateContextObject(this.countries.slice(this.currentIndex,this.currentIndex + this.itemsInMenu),
      this.currentIndex);
  }

  updateContextObject($implicit, currentIndex){
    this.context.currentIndex = currentIndex;
    this.context.$implicit = $implicit;
  }
}
