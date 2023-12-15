import unsplashApi from "./unsplashApi.js";

// we get weather in the form:

const weather = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}      

// unsplash example
const image = {
  "total": 10000,
  "total_pages": 10000,
  "results": [
      {
          "id": "GXEZuWo5m4I",
          "slug": "person-walking-on-street-and-holding-umbrella-while-raining-with-vehicle-nearby-GXEZuWo5m4I",
          "created_at": "2018-02-27T00:55:50Z",
          "updated_at": "2023-12-15T11:03:48Z",
          "promoted_at": "2018-02-27T13:55:55Z",
          "width": 6000,
          "height": 4000,
          "color": "#262626",
          "blur_hash": "L8BCrp0}+FOtl8^P9uRP-oX5eTs:",
          "description": null,
          "alt_description": "person walking on street and holding umbrella while raining with vehicle nearby",
          "breadcrumbs": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA&ixlib=rb-4.0.3",
              "full": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA&ixlib=rb-4.0.3&q=85",
              "regular": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
              "small": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA&ixlib=rb-4.0.3&q=80&w=400",
              "thumb": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA&ixlib=rb-4.0.3&q=80&w=200",
              "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1519692933481-e162a57d6721"
          },
          "links": {
              "self": "https://api.unsplash.com/photos/person-walking-on-street-and-holding-umbrella-while-raining-with-vehicle-nearby-GXEZuWo5m4I",
              "html": "https://unsplash.com/photos/person-walking-on-street-and-holding-umbrella-while-raining-with-vehicle-nearby-GXEZuWo5m4I",
              "download": "https://unsplash.com/photos/GXEZuWo5m4I/download?ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA",
              "download_location": "https://api.unsplash.com/photos/GXEZuWo5m4I/download?ixid=M3w1NDEwMzl8MHwxfHNlYXJjaHwxfHxyYWlufGVufDF8MHx8fDE3MDI2NTc2NDJ8MA"
          },
          "likes": 1268,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {},
          "user": {
              "id": "nFtx7xLaipM",
              "updated_at": "2023-12-14T19:04:31Z",
              "username": "osmanrana",
              "name": "Osman Rana",
              "first_name": "Osman",
              "last_name": "Rana",
              "twitter_username": null,
              "portfolio_url": "Https://www.oranaphotography.com",
              "bio": null,
              "location": "Boston, USA",
              "links": {
                  "self": "https://api.unsplash.com/users/osmanrana",
                  "html": "https://unsplash.com/@osmanrana",
                  "photos": "https://api.unsplash.com/users/osmanrana/photos",
                  "likes": "https://api.unsplash.com/users/osmanrana/likes",
                  "portfolio": "https://api.unsplash.com/users/osmanrana/portfolio",
                  "following": "https://api.unsplash.com/users/osmanrana/following",
                  "followers": "https://api.unsplash.com/users/osmanrana/followers"
              },
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1470101925356-0e31654f5fad?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                  "medium": "https://images.unsplash.com/profile-1470101925356-0e31654f5fad?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                  "large": "https://images.unsplash.com/profile-1470101925356-0e31654f5fad?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
              },
              "instagram_username": "ranagraphs",
              "total_collections": 0,
              "total_likes": 578,
              "total_photos": 263,
              "total_promoted_photos": 131,
              "accepted_tos": true,
              "for_hire": true,
              "social": {
                  "instagram_username": "ranagraphs",
                  "portfolio_url": "Https://www.oranaphotography.com",
                  "twitter_username": null,
                  "paypal_email": null
              }
          },
          "tags": [
              {
                  "type": "search",
                  "title": "rain"
              },
              {
                  "type": "landing_page",
                  "title": "city",
                  "source": {
                      "ancestry": {
                          "type": {
                              "slug": "wallpapers",
                              "pretty_slug": "HD Wallpapers"
                          },
                          "category": {
                              "slug": "travel",
                              "pretty_slug": "Travel"
                          },
                          "subcategory": {
                              "slug": "city",
                              "pretty_slug": "City"
                          }
                      },
                      "title": "Hd city wallpapers",
                      "subtitle": "Download free city wallpapers",
                      "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                      "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                      "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                      "cover_photo": {
                          "id": "Nyvq2juw4_o",
                          "slug": "white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
                          "created_at": "2016-11-01T00:26:28Z",
                          "updated_at": "2023-12-11T15:04:42Z",
                          "promoted_at": "2016-11-01T00:26:28Z",
                          "width": 3465,
                          "height": 2131,
                          "color": "#0c2640",
                          "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                          "description": "City architecture and skyscrapers near waterfront",
                          "alt_description": "white and brown city buildings during daytime",
                          "breadcrumbs": [
                              {
                                  "slug": "wallpapers",
                                  "title": "HD Wallpapers",
                                  "index": 0,
                                  "type": "landing_page"
                              },
                              {
                                  "slug": "travel",
                                  "title": "HD Travel Wallpapers",
                                  "index": 1,
                                  "type": "landing_page"
                              },
                              {
                                  "slug": "chicago",
                                  "title": "HD Chicago Wallpapers",
                                  "index": 2,
                                  "type": "landing_page"
                              }
                          ],
                          "urls": {
                              "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                              "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                              "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                              "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                              "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                              "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                          },
                          "links": {
                              "self": "https://api.unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
                              "html": "https://unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
                              "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                              "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                          },
                          "likes": 3645,
                          "liked_by_user": false,
                          "current_user_collections": [],
                          "sponsorship": null,
                          "topic_submissions": {},
                          "premium": false,
                          "plus": false,
                          "user": {
                              "id": "1--L3vNK0TA",
                              "updated_at": "2023-12-04T23:18:47Z",
                              "username": "peterlaster",
                              "name": "Pedro Lastra",
                              "first_name": "Pedro",
                              "last_name": "Lastra",
                              "twitter_username": null,
                              "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                              "bio": null,
                              "location": null,
                              "links": {
                                  "self": "https://api.unsplash.com/users/peterlaster",
                                  "html": "https://unsplash.com/@peterlaster",
                                  "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                  "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                  "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                  "following": "https://api.unsplash.com/users/peterlaster/following",
                                  "followers": "https://api.unsplash.com/users/peterlaster/followers"
                              },
                              "profile_image": {
                                  "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                  "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                  "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                              },
                              "instagram_username": null,
                              "total_collections": 10,
                              "total_likes": 46,
                              "total_photos": 86,
                              "total_promoted_photos": 24,
                              "accepted_tos": false,
                              "for_hire": false,
                              "social": {
                                  "instagram_username": null,
                                  "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                  "twitter_username": null,
                                  "paypal_email": null
                              }
                          }
                      }
                  }
              },
              {
                  "type": "landing_page",
                  "title": "person",
                  "source": {
                      "ancestry": {
                          "type": {
                              "slug": "images",
                              "pretty_slug": "Images"
                          },
                          "category": {
                              "slug": "people",
                              "pretty_slug": "People"
                          }
                      },
                      "title": "People images & pictures",
                      "subtitle": "Download free people images",
                      "description": "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
                      "meta_title": "People Pictures [HQ] | Download Free Images on Unsplash",
                      "meta_description": "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
                      "cover_photo": {
                          "id": "PmNjS6b3XP4",
                          "slug": "woman-carrying-baby-while-walking-PmNjS6b3XP4",
                          "created_at": "2017-04-20T22:04:07Z",
                          "updated_at": "2023-12-06T07:01:36Z",
                          "promoted_at": "2017-04-21T16:00:49Z",
                          "width": 4630,
                          "height": 3087,
                          "color": "#a6d9d9",
                          "blur_hash": "LjI=x%:QUbv#NHWVa}kCt7jFjZfQ",
                          "description": "Summer in France with baby",
                          "alt_description": "woman carrying baby while walking",
                          "breadcrumbs": [],
                          "urls": {
                              "raw": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3",
                              "full": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                              "regular": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                              "small": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                              "thumb": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                              "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492725764893-90b379c2b6e7"
                          },
                          "links": {
                              "self": "https://api.unsplash.com/photos/woman-carrying-baby-while-walking-PmNjS6b3XP4",
                              "html": "https://unsplash.com/photos/woman-carrying-baby-while-walking-PmNjS6b3XP4",
                              "download": "https://unsplash.com/photos/PmNjS6b3XP4/download",
                              "download_location": "https://api.unsplash.com/photos/PmNjS6b3XP4/download"
                          },
                          "likes": 2758,
                          "liked_by_user": false,
                          "current_user_collections": [],
                          "sponsorship": null,
                          "topic_submissions": {
                              "current-events": {
                                  "status": "approved",
                                  "approved_on": "2021-03-01T12:52:57Z"
                              }
                          },
                          "premium": false,
                          "plus": false,
                          "user": {
                              "id": "7S_pCRiCiQo",
                              "updated_at": "2023-11-08T01:20:24Z",
                              "username": "thedakotacorbin",
                              "name": "Dakota Corbin",
                              "first_name": "Dakota",
                              "last_name": "Corbin",
                              "twitter_username": "thedakotacorbin",
                              "portfolio_url": null,
                              "bio": "Husband | Father | Creator",
                              "location": "Utah, United States",
                              "links": {
                                  "self": "https://api.unsplash.com/users/thedakotacorbin",
                                  "html": "https://unsplash.com/@thedakotacorbin",
                                  "photos": "https://api.unsplash.com/users/thedakotacorbin/photos",
                                  "likes": "https://api.unsplash.com/users/thedakotacorbin/likes",
                                  "portfolio": "https://api.unsplash.com/users/thedakotacorbin/portfolio",
                                  "following": "https://api.unsplash.com/users/thedakotacorbin/following",
                                  "followers": "https://api.unsplash.com/users/thedakotacorbin/followers"
                              },
                              "profile_image": {
                                  "small": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                  "medium": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                  "large": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                              },
                              "instagram_username": "thedakotacorbin",
                              "total_collections": 0,
                              "total_likes": 1,
                              "total_photos": 44,
                              "total_promoted_photos": 17,
                              "accepted_tos": true,
                              "for_hire": true,
                              "social": {
                                  "instagram_username": "thedakotacorbin",
                                  "portfolio_url": null,
                                  "twitter_username": "thedakotacorbin",
                                  "paypal_email": null
                              }
                          }
                      }
                  }
              }
          ]
      }
  ]
}


