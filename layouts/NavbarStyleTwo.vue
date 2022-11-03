<template>
    <div :class="['navbar-area bg-white p-relative', {'is-sticky': isSticky}]">
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
                                        <NuxtLink to="/" class="nav-link" exact>
                                            Home One (IT Startup)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-two" class="nav-link">
                                            Home Two (IT Startup)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-three" class="nav-link">
                                            Home Three (IT Startup)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-four" class="nav-link">
                                            Home Four (SaaS Startup)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-five" class="nav-link">
                                            Home Five (Chatbot)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-six" class="nav-link">
                                            Home Six (Chatbot)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-seven" class="nav-link">
                                            Home Seven (Chatbot)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-eight" class="nav-link">
                                            Home Eight (Digital Marketing)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-nine" class="nav-link">
                                            Home Nine (SEO Marketing)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-ten" class="nav-link">
                                            Home Ten (IT Solution)
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-eleven" class="nav-link">
                                            Home Eleven (Marketing Experts)
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/about" class="nav-link">Technolgies</NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/about" class="nav-link">Products</NuxtLink>
                            </li>

                            <!-- <li class="nav-item">
                                <NuxtLink to="/about" class="nav-link">How it Works</NuxtLink>
                            </li> -->

                            <li class="nav-item">
                                <a href="#" class="nav-link">Explore & Learn <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-one" class="nav-link">Blog Grid</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-two" class="nav-link">Blog Right Sidebar</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/single-blog" class="nav-link">Blog Details</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <!-- <li class="nav-item">
                                <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
                            </li> -->

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Company <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Services
                                            <i class='bx bx-chevron-down'></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/services-one" class="nav-link">Services Style One
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/services-two" class="nav-link">Services Style Two
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/services-three" class="nav-link">Services Style Three
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/single-service" class="nav-link">Service Details
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Features <i class='bx bx-chevron-down'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/features-one" class="nav-link">Features Style One
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/features-two" class="nav-link">Features Style Two
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/log-in" class="nav-link">Log In</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/sign-up" class="nav-link">Sign Up</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
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
    data(){
        return {
            isSticky: false,
        }
    },

    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>