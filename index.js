// Your code here

function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flare="*") {
    return function (x="special") {
        return `You are ${flare}${x}${flare}!`;
    }

}

const Calculator = {
    add:function(a,b) {
        return a+b;
    },
    subtract:function(a,b) {
        return a-b;
    },
    multiply:function(a,b) {
        return a*b;
    },
    divide:function(a,b) {
        return a/b;
    }
}

function actionApplyer(num,array) {
    for(let i=0;i<array.length;i++) {
        num=array[i] (num);
    }
    return num

}

