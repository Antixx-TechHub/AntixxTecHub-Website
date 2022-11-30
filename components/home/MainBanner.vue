<template>

    <div class="main-banner main-banner-two">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="banner-content">
                        <div class="content">
                            <div class="banner-content-slides">
                                <carousel :autoplay="true" :autoplayTimeout='7000' :loop="true"
                                    :paginationEnabled="false" :perPageCustom="[[0, 1]]" :perPage="1"
                                    :navigationEnabled="true"
                                    navigationNextLabel="<i class='bx bx-right-arrow-alt'></i>"
                                    navigationPrevLabel="<i class='bx bx-left-arrow-alt'></i>">
                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Web Designing Service</h1>
                                            <p>We provide competitively priced web design and development services and
                                                support to keep your business in limelight in digital marketplace with
                                                user-friendly & search-engine friendly competitive edge.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>IT Management Services</h1>
                                            <p>24x7 Managed IT Services from the best Managed IT service provider.
                                                Antixx TechHub, IT Management Services specialist agency, helps you
                                                expedite business growth.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Machine Learning as a Service</h1>
                                            <p>As a prominent machine learning (ML) services provider company, with
                                                specialization in Amazon, Google, Microsoft and others, we offer
                                                data-enriched tailor-made and secured machine learning solutions.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Data Service Management</h1>
                                            <p>We have proven expertise in developing tailored-to-need data service
                                                management and data analytic solutions and providing consultancy for
                                                Power BI, Qlik Sense, QlikView, Tableau, SAP Analytics.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Cloud Business Solutions</h1>
                                            <p>For being a top Cloud migration and cloud computing service provider, we
                                                offer the robust Cloud security integration, business solutions and
                                                consultancy services for big data analysis & management through
                                                Salesforce, AWS, ServiceNow, etc.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Cloud Support Services</h1>
                                            <p>As a leading cloud managed service provider, we accelerate your business
                                                growth by providing customized cloud support services for smooth
                                                migration of business workload to cloud.</p>

                                            <NuxtLink to="/" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Know More
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                </carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="banner-image-slider">
                        <carousel :autoplay="true" :autoplayTimeout='7000' :loop="true" :paginationEnabled="true"
                            :perPageCustom="[[0, 1]]">
                            <slide>
                                <div>
                                    <img src="~/assets/img/banner-slider/banner-img1.gif"
                                        style="width:600px; height:100% margin-top:20%" alt="img">
                                </div>
                                <!-- <div id="MainBanner">
        <lottie-vue-player :src="`~/assets/img/json/web-developers.json`"
                           :theme="options.theme"
                           :player-size="options.playerSize"
                           :player-controls="true"
                           style="width: 100%; height:400px">
        </lottie-vue-player>
    </div> -->
                            </slide>
                            <slide>
                                <div class="banner-image banner-slider-bg2"></div>
                            </slide>
                            <slide>
                                <div class="banner-image banner-slider-bg3"></div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape19"><img src="~/assets/img/shape/18.png" alt="image"></div>
        <div class="shape22"><img src="~/assets/img/shape/21.png" alt="image"></div>
        <div class="shape23"><img src="~/assets/img/shape/22.svg" alt="image"></div>
        <div class="shape24"><img src="~/assets/img/shape/23.png" alt="image"></div>
        <div class="shape25"><img src="~/assets/img/shape/24.png" alt="image"></div>
        <div class="shape26"><img src="~/assets/img/shape/25.png" alt="image"></div>
        <div class="shape20"><img src="~/assets/img/shape/19.png" alt="image"></div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'MainBanner',
    data() {
        return {
            options: {
                minimizable: false,
                playerSize: "standard",
                backgroundColor: '#fff',
                backgroundStyle: 'color',
                theme: {
                    controlsView: "standard",
                    active: "light",
                    light: {
                        color: '#3D4852',
                        backgroundColor: '#fff',
                        opacity: '0.7',
                    },
                    dark: {
                        color: '#fff',
                        backgroundColor: '#202020',
                        opacity: '0.7',
                    }
                }
            }
        }
    }
}
</script>