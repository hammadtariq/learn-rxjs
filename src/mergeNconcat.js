import Rx from 'rxjs/Rx';

export default function mergeNconcat() {

    const source1$ = Rx.Observable.interval(200).take(10);
    const source2$ = Rx.Observable.interval(1000).take(10);

// merge operator to emit value of two obsevables parallel
    console.log('merge demo');
    Rx.Observable
    .merge(source1$,source2$)
    .subscribe(x => console.log(x));
    

// concat operator to emit value sequentially depends on order of observables
    // console.log('concat demo');
    // Rx.Observable
    // .concat(source1$,source2$)
    // .subscribe(x => console.log(x));

}