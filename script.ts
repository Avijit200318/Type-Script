class Airpod{
    price = 25000;
    image = "image/jpg";
    color = "white";

    playMusic(){
        console.log("playing...");
    }
}

// here we write some variable and a fucntion but here we did not need to write let... or fucntion etc.

class AirConditioner{
    color = "white";
    tonnes = 25;
    company = "voltas";

    temperature = 22;

    turnOn = () => {
        console.log("turn on");
    }

    turnOff = () => {
        console.log("turn off");
    }

    raisTemperature = () => {
        this.temperature++;
        console.log(this.temperature);
    }

    decreaseTemperature = () => {
        this.temperature--;
        console.log(this.temperature);
    }
}

// let ac = new AirConditioner();
// ac.raisTemperature();
// ac.raisTemperature();

type Data = string | null;

class Pendrive{
    company = "hp";
    price = 12000;
    data: null | string = null;

    putData = (data: Data) => {
        console.log(`put some data ${data}`);
        this.data = data;
    }

    getData = () => {
        console.log(this.data);
    }
}

let pendrive1 = new Pendrive();
pendrive1.putData("12");
pendrive1.getData();