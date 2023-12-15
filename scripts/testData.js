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
  
  const gif = {
    "data": [
        {
            "type": "gif",
            "id": "l0HlPtBCscbYiLfR6",
            "url": "https://giphy.com/gifs/nowthatsmusic-now-thats-what-i-call-music-60-l0HlPtBCscbYiLfR6",
            "slug": "nowthatsmusic-now-thats-what-i-call-music-60-l0HlPtBCscbYiLfR6",
            "bitly_gif_url": "http://gph.is/2eWawpo",
            "bitly_url": "http://gph.is/2eWawpo",
            "embed_url": "https://giphy.com/embed/l0HlPtBCscbYiLfR6",
            "username": "nowthatsmusic",
            "source": "https://www.youtube.com/watch?v=qpgTC9MDx1o",
            "title": "Maroon 5 Rain GIF by NOW That's Music",
            "rating": "pg",
            "content_url": "",
            "source_tld": "www.youtube.com",
            "source_post_url": "https://www.youtube.com/watch?v=qpgTC9MDx1o",
            "is_sticker": 0,
            "import_datetime": "2016-10-28 22:36:57",
            "trending_datetime": "2016-12-22 22:45:01",
            "images": {
                "original": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "363835",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "417116",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "53",
                    "hash": "af6ff5dd665f4823071fa864c01fb850"
                },
                "downsized": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_large": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "134",
                    "width": "324",
                    "mp4_size": "92926",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy-downsized-small.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "482",
                    "size": "1317772",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "326100",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "649528",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "482",
                    "size": "162591",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200_d.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "90224",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200_d.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "241",
                    "size": "415166",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "105407",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "201406",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "241",
                    "size": "10341",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "482",
                    "size": "29224",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "83",
                    "width": "200",
                    "size": "288053",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "79762",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "154116",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "83",
                    "width": "200",
                    "size": "33943",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w_d.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "20106",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w_d.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "42",
                    "width": "100",
                    "size": "102136",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100w.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "21587",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100w.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "51118",
                    "webp": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100w.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "42",
                    "width": "100",
                    "size": "2747",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/100w_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "83",
                    "width": "200",
                    "size": "6232",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/200w_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "1454144",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy-loop.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "199",
                    "width": "480",
                    "size": "66730",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy_s.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "198",
                    "width": "480",
                    "mp4_size": "363835",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "130",
                    "width": "315",
                    "mp4_size": "40436",
                    "mp4": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy-preview.mp4?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "87",
                    "width": "210",
                    "size": "49501",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy-preview.gif?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "156",
                    "width": "376",
                    "size": "48422",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/giphy-preview.webp?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "199",
                    "width": "480",
                    "size": "1753690",
                    "url": "https://media2.giphy.com/media/l0HlPtBCscbYiLfR6/480w_s.jpg?cid=318c0db66xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/nowthatsmusic/AKy63yq44HA7.jpg",
                "banner_image": "https://media1.giphy.com/channel_assets/nowthatsmusic/RTvto9I79hEB.jpg",
                "banner_url": "https://media1.giphy.com/channel_assets/nowthatsmusic/RTvto9I79hEB.jpg",
                "profile_url": "https://giphy.com/nowthatsmusic/",
                "username": "nowthatsmusic",
                "display_name": "NOW That's Music",
                "description": "The official GIPHY channel for Now That's What I Call Music! in the US.\r\nNOW 86 is out now: https://now.lnk.to/NOW86",
                "instagram_url": "https://instagram.com/nowthatsmusic",
                "website_url": "https://www.nowthatsmusic.com",
                "is_verified": true
            },
            "analytics_response_payload": "e=Z2lmX2lkPWwwSGxQdEJDc2NiWWlMZlI2JmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9MzE4YzBkYjY2eGVyeDJndTVzdXhtNTg1Ynh5bzRwNzd1MjJnYzNjeTVqdXdxZTJ6JmN0PWc",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwwSGxQdEJDc2NiWWlMZlI2JmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9MzE4YzBkYjY2eGVyeDJndTVzdXhtNTg1Ynh5bzRwNzd1MjJnYzNjeTVqdXdxZTJ6JmN0PWc&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwwSGxQdEJDc2NiWWlMZlI2JmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9MzE4YzBkYjY2eGVyeDJndTVzdXhtNTg1Ynh5bzRwNzd1MjJnYzNjeTVqdXdxZTJ6JmN0PWc&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwwSGxQdEJDc2NiWWlMZlI2JmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9MzE4YzBkYjY2eGVyeDJndTVzdXhtNTg1Ynh5bzRwNzd1MjJnYzNjeTVqdXdxZTJ6JmN0PWc&action_type=SENT"
                }
            }
        }
    ],
    "pagination": {
        "total_count": 23724,
        "count": 1,
        "offset": 0
    },
    "meta": {
        "status": 200,
        "msg": "OK",
        "response_id": "6xerx2gu5suxm585bxyo4p77u22gc3cy5juwqe2z"
    }
  }


export {weather, image, gif};