export function getDate () { 
    var today = new Date(),
 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 
    return date
  };