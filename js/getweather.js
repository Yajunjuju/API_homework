$(function(){
    $.ajax({
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-019?Authorization=CWB-E8D4CFAE-BFC7-4599-8B0E-A84811013FE0&locationName=%E8%8A%B1%E5%A3%87%E9%84%89&elementName=T',
        type:"GET",
        dataType:"json",
        success:function(resource){
            console.log(resource.records.locations[0].location[0].locationName);
            console.log(resource.records.locations[0].locationsName);
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let j = 0;
            $('#city_name').html(resource.records.locations[0].location[0].locationName);
            $('#district').html(resource.records.locations[0].locationsName);
            $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176"); 
            for(let i = 0; i < 10 ; i++){
                console.log($('.block').eq(i).find('small').html());
                console.log($('.block').eq(i).find('h6').html());                
                if((i % 2) == 0){
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let tempture = `<strong>${T}&#176;</strong>`;         
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;           
                    // console.log(tempture);
                    
                    $(".block").eq(j).find('h6').html(tempture);
                    const d = new Date(wd);
                    let day_index = d.getDay();
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;
                }
            }
        },  
        error:function(error){
            console.log(error);
        },
    })
})