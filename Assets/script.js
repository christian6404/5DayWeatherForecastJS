let cityNameI = document.getElementById('cityNameInput').value;
let searchBtn = document.getElementById('sbtn')


searchBtn.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.id === 'sbtn') {
        cityNameI = document.getElementById('cityNameInput').value;
        let citycords = `https://api.openweathermap.org/geo/1.0/direct?q=${cityNameI}&limit=1&appid=0f0198b279599b1aff64ca75d3015cd1`
        
    fetch(citycords).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        const cityLat = data[0].lat
        const cityLon = data[0].lon
        const futureWeatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=a1f4d055d6e2851259d43ad13be5b486`
        const currentWeatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=a1f4d055d6e2851259d43ad13be5b486`

        const newYork = document.getElementById('NY')
        newYork.addEventListener('click', function (event) {
            event.preventDefault()
            citycords = `https://api.openweathermap.org/geo/1.0/direct?q=newyork&limit=1&appid=0f0198b279599b1aff64ca75d3015cd1`
        })






        fetch(currentWeatherData).then(function (response2) {
            return response2.json()
        }).then(function (data2) {
            console.log(data2)
            const cityName = data2.name
            const forCityName = document.getElementById('cityName')
            forCityName.innerHTML = cityName
            const todayTemp = Math.floor(data2.main.feels_like)
            const forTodayTemp = document.getElementById('todayTemp')
            forTodayTemp.innerHTML = todayTemp + '°F'
            const todayHumidity = data2.main.humidity
            const forTodayHumidity = document.getElementById('todayHumidity')
            forTodayHumidity.innerHTML = todayHumidity + '%'
            const toadyWindSpeed = Math.floor(data2.wind.speed)
            const forTodayWind = document.getElementById('todayWind')
            forTodayWind.innerHTML = toadyWindSpeed + ' MPH'

        })

        fetch(futureWeatherData).then(function (response1) {
            return response1.json()
        }).then(function (data1) {
            console.log(data1)
            console.log(data1.list[0])
            console.log(data1.list[8])
            console.log(data1.list[16])
            console.log(data1.list[24])
            console.log(data1.list[32])

            const day1Feels = Math.floor(data1.list[0].main.feels_like)
            const day2Feels = Math.floor(data1.list[8].main.feels_like)
            const day3Feels = Math.floor(data1.list[16].main.feels_like)
            const day4Feels = Math.floor(data1.list[24].main.feels_like)
            const day5Feels = Math.floor(data1.list[32].main.feels_like)
            
            const forDay1Temp = document.getElementById('1temp')
            forDay1Temp.innerHTML = day1Feels  + '°F'
            const forDay2Temp = document.getElementById('2temp')
            forDay2Temp.innerHTML = day2Feels  + '°F'
            const forDay3Temp = document.getElementById('3temp')
            forDay3Temp.innerHTML = day3Feels  + '°F'
            const forDay4Temp = document.getElementById('4temp')
            forDay4Temp.innerHTML = day4Feels  + '°F'
            const forDay5Temp = document.getElementById('5temp')
            forDay5Temp.innerHTML = day5Feels  + '°F'

            const day1Weather = data1.list[0].weather[0].description
            const day2Weather = data1.list[8].weather[0].description
            const day3Weather = data1.list[16].weather[0].description
            const day4Weather = data1.list[24].weather[0].description
            const day5Weather = data1.list[32].weather[0].description

            const forDay1Weather = document.getElementById('1weather')
            forDay1Weather.innerHTML = day1Weather
            const forDay2Weather = document.getElementById('2weather')
            forDay2Weather.innerHTML = day2Weather
            const forDay3Weather = document.getElementById('3weather')
            forDay3Weather.innerHTML = day3Weather
            const forDay4Weather = document.getElementById('4weather')
            forDay4Weather.innerHTML = day4Weather
            const forDay5Weather = document.getElementById('5weather')
            forDay5Weather.innerHTML = day5Weather

            const day1Date = JSON.stringify(data1.list[0].dt_txt).slice(1,11)
            const day2Date = JSON.stringify(data1.list[8].dt_txt).slice(1,11)
            const day3Date = JSON.stringify(data1.list[16].dt_txt).slice(1,11)
            const day4Date = JSON.stringify(data1.list[24].dt_txt).slice(1,11)
            const day5Date = JSON.stringify(data1.list[32].dt_txt).slice(1,11)

            const for1Date = document.getElementById('1date')
            for1Date.innerHTML = day1Date
            const for2Date = document.getElementById('2date')
            for2Date.innerHTML = day2Date
            const for3Date = document.getElementById('3date')
            for3Date.innerHTML = day3Date
            const for4Date = document.getElementById('4date')
            for4Date.innerHTML = day4Date
            const for5Date = document.getElementById('5date')
            for5Date.innerHTML = day5Date

        })
    })
    }
})