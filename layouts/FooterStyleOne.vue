<template>
    <footer class="footer-area">
        <div class="divider"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <NuxtLink to="/"><img src="~/assets/img/icon/footer-logo.svg" alt="image" width="190" height="50"></NuxtLink>
                        </div>
                        <p>Antixx TechHub offers a range of tailor-made enterprise solutions to help businesses improve visibility, branding, efficiencies, productivity, quality, profitability, and customer relationship.</p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Company</h3>

                        <ul class="services-list">
                            <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                            <li><NuxtLink to="/our-history">Our History</NuxtLink></li>
                            <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
                            <li><NuxtLink to="/careers">Careers</NuxtLink></li>
                            <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>

                        <ul class="support-list">
                            <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="/terms-of-use">Terms of Use</NuxtLink></li>
                            <li><NuxtLink to="/cookies">Cookies</NuxtLink></li>
                            <li><NuxtLink to="/sitemap">SiteMap</NuxtLink></li>
                            <li><NuxtLink to="/faq">FAQ's</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contact Info</h3>

                        <ul class="footer-contact-info">
                            <li>Location: <a href="#" target="_blank">B 608, Yashwin Anand, Pune, India</a></li>
                            <li>Email: <a href="info@antixxtechhub.com">info@antixxtechhub.com</a></li>
                            <li>Phone: <a href="tel:+91 86688 75750">+91 86688 75750</a></li>
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
                <p>&copy; <a href="https://www.antixxtechhub.com" target="_blank">Copyright 2022 Antixx TechHub Pvt. Ltd.</a> – All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterStyleOne'
}
</script>