// code your solution here
function findWin(record){
    return record.result === "W"
}

function superbowlWin(teamRecord){
    let win = teamRecord.find(findWin)
    if(win){
        return win.year
    }
    else{
        return undefined
    }
}