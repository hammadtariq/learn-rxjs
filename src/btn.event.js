import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function btnEvent() {
    let count = 0;
    const btn = $('#btn');
    const click$ = Rx.Observable.fromEvent(btn,'click');
    
    click$.subscribe(
        e => {
            count++;
            $('#btnClick').text('Clicked'+count);
        },
        err => console.log(err),
        complete => console.log('complete')
    );
}
