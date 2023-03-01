// 使用class关键字来定义一个类

// 对象中主要包含了两个部分：
//     属性
//     方法
class Person{

    /*
        直接定义属性是实例属性，需要通过对象的实例去访问
            const per = new Person();
            per.name

        
        使用static开头的属性是静态属性（类属性），可以直接通过类去访问
            Person.age

    */

    // 实例属性、自定义属性都可以改变值，加上readonly变成只可读
    // 定义实例属性
    // readonly name:string = '孙悟空';  
    name:string = '孙悟空';  


    // 在属性前使用static关键字可以定义类属性（静态属性）
    // static readonly age: number = 18;
    static age: number = 18;


    // 定义方法
    // static sayHello(){
    sayHello(){
        console.log('Hello大家好！')
    }

}

const per = new Person();

console.log(per);
// console.log(per.age);

console.log(Person.age);

per.name = 'tom';
console.log(per.name);

// Person.sayHello
per.sayHello

