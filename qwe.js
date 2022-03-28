class Person {
    askData () {
        this.name = await rl.question('Введите имя: ');
        this.surname = await rl.question('Введите фамилию: ');
        this.birthdate = await rl.question('Введите дату рождения: ');
    }

    getAge() {
        return new Date() - new Date(this.birthdate);
    }
}

const person = new Person();
person.askData();
console.log(person.getAge());

