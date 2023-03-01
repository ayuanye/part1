class Dog{
    // name = '旺财';
    // age = 3;

    name:string;
    age: number;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name:string,age:number) {
        console.log('每当new 构造函数都会执行~~~')
        // 在实例方法中.this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = "旺财";
        this.age = 18;
    } 


    bark(){
        alert('汪汪汪！');
    }
}

const dog = new Dog("小黑",4);
console.log(dog)