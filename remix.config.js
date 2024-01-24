/** @type {import('@remix-run/dev').AppConfig} */
export default {

  ignoredRouteFiles: ["**/.*"],
  data:{
    name:"remix ap config",
    mainMenu:[
      {
        label:"Home",
        url:"/",
        id:1
      },
      {
        label:"SHop",
        url:"/shop",
        id:2
      },
      { 
        label:"Blog",
        url:"/blog",
        id:3
      },
      {
        label:"Contact",
        url:"/contact",
        id:4
      },
      {
        label:"pages",
        children:[
          {
            label:"About Us",
            url:"/about",
            id:1
          },
          {
            label:"FAGs",
            url:"/faqs",
            id:2
          }
        ]
      }
      
    ],
    header:{
      email:"fixecomm@gmail.com",
      phone:"+212-6716-43367",
      iconSize:23
    },
    heroSlides:[
      {
        text_1:"Save 10 - 20 % off",
        text_2:"Best destination for",
        text_3:"your pets",
        img:"/assets/banner-img.png",
        url:"/"
      },
      {
        text_1:"Save 10 - 20 % off",
        text_2:"Best destination for",
        text_3:"your pets",
        img:"/assets/banner-img3.png",
        url:"/"
      },
      {
        text_1:"Save 10 - 20 % off",
        text_2:"Best destination for",
        text_3:"your pets",
        img:"/assets/banner-img4.png",
        url:"/"
      }
    ]
   }
   
};
