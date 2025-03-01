import '../components/style/Skills.css'
import Backend from "../components/Skills/Backend"
import CloudNative from '../components/Skills/Cloud Native'
import Robotics from '../components/Skills/Frontend'

const Skiils = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Levels</span>

        <div className="skills__container container grid">
          <Backend/>
          <CloudNative/>
          <Robotics/>
        </div>

    </section>
)
}

export default Skiils