
import "./Cards.css"




function Cards() {
    const data=[
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1614332559-pny.jpg",
            "title":"Development",
            "price":"Rs20000",
            "description":"By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704272-pny.png",
            "title":"Marketing",
            "price":"Rs50000",
            "description":"Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic-...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704480-pny.png",
            "title":"Art & Design",
            "price":"Rs30000",
            "description":"Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704480-pny.png",
            "title":"Art & Design",
            "price":"Rs30000",
            "description":"Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704480-pny.png",
            "title":"Art & Design",
            "price":"Rs30000",
            "description":"Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704480-pny.png",
            "title":"Art & Design",
            "price":"Rs30000",
            "description":"Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...",
            "btnText":"View Courses"
        },
        {
            "image":"https://www.pnytrainings.com/assets/uploads/course/frontend-course-1631704480-pny.png",
            "title":"Art & Design",
            "price":"Rs30000",
            "description":"Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...",
            "btnText":"View Courses"
        }
]
  return (
    <>
    <h1 class="animate__animated animate__heartBeat text-center">An animated element</h1>
    <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
    {
        data.map((item)=>{
            return(
                <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <a href="#" class="btn btn-primary">{item.btnText}</a>
  </div>
</div>
            )
        })
    }
    </div>
    </>
  )
}

export default Cards
