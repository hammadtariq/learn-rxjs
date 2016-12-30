import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function staticArr() {
    const arr = {id:1,id:2,id:3,id:4};
    const output = $('#arrOutput');
    const arr$ = Rx.Observable.from(arr);

    arr$.subscribe(
        d => {output.append('<li>'+d+'</li>')},
        err => console.log(err),
        complete => console.log('arr complete')
    );
}
