function repeatHello(callback) {
    const time = setInterval(callback,1000);
    setTimeout(() => clearInterval(time),5000);
}


const call = () => {console.log("hello!");}



repeatHello(call);
