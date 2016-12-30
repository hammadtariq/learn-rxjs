import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function staticArr() {
    const arr = [1,2,3,4];
    const output = $('#arrOutput');
    const arr$ = Rx.Observable.from(arr);

    arr$
    .subscribe(
        d => {output.append('<li>'+d+'</li>')},
        err => console.log(err),
        complete => console.log('arr complete')
    )
    
}
