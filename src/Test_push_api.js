import React ,{useState} from 'react'
import axios from 'axios'

export default function Test_push_api(a,c,d,e) {
  ////
    let empty_list = []
    console.log('The APi products >>>>>>>>',a,c,d,e)
    console.log('defect >>>>>>>',d);

    for (let index = 0; index < d.length; index++) {
      empty_list = empty_list.concat(String(d[index]["title"]))
    }
    console.log('The empty list >>>>>>>>',String(empty_list))
    var today = new Date(),
    year = String(today.getFullYear()),
    month = String(today.getMonth()+ 1),
    day = String(today.getDate()),
    time = String(today.getTime());
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length<2) {
      day = "0" + day;
    }
    var machine;
    if(e >= 500001 && e <= 502329){
      machine=String(e);
    }
    else {
      machine = "NaN";
    }
    var date = year + month + day + time ;
    var pincodes = [3, 10, 18, 20];
    console.log("The dates are >>>>>>>>",today.getFullYear(), today.getMonth(), today.getDate(),today.getTime());
    console.log(date);
    var orderid = String(date) + String(d[0]["id"]) +'~'+String(a);  
    console.log('The orderid is >>>>>>',orderid)
    const apiUrl = 'https://newpybackend.herokuapp.com/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  
  ////
  axios
      .post("https://newpybackend.herokuapp.com/insert",{
           "order_id" : String(orderid),
            "items" : String(empty_list),
            "machine" : machine,
            "status"  : 1
          }
        )
  ////
  console.log("The api DOWN >>>>>>>>>>")
  return (
    <div>
      
    </div>
  )
}

