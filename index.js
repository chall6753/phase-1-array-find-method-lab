


function superbowlWin(arr){
   let matchedItem = arr.find( function cb(object){
    return object.result === 'W'
})
    
    // function cb(object){
    //     return object.result === 'W'
    // }


   if (matchedItem){
       
       return matchedItem.year
   } else {
       return matchedItem
   }
}


