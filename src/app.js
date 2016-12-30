import $ from 'jquery';
import Rx from 'rxjs/Rx';
import btnEvent from './btn.event';
import mouseEvent from './mouse.event';
import inputEvent from './input.event';
import staticArr from './static.arr';
import customObservable from './custom.observable';
import interval from './interval';
import mapNpluck from './mapNpluck';
import mergeNconcat from './mergeNconcat';
import mergeMap from './mergeMap';
import switchMap from './switchMap';

btnEvent();
mouseEvent();
inputEvent();
staticArr(); 
customObservable();
interval();
mapNpluck();
mergeNconcat();
mergeMap();
switchMap();
