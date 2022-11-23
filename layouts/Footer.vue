<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <NuxtLink to="/"><img src="~/assets/img/icon/footer-logo.svg" alt="image" width="190" height="50"></NuxtLink>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Company</h3>

                        <ul class="services-list">
                            <li><NuxtLink to="/about">About Us</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Services</NuxtLink></li>
                            <li><NuxtLink to="/features-one">Features</NuxtLink></li>
                            <li><NuxtLink to="/pricing">Our Pricing</NuxtLink></li>
                            <li><NuxtLink to="/blog-one">Latest News</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>

                        <ul class="support-list">
                            <li><NuxtLink to="/faq">FAQ's</NuxtLink></li>
                            <li><NuxtLink to="/#">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="/#">Terms & Conditions</NuxtLink></li>
                            <li><NuxtLink to="/about">Community</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contact Info</h3>

                        <ul class="footer-contact-info">
                            <li>Location: <a href="https://goo.gl/maps/MQ78iGP5g9VgZcJ38" target="_blank">6th Floor, Elegant Tower, York, USA</a></li>
                            <li>Email: <a href="mailto:hello@striki.com">hello@striki.com</a></li>
                            <li>Phone: <a href="tel:+321754754">+0 (321) 984 754</a></li>
                        </ul>
                        <ul class="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>&copy; <a href="http://hibotheme.com/" target="_blank">HiboTheme.com</a>  All rights reserved by Striki</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>