Achievement.destroy_all
# Fan.destroy_all


  Achievement.create(title: "Come Fly with Me", year: 1957, category: "song", img_url: "https://images-na.ssl-images-amazon.com/images/I/51Fdzov3KPL.jpg")
  Achievement.create(title: "New York, New York", year: 1979, category: "song", img_url: "http://resources.wimpmusic.com/images/0eeac9d8/a6f4/4f0f/9ad5/504a5fd19997/640x640.jpg")
  Achievement.create(title: "My Way", year: 1969, category: "song", img_url: "https://guide.artswave.org/wp-content/uploads/sites/guide.artswave.org/images/2017/09/event-featured-Greater-Hamilton-Civic-Theater-1506444755-400x379.png")
  Achievement.create(title: "Angel Eyes", year: 1958, category: "song", img_url: "https://i.ebayimg.com/images/g/BXoAAOSwsZhcM47e/s-l300.jpg")
  Achievement.create(title: "Guys and Dolls", year: 1955, category: "movie", img_url: "http://www.unapaginadecine.org/m/mankiewicz01j/Images/1955%20Ellos%20y%20ellas%20(esp)%2002.jpg")
  Achievement.create(title: "High Society", year: 1956, category: "movie", img_url: "https://dgwh4hty77sxy.cloudfront.net/10868-medium_zoomcrop/image.jpg")
  Achievement.create(title: "Ocean’s 11", year: 1960, category: "movie", img_url: "https://m.media-amazon.com/images/M/MV5BMjA5MzU1ODQzOF5BMl5BanBnXkFtZTgwNTA2MDE3MTE@._V1_.jpg")
  Achievement.create(title: "The Manchurian Candidate", year: 1962, category: "movie", img_url: "https://images-na.ssl-images-amazon.com/images/I/5109yxrqYlL._SY445_.jpg")

  # fans = [
  #   {name: "Alex Williams", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32T8ZGA-1d8b246a8aff-512", achievement_id: Achievement.all.sample.id},
  #   {name: "Chaim Muskal", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPP8J2MN3-ccf426a8d5d4-512", achievement: Achievement.all.sample},
  #   {name: "Edward Castillo", img_url: "https://ca.slack-edge.com/T02MD9XTF-UMU3AK9R9-8066056b3b11-512", achievement: Achievement.all.sample},
  #   {name: "James Schaffer", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQJ2R94EA-0d4d26671dd9-512", achievement: Achievement.all.sample},
  #   {name: "Kevin Kim", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPMCZ4DA9-97cc68f2f97d-512", achievement: Achievement.all.sample},
  #   {name: "Maddy Corman", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32TAFUJ-8dc8eda88489-512", achievement: Achievement.all.sample},
  #   {name: "Saman Batool", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZCW6XHV-887f56cd0ca9-512", achievement: Achievement.all.sample},
  #   {name: "Sean Eriksen", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPPJWDG4E-c9644a435aff-512", achievement: Achievement.all.sample},
  #   {name: "Shakil Abdin", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQHMQV2DV-c23ee99edefc-512", achievement: Achievement.all.sample},
  #   {name: "Warren McDonal", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPTP51RM3-g93b064f561f-512", achievement: Achievement.all.sample},
  #   {name: "Sean Tarzy", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32TB4US-ba9634a47840-512", achievement: Achievement.all.sample} 
  #   {name: "Natalie Galligan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQJ349T2A-16c4deb69778-512", achievement: Achievement.all.sample} 
  #   {name: "Anna Carey", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQFSLJFCM-892339ac26ce-512", achievement: Achievement.all.sample} 
  #   {name: "Tim Rines", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNX1T44NQ-347b781241f1-512", achievement: Achievement.all.sample} 
  #   {name: "Matthew Masiello", img_url: "https://ca.slack-edge.com/T02MD9XTF-UFLH3KMEV-361ad28cf909-512", achievement: Achievement.all.sample} 
  #   {name: "Gabbie Piraino", img_url: "https://ca.slack-edge.com/T02MD9XTF-UEACERAQZ-a4abcb7c233f-512", achievement: Achievement.all.sample},
  #   {name: "Alex Schelchere", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512", achievement: Achievement.all.sample},
  #   {name: "Tony Lam", img_url: "https://ca.slack-edge.com/T02MD9XTF-UBQUNRJ1X-3293df56e47d-512", achievement: Achievement.all.sample},
  # ]
  
  # fans.each do |fan|
  #   Fan.create(trainer)
  # end 
  

  # 4 ways to create associations
  # achievement1 = Achievement.create(title: "Come Fly with Me", year: 1957)


  # Fan.create(name: 'Greg', achievement_id: achievement.id) #1
  # Fan.create(name: 'Greg', achievement: achievement)       #2

  # achievement1.fans.create(name: 'Greg')                   #3
  # achievement1.fans << Fan.create(name: 'Greg')            #4