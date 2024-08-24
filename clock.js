function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    // Day Month & Date   
     const dayOptions = { weekday: 'short' };
     const monthOptions = { month: 'short' };
     const day = now.toLocaleDateString('en-US', dayOptions);
     const month = now.toLocaleDateString('en-US', monthOptions);
     const date = now.getDate().toString().padStart(2, '0');
    
    const getTimeString = `Day- ${day}<br> Month- ${month} <br> Date- ${date} <br> Time-${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = getTimeString;

}
updateClock();
setInterval(updateClock,1000);
