// function fn(a:any):any{
//     return a;
// }

/**
 * 
 *      在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
function my<T>(a:T):T{
    return a;
}
// 可以直接调用具有泛型的函数
let result = my(10);     //不指定泛型，TS可以自动对类型进行推断
let result2 = my<string>("hello");     //指定泛型，指定是字符串就是字符串


// 泛型可以同时指定多个
function my2<T,K>(a:T,b:K):T{
    console.log(b);
    return a;
}
my2<number,string>(123,'hello');


interface Inter{
    length:number;
}
// T extends Inter  表示泛型T必须时Inter实现类（子类）
function my3<T extends Inter>(a:T): number{
    return a.length
}


class myClass<T>{
    name: T;
    constructor(name:T){
        this.name = name;
    }
}
const mc = new myClass<string>('孙悟空')
