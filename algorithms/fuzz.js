function fuzz(n){
    let result = Array.from({length : n}, (_, ind)=>{
        return {1 : ind + 1, 6 : 'Fuzz', 10: 'Bazz', 0 : 'FuzzBazz'}[(Math.pow(ind+1, 4) % 15)];
    });
    return result;
}