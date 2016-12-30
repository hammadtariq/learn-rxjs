import Rx from 'rxjs/Rx';

export default function mergeMap() {

    //Nested subscribes
    // Rx.Observable.of('Hello')
    // .subscribe(v=>{
    //     Rx.Observable.of(v+' Everyone')
    //     .subscribe(x=>console.log(x));
    // });

    // mergeMap is correct way to handle nested subscribes
    Rx.Observable.of('Hello')
    .mergeMap(v=>Rx.Observable.of(v+' Everyone'))
    .subscribe(x=>{
        console.log(x);
    })
}