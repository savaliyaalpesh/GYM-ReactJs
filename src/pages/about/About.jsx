import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisonImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum minus
        consectetur laboriosam tempora cupiditate quos ea aliquam ipsum dicta rem?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eius vel et. Est beatae in laudantium cum blanditiis cumque error fuga tempora consequuntur laboriosam? Omnis autem nulla labore natus nostrum iusto cum quasi repudiandae? Doloremque esse assumenda veniam molestias labore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat obcaecati tenetur, laboriosam commodi autem dolorum nisi quas praesentium quibusdam eos pariatur dolor dignissimos excepturi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint libero ipsam vero labore! Mollitia.
            </p>
          </div>

        </div>
      </section>

      <section className="vison">
        <div className="container about__vision-container">

          <div className="about__section-content">
            <h1>Our Vison</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat obcaecati tenetur, laboriosam commodi autem dolorum nisi quas praesentium quibusdam eos pariatur dolor dignissimos excepturi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eius vel et. Est beatae in laudantium cum blanditiis cumque error fuga tempora consequuntur laboriosam? Omnis autem nulla labore natus nostrum iusto cum quasi repudiandae? Doloremque esse assumenda veniam molestias labore?
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisonImage} alt="" />
          </div>

        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eius vel et. Est beatae in laudantium cum blanditiis cumque error fuga tempora consequuntur laboriosam? Omnis autem nulla labore natus nostrum iusto cum quasi repudiandae? Doloremque esse assumenda veniam molestias labore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat obcaecati tenetur, laboriosam commodi autem dolorum nisi quas praesentium quibusdam eos pariatur dolor dignissimos excepturi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint libero ipsam vero labore! Mollitia.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
