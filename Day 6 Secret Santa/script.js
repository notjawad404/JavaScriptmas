function generateSecretSantaPairs(arr){
 const shuffledArr = [...arr];
 for(let i = shuffledArr.length -1; i>0; i--){
    // const people = arr[i];
    const j = Math.floor(Math.random() * (i+1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
 }
    const secretSantaPairs = {};
    for(let i = 0; i<arr.length; i++){
        const person = arr[i];
        const secretSanta = shuffledArr[(i+1) % arr.length];
        secretSantaPairs[person] = secretSanta;
    }
}

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];
console.log(generateSecretSantaPairs(people));

