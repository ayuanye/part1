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
     */
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
    }

    // 定义一个表示猫的类
    // class Cat{
    class Cat extends Animal{
        // name: string;
        // age: number;

        // constructor(name:string,age:number) {
        //     this.name = name;
        //     this.age = age;
        // }

        // sayHello(){
        //     console.log('喵喵喵喵喵！');
        // }
    }

    
    const dog = new Dog('旺财',13);
    console.log(dog);
    dog.sayHello()
    const cat = new Cat('咪咪', 3);
    console.log(cat);
    cat.sayHello()
}

)