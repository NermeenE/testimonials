const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const testimonialImage = document.querySelector('.test-img')
const userImg = document.querySelector('.user-img')
const username = document.querySelector('.user-name')
const role = document.querySelector('.role')



const testimonials = [
  {
    image: "https://i.picsum.photos/id/859/400/400.jpg?hmac=xXqZLY1pLY8bgeNWixWyG36s5QGtNA2G5IdNedqbxaM",
    name: "Lance Jarvis",
    "location": "London, UK",
    designation: "General Manager ",
    avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
    message: "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service."
  
},
{
    image: "https://i.picsum.photos/id/500/400/400.jpg?hmac=n_PrV6S_0Lj4qFZ8_wSOx0LJ-1RbU-OkIWwWlinEPuw",
    name: "Juliet Wright",
    designaton: "Technical Director",
    designation: "CEO",
    avatar: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
    message: "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service."
    
   
},
{
    image: "https://i.picsum.photos/id/609/400/400.jpg?hmac=g7jxJCurD7vu7tqQMAfd19i3xpME4QaifCiS80BhdME",
    name: "Michael D.",
    designation: "Investor",
    avatar: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
    message: "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy."
},
{
    image: "https://i.picsum.photos/id/924/400/400.jpg?hmac=tQftYvphtHBbujy0cbYoGqmMQV7TVpqA8endeZBgLhU",
    name: "Kylie Lutz",
    designation: "Freelancer",
    avatar: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
    message: "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation."

},
{
    image: "https://i.picsum.photos/id/695/400/400.jpg?hmac=EhewcZbcbrAyVi3eDFv6PbITIaYEXC7GII6LdJ9znbY",
    name: "Mark Twin",
    designation: "Developer",
    avatar: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
    message: "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service."
   
},
{
    image: "https://i.picsum.photos/id/259/400/400.jpg?hmac=4KowbXVx0P_Fz_KnmUxeF7sD4X8p-k-KxOoehwXGQ3Q",
    name: "Anne",
    designation: "Content Writer & Artist",
    avatar: "https://testimonialapi.toolcarton.com/avatar/6.jpg",
    message: "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them."
   
},
{
    image: "https://i.picsum.photos/id/550/400/400.jpg?hmac=ty7PIDypwNO1SWLpcApJEkJeAKokkekUX3JnDbdAMQg",
    name: "Bryan S.",
    designation: "Manager",
    avatar: "https://testimonialapi.toolcarton.com/avatar/7.jpg",
    message: "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team."
},
{
    image: "https://i.picsum.photos/id/15/400/400.jpg?hmac=xv-6mggpYPLIQ9eNAHrl1qKPHjyUCYlBoNBvdsqF4cY",
    name: "Kamren Hays",
    designation: "Marketing Head",
    avatar: "https://testimonialapi.toolcarton.com/avatar/8.jpg",
    message: "I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services."
   
},
{
    image: "https://i.picsum.photos/id/232/400/400.jpg?hmac=50cU4Y_gqpq-qeDzV0ymjfmm-v7FhIdtoPMdkIvU7Zg",
    name: "Diane Smith", 
    designation: "Sales Head",
    avatar: "https://testimonialapi.toolcarton.com/avatar/9.jpg",
    message: "Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all."
    
},
{
    image: "https://i.picsum.photos/id/1044/400/400.jpg?hmac=XhejMw5uxJMo4BMD70uQmZ4fD2IA2xYViukBLyNPO1U",
    name: "Mikayla Mccullough",
    designation: "Designer",
    avatar: "https://testimonialapi.toolcarton.com/avatar/10.jpg",
    message: "The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive."
   
}
]

let indx = 0

function updateTestimonial(){
  const{image, name, designation , avatar, message} = testimonials[indx]

  testimonial.innerHTML = message
  userImg.src = avatar
  username.innerHTML = name
  role.innerHTML = designation
  testimonialImage.src = image


  indx++

  if(indx > testimonials.length - 1) {
    indx = 0
  }
}

setInterval(updateTestimonial, 10000)
