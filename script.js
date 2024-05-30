function getTime() {
  let inputField = document.getElementById("time");
  let myTime = inputField.value;
  console.log(myTime);
  let result = document.getElementById("result");
  result.innerText = "起床时间：6:58 \n" +
  "Bottle：6.7oz after wake up\n" + 
  "Take a walk：7:30-8:00\n" + 
  "Breakfast：8:00-8:45\n" + 
  "Play time\n" + 
  "Nap 1:9:58-11:28\n" + 
  "Lunch：12:30-1:15\n" + 
  "Bottle：6.7oz at 2pm\n" + 
  "Nap 2: 3-4\n" + 
  "Total Nap time ：2h30m\n" + 
  "白天午睡时间充足，才能给晚上自我入睡训练提供空间\n" + 
  "放电⚡️时间：疯玩：4:00-5:00\n" + 
  "Dinner 5:45-6:30\n" + 
  "Take a walk 6:30-7:00\n" + 
  "7:00 Bedtime routine\n" + 
  "Bottle 6.7oz\n" + 
  "7:30 put on bed\n" + 
  "8:00 asleep\n" + 
  "8:15开始哄睡保证8:30之前睡着\n" + 
  "\n" + 
  "Bedtime routine\n" + 
  "Take a walk \n" + 
  "read bedtime stories\n" + 
  "drinking milk \n" + 
  "change pajamas\n" + 
  "brush teeth\n" + 
  "change diaper\n" + 
  "sing a song";
}
