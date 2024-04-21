//find the longest word 

const findTheLongestWord = (elem) => {
    if(elem.trim().length === 0){
        return false
    }
    
    let strArr = elem.split(" ");
    /* strArr = strArr.sort((a,b) => b.length - a.length) //this return arr in descending order length
    console.log(strArr);
    return strArr[0] */
    return strArr.reduce((acc , currWord) => currWord.length > acc.length ? currWord : acc , "")
}

//console.log(findTheLongestWord("Rishabh Raj Yadav is Coding"))

//Hash Tag Generator

const generateHash = (str) => {
    if(str.trim().length === 0 || str.length > 280){
        return false;
    }

    str = str.trim().split(" ")
    str = str.map((elem) => 
      //elem.replace(elem[0] , elem[0].toUpperCase())
      elem.charAt(0).toUpperCase() + elem.slice(1)
    );
    /* str = `#${str.join("")}` */
    str = "#" + str.join("")
    console.log(str);
}

console.log(generateHash("rishabh raj yadav is coding "));