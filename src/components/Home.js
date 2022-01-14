import React from 'react'
import Header from './Header/Header'
import "./Home.scss"
import {ReactComponent as Pet} from '../Images/undraw_cautious_dog_q-83-f.svg'
import {ReactComponent as Sect1} from '../Images/sect1.svg'
import {ReactComponent as Fillform} from '../Images/undraw_fill_form_re_cwyf.svg'
import {ReactComponent as Review} from '../Images/undraw_reviewed_docs_re_9lmr.svg'
import {ReactComponent as Dog} from '../Images/undraw_good_doggy_-4-wfq.svg'
import {ReactComponent as Terms} from '../Images/undraw_terms_re_6ak4.svg'
import Button from '@mui/material/Button'
import {ReactComponent as PlayingFetch} from '../Images/undraw_playing_fetch_cm19.svg'
import {ReactComponent as Notify} from '../Images/undraw_notify_re_65on.svg'
import Footer from './Footer/Footer'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

function Home() {
    return (
        <div>
            <section className="section-1 center" >
            <Header id="1" />
            <Pet className="pet" />
            <h1 className="heading center">Adoption and endorsment of pets made easy </h1>
            <p>
            Choose a dog/cat that’s right for you from a platform dedicated to giving dogs and cats with a second chance to find a safe and loving homes.
            </p>
            </section>

            <section className="section-2 d-flex align-items-center">
                <div className=" row  justify-content-between">
               <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 circle">
                   <h1>Donate</h1>
                    <p>
                    Donate happiness for dogs and cats and help us spread smiles, tail wags and good health. If you wish to help us out with medical, operational, fundraising activities, click here to lend a hand.
                    </p>
               </div>

               <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 circle">
                   <h1>Volunteer</h1>
                    <p>
                    Join our amazing team of volunteers and help people get joy for life. Socialize with puppies, cats and dogs in addition to walking the dogs. It’s essential to teach dogs and cats to trust people if they are to find their fur-ever homes. Click here to be a part of something beautiful.
                    </p>
               </div>

               <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 circle">
                   <h1>Adopt</h1>
                    <p>
                    We strive to match our adoptable with the right individual and families. Look inside our adoption process at PetAdop. As we don’t have a physical location, we are looking for great foster homes and adopters so that we can help as many as homeless animals as possible.
                    </p>
               </div>
               </div>
                
            </section>


            <section className="section-3">
                <h1 className="heading">Adoption Process</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <Fillform className="svg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <blockquote>
                        <p className="head">
                        1. Fill out an Online Adoption form: Once Submitted, your application will be reviewed by a volunteer.
                        </p>
                        <p>
                            Veniam occaecat deserunt culpa occaecat ea eu. Ad sunt aliquip tempor sint et ut sit minim quis et deserunt. Adipisicing ipsum in enim magna id aute eu aliqua laboris culpa dolor amet irure eiusmod. Ex cupidatat ex veniam esse aliqua reprehenderit esse irure. Eiusmod in eu voluptate aute elit quis cupidatat ad quis ullamco ex mollit. Ipsum labore veniam anim laboris aliquip non do sit eiusmod consectetur voluptate aliquip.
                        </p>
                        </blockquote>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <Review className="svg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <blockquote>
                        <p className="head">
                        2. Review and Vetting Process: When we have completed the vetting process, you will be notified of an approved application.
                        </p>
                        <p>Non cupidatat incididunt eiusmod Lorem. Cillum veniam ad dolor minim nostrud voluptate culpa labore. Eiusmod laboris est occaecat reprehenderit reprehenderit veniam laboris ad duis. Dolor aliqua do ipsum commodo reprehenderit labore quis exercitation officia pariatur consequat sunt nulla.</p>
                        </blockquote>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <Dog className="svg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                    <blockquote>
                        <p className="head">
                        3. Share waggy tails and sloppy kisses: Approval of your adoption applicant means that you can begin meeting dogs and cats
                        </p>
                        <p>Deserunt commodo in elit anim incididunt. Incididunt pariatur et non quis qui dolor. Velit irure ullamco eu qui incididunt proident est fugiat ipsum ex id est mollit nulla. Laborum cupidatat aliqua ex Lorem magna. Dolor duis pariatur tempor consequat deserunt ad cillum ea ipsum pariatur aliqua aliquip veniam nostrud. Ullamco ipsum aute dolor nisi minim eu nulla laborum. Dolor non reprehenderit enim velit.</p>
                    </blockquote>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <Terms className="svg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                    <blockquote>
                        <p className="head">
                        4. Complete the Adoption Agreement: Ride off into the sunset and live happily ever after with your forever friend.
                        </p>
                        <p>Cillum Lorem do fugiat fugiat sint et Lorem labore. Do Lorem elit cupidatat commodo et magna proident excepteur eiusmod quis dolore. Deserunt reprehenderit eiusmod eiusmod enim mollit nisi laboris excepteur. Quis occaecat sunt fugiat duis proident.</p>
                    </blockquote>
                    </div>

                </div>
            </section>


            <section className="section-4">
                <h1 className="heading">Adoption Requirements</h1>
                <div className="row align-items-center justify-content-between">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card">
                        <PlayingFetch className="svg" />
                        <p>All members of the household must visit with the animal prior to adoption.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card">
                        <Notify className="svg" />
                        <p>No one under 18 years of age may adopt an animal. Valid identification is required.</p>
                    </div>
                </div>
            </section>


            <blockquote className="endquote">
            Ready to get started? Begin with adoption application process today<br />
            <Button className="btn" endIcon={<PetsRoundedIcon />} variant="contained" >SignUp</Button>
            </blockquote>

        <Footer />
        </div>
    )
}

export default Home
