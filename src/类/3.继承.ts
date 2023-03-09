(function (){


    // 定义一个表示动物的类
    class Animal{
        name: string;
        age: number;

        constructor(name:string,age:number) {
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('d动物都在叫~~');
        }
    }

    // 定义一个表示狗的类
    /**
     * Dog extends Animal
     *  -此时，Animal被称为父类，Dog被称为子类
     *  -使用继承后，子类将会拥有父类所有的方法和属性
     *  -通过继承可以将多个类中共有的代码写在一个父类中，
     *      这样只需要写一次即可让所有的子类都同时拥有父类的属性和方法
     *      如果希望在子类中添加一些父类中没有的属性后方法直接加就行了
     *  -如果在子类中添加了和父类相同的方法，则子类方法掉父类的方法
     *      这种子类覆盖掉父类方法的形式，我们称为重写
     */

    // 定义一个表示狗的类
    // 使用Dog类继承Animal类
    // class Dog{
    class Dog extends Animal{
        // name: string;
        // age: number;

        // constructor(name:string,age:number) {
        //     this.name = name;
        //     this.age = age;
        // }

        // sayHello(){
        //     console.log('汪汪汪汪汪！');
        // }

        run(){
            console.log(`${this.name}再跑~~`)
        }
        sayHello(){
            console.log('汪汪汪。。。')
        }
    }

    // 定义一个表示猫的类
    // 使用Cat继承Animal类
    // class Cat{
    class Cat extends Animal{
        // name: string;
        // age: number;

        // constructor(name:string,age:number) {
        //     this.name = name;
        //     this.age = age;
        // }

        sayHello(){
            console.log('喵喵喵喵喵！');
        }
    }

    
    const dog = new Dog('旺财',13);
    console.log(dog);
    dog.sayHello()
    const cat = new Cat('咪咪', 3);
    console.log(cat);
    cat.sayHello()
}

)