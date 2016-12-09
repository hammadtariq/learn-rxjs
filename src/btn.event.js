import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function btnEvent() {
    const btn = $('#btn');
    const click$ = Rx.Observable.fromEvent(btn,'click');

    click$.subscribe(
        e => console.log("Clicked"),
        err => console.log(err),
        complete => console.log('complete')
    );
}
