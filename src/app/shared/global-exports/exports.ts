import {InjectionToken} from "@angular/core";

export interface Weather {
  icon: string;
  temperature: number;
  title: string;
  water: string;
}

export interface Social {
  followers: number;
  following: number;
  img: string;
  title: string;
}

export interface Hotel {
  city: string;
  img: Array<string>;
  phone: string;
  street: string;
  weather: Weather;
  social: Social;
}

export const ITEMS_IN_MENU = new InjectionToken('ITEMS_IN_MENU');



