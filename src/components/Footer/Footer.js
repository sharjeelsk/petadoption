import React from 'react'
import "./Footer.scss"

function Footer() {
    return (
        <div>
             <footer>
    <div class="footer_info">
        <div class="footer_width about">
            <h2>PetAdop</h2>
            <p>
                Choose a pet that's right for you from a platform dedicated to giving dogs and cats with a second chance
                 to find a safe and loving homes.
            </p>
            <div class="social-media">
                <ul>
                    <li><a href="https://www.facebook.com/rushikesh.dharurkar.7"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/utkarsha-jagtap-ba489119b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqHiPVmcoQ2O9Zw%2FTmeBuoQ%3D%3D"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>   
        <div class="footer_width link">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services Offered</a></li>
            </ul>            
        </div>  
        <div class="footer_width Contact">
            <h2>Contact</h2>
            <ul>
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <p>
                        Kasliwal Suvarnayog G/AD-1, front of Vyankatesh Mangal Karyalay Garkheda, Aurangabad.
                    </p>
                </li>
                <li>
                    <span><i class="far fa-envelope"></i></span>
                    <a href="#">hdharurkar98@gmail.com</a>                    
                </li>
                <li>
                    <span><i class="fas fa-phone-volume"></i></span>
                    <a href="#">+91 9370009616</a>                    
                </li>
            </ul>
        </div>   
    
    </div>
    <div class="copy-right">
        <p>©2022 Designed and developed by TechGeeks</p>

    </div>
        
</footer>
        </div>
    )
}

export default Footer
