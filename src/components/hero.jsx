import Carousel from 'react-bootstrap/Carousel';


var heroData = [
    {
        id: 1,
        image: "/Images/img-hero1.jpg",
        title: "Crafted Website Design",
        description:
            "Crafted to impress and built to perform, our designs blend aesthetics with functionality to give your website a professional edge.",
        link: "https://www.google.com",
    },
    {
        id: 2,
        image: "/Images/img-hero2.jpg",
        title: "Start Your Future Financial Plan",
        description:
            "Take control of your tomorrow—build a smart, secure, and sustainable financial plan tailored to your goals.",
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        image: "/Images/img-hero3.jpg",
        title: "Enjoy the Difference",
        description:
            "Experience innovation, quality, and service that truly set us apart—because you deserve more than ordinary.",
        link: "https://www.twitter.com",
    },
];


export default function Hero() {
    return (
        <section id='home' className='hero-block'>
            <Carousel data-bs-theme="dark">
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"slide" + hero.id}
                                />
                                <Carousel.Caption style={{ color: 'white' }}>
                                    <h1 style={{ fontWeight: 'bold' }}>{hero.title}</h1>
                                    <p>{hero.description}</p>
                                    <a className="btn btn-primary" href={hero.link}>
                                        learn more<i className="fas fa-chevron-right"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }


            </Carousel>
        </section>
    );
}
