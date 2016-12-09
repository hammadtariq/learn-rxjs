import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function customObservable() {
    const observer$ = new Rx.Observable(observer => {
        console.log("creating custom observer")
        observer.next('one');
        observer.next('two');
        observer.error(new Error('Something went wrong!'));
        setTimeout(()=>{
            observer.next('yet another');
            observer.complete();
        },2000);
    });


    // observer$.subscribe(
    //     d => {console.log('custom observer: ',d)},
    //     err => console.log('err: ',err),
    //     complete => console.log('complete')
    // );

    // Error Handling
    // observable.of() is use to show message and make it's subscriber by itself
    observer$
    .catch(err => Rx.Observable.of(err))
    .subscribe(
        e => {console.log('custom observer: ',e)},
        err => console.log('err: ',err),
        complete => console.log('custom complete')
    );
}
