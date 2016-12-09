import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function mouseEvent() {
    const output = $('#mouseOutput');
    const mouse$ = Rx.Observable.fromEvent(document,'mousemove');

    mouse$.subscribe(
        e => {output.html('<h5>ClientX: '+e.clientX+' ClientY: '+e.clientY+'</h5>')},
        err => console.log(err),
        complete => console.log('mouse complete')
    );
}