export default async function displayWeather(weather) {
    //background
    const weatherPic = document.querySelector('.weather__background');
    const image = await unsplashApi.getImage(weather.weather[0].main);
    weatherPic.style.backgroundImage = `url(${image.results[0].urls.regular})` // unsplash response


    const weatherCard = document.querySelector('.weather-card');
    weatherCard.innerHTML = '';

    // left and right divs
    const left = document.createElement('div');
    left.classList.add('weather-card__left');
    const right = document.createElement('div');
    right.classList.add('weather-card__right');

    weatherCard.appendChild(left);
    weatherCard.appendChild(right);
    
    // add to left side
    const gif = document.createElement('img');
    gif.classList.add('weather-card__gif')
    gif.src = '' // giphy response
    gif.alt = `${weather.weather[0].main} gif`

    const description = document.createElement('p');
    description.classList.add('weather-card__description')
    description.textContent = weather.weather[0].description; // could also do .main

    left.appendChild(gif);
    left.appendChild(description);

    // add to right side
    const temp = document.createElement('p');
    temp.classList.add('weather-card__temp--big');
    temp.textContent = Math.round(weather.main.temp)

    const low = document.createElement('p');
    low.classList.add('weather-card__temp--small');
    low.textContent = Math.round(weather.main.temp_min);

    const high = document.createElement('p');
    high.classList.add('weather-card__temp--small');
    high.textContent = Math.round(weather.main.temp_max);

    right.appendChild(temp);
    right.appendChild(low);
    right.appendChild(high);

}


await displayWeather(weather);