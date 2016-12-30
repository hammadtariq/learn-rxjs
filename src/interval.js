import Rx from 'rxjs/Rx';

export default function interval() {
    const interval$ = Rx.Observable.interval(1000)
    interval$.subscribe(x=>{console.log(x)});

    // or if we need to limit the number of intervals use take operator
    // and now it will fire complete event too.
    const take$ = Rx.Observable
                        .interval(1000).take(5);
    take$.subscribe(
        x=>{console.log(x)},
        err=>{console.log(err)},
        complete=>{console.log("complete")
    });

    // use timer if we need to specify diiferent time elapsed from start and in between
    const timer$ = Rx.Observable
                        .timer(3000,1000).take(5);
    timer$.subscribe(
        x=>{console.log(x)},
        err=>{console.log(err)},
        complete=>{console.log("complete")
    });
}
