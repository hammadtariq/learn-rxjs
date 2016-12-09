import $ from 'jquery';
import Rx from 'rxjs/Rx';
import btnEvent from './btn.event';
import mouseEvent from './mouse.event';
import inputEvent from './input.event';
import staticArr from './static.arr';
import customObservable from './custom.observable';

btnEvent();
mouseEvent();
inputEvent();
staticArr(); 
customObservable();

