import Rx from 'rxjs/Rx';
import $ from 'jquery';

export default function switchMap() {

    // const source = Rx.Observable.fromEvent($('#btn'), 'click');
    // //if another click comes within 3s, message will not be emitted
    // const example = source.switchMap(val => Rx.Observable.interval(3000).mapTo('Hello, I made it!'));
    // //(click)...3s...'Hello I made it!'...(click)...2s(click)...
    // const subscribe = example.subscribe(val => console.log(val));


    const interval$ = Rx.Observable.interval(1000)
    .switchMap( () => {
        const req =  $.ajax({
            url: 'https://api.github.com/users',
            dataType: 'json'
        }).promise()
        Rx.Observable.fromPromise(req)
            .catch(err => Rx.Observable.of(1))
            .subscribe(x=>console.log("b",x))
    })
    interval$
    .catch(err => Rx.Observable.of(1))
    .subscribe(x=>console.log("a",x))


// this way observable will never die bcoz if any req fails, it will be catched and log the message,
// while donot effect other req process 
    // Rx.Observable.interval(1000)
    // .switchMap(() => {
    //     this.http.get("https://api.github.com/users")
    //         .catch(err => Rx.Observable.of(err))
    // })
    // .subscribe(x=>console.log(x));


}