<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
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
                                            UI and UX Services
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/it-consulting" class="nav-link">
                                            IT Consulting
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/software-testing-and-qa" class="nav-link">
                                            Software Testing and QA
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Technolgies <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link" exact>
                                            Expert iPhone App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Expert Android App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Expert Windows Phone App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Hybrid App Development
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Cloud Computing Solutions
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Html5 Software & App Developers
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
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
                                        <NuxtLink to="/blog-two" class="nav-link" exact>
                                            Blogs
                                        </NuxtLink>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/single-blog" class="nav-link">Blog Details</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Insights
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Case Studies
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
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
                                        <a href="#" class="nav-link">
                                            About
                                            <i class='bx bx-chevron-down'></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/" class="nav-link">Company Profile
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/" class="nav-link">Our History
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/" class="nav-link">Why Antixx TechHUb Global
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
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">Careers</NuxtLink>
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
                            <NuxtLink to="/log-in" class="optional-btn">
                                <i class="bx bx-log-in"></i>Log In<span></span>
                            </NuxtLink>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
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