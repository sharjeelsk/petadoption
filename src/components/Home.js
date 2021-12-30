import React from 'react'
import Header from './Header/Header'
import "./Home.scss"
import {ReactComponent as Pet} from '../Images/undraw_cautious_dog_q-83-f.svg'
import {ReactComponent as Sect1} from '../Images/sect1.svg'

function Home() {
    return (
        <div>
            <section className="section-1 center" >
            <Header id="1" />
            <Pet className="pet" />
            <h1 className="heading center">Adoption and endorsment of pets made easy </h1>
            <p>Ant. Ut quis consequat in labore occaecat commodo nisi cupidatat ipsum minim ipsum.
            Deserunt dolore voluptate consectetur et sit ea enim nisi culpa aute. Cillum dolor qui mollit adipisicing sunt amet adipisicing aliquip. Nostrud nostrud aliquip cupidatat eu deserunt nulla minim nulla nulla dolor sunt qui dolore aliqua. Nulla irure labore nulla cillum deserunt sunt velit adipisicing aliqua voluptate dolore enim dolor sunt. Eu ex labore aute mollit dolor commodo.</p>
            </section>

        </div>
    )
}

export default Home
