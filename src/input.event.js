import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function inputEvent() {
    const input = $('#userInput');
    const output = $('#userOutput');
    const input$ = Rx.Observable.fromEvent(input,'keyup');

    input$.subscribe(
        e => {output.text(e.target.value)},
        err => console.log(err),
        complete => console.log('input complete')
    );
}
