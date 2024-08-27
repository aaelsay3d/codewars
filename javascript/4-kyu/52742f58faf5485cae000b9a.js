function formatDuration (seconds) {
  if (seconds === 0){
    return "now";
  }
  
  let years = Math.floor(seconds / 31536000);
  seconds = (seconds % 31536000);
  let days = Math.floor(seconds / 86400);
  seconds = (seconds % 86400);
  let hours = Math.floor(seconds / 3600);
  seconds = (seconds % 3600);
  let minutes = Math.floor(seconds / 60);
  seconds = (seconds % 60);
  
  let duration = [];
  
  if (years !== 0){
    if (years === 1){
      duration.push("1 year");
    } else {
      duration.push(`${years} years`);
    }
  }
  
  if (days !== 0){
    if (days === 1){
      duration.push("1 day");
    } else {
      duration.push(`${days} days`);
    }
  }
  
  if (hours !== 0){
    if (hours === 1){
      duration.push("1 hour");
    } else {
      duration.push(`${hours} hours`);
    }
  }
  
  if (minutes !== 0){
    if (minutes === 1){
      duration.push("1 minute");
    } else {
      duration.push(`${minutes} minutes`);
    }
  }
  
  if (seconds !== 0){
    if (seconds === 1){
      duration.push("1 second");
    } else {
      duration.push(`${seconds} seconds`);
    }
  }
  
  if (duration.length === 1){
    return duration[0];
  } 
  
  if (duration.length === 2){
    return duration[0] + " and " + duration[1];
  }
  
  if (duration.length === 3){
    return duration[0] + ", " + duration[1] + " and " + duration[2];
  }
  
  if (duration.length === 4) {
    return duration[0] + ", " + duration[1] + ", " + duration[2] + " and " + duration[3];
  }
  
  if (duration.length === 5) {
    return duration[0] + ", " + duration[1] + ", " + duration[2] + ", " + duration[3] + " and " + 
      duration[4];
  }
}
