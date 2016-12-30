import Rx from 'rxjs/Rx';

export default function mapNpluck() {

    const users = [
        {name:'hammad', age:23},
        {name:'ali', age:21},
        {name:'bilal', age:27},
        {name:'maria', age:29},
        {name:'asad', age:14},
        ];

    const users$ = Rx.Observable.from(users);

// single map operator
    users$
    .map(v=>v.name)
    .subscribe(v=>console.log(v));

// multiple map operators
    users$
    .map(v=>v.name)
    .map(v=>v.toUpperCase())
    .subscribe(v=>console.log(v));

// pluck operator
    users$
    .pluck("age")
    .subscribe(v=>console.log(v));

}