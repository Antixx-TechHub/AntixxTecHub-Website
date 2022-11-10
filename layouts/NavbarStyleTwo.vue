<template>
    <div :class="['navbar-area bg-white p-relative', { 'is-sticky': isSticky }]">
        <div class="striki-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/img/logo.png" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Services <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/software-development" class="nav-link" exact>
                                            Software Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/product-development" class="nav-link">
                                            Product Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/web-development" class="nav-link">
                                            Web Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/app-development" class="nav-link">
                                            App Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/dedicated-development-teams" class="nav-link">
                                            Dedicated Development Teams
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/product-engineering" class="nav-link">
                                            Product Engineering
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/ui-and-ux-services" class="nav-link">
                                            UI & UX Services
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/it-consulting" class="nav-link">
                                            IT Consulting
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/software-testing-and-qa" class="nav-link">
                                            Software Testing & QA
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Technologies <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/expert-iphone-app-developers" class="nav-link" exact>
                                            Expert iPhone App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/expert-android-app-developers" class="nav-link">
                                            Expert Android App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/expert-windows-phone-app-developers" class="nav-link">
                                            Expert Windows Phone App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/hybrid-app-development" class="nav-link">
                                            Hybrid App Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/cloud-computing-solutions" class="nav-link">
                                            Cloud Computing Solutions
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/html5-software-and-app-developers" class="nav-link">
                                            Html5 Software & App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/expert-ipad-app-developers" class="nav-link">
                                            Expert IPAD App Developers
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Explore & Learn <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blogs" class="nav-link" exact>
                                            Blogs
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/insights" class="nav-link">
                                            Insights
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/case-studies" class="nav-link">
                                            Case Studies
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/news" class="nav-link">
                                            News
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>


                            <!-- <li class="nav-item">
                                <NuxtLink to="/about" class="nav-link">Products</NuxtLink>
                            </li> -->

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Company <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/our-history" class="nav-link">Our History
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/why-antixx-techhub-global" class="nav-link">Why Antixx TechHUb
                                            Global
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/executive-leadership" class="nav-link">Executive Leadership
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/team" class="nav-link">Experts Team
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/careers" class="nav-link">Careers</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/faq" class="nav-link">FAQ's</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <div class="others-options">
                            <NuxtLink to="/contact" class="default-btn">
                                <i class="bx bxs-hot"></i>Contact Us<span></span>
                            </NuxtLink>
                            <NuxtLink to="/log-in" class="default-btn black-btn">
                                <i class="bx bx-log-in"></i>Log In<span></span>
                            </NuxtLink>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>

        <div class="others-option-for-responsive">
            <div class="container">
                <div class="dot-menu">
                    <div class="inner">
                        <div class="circle circle-one"></div>
                        <div class="circle circle-two"></div>
                        <div class="circle circle-three"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarStyleTwo',
    data() {
        return {
            isSticky: false,
        }
    },

    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>