<template>

    <div class="main-banner main-banner-two">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="banner-content">
                        <div class="content">
                            <div class="banner-content-slides">
                                <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                                    :perPageCustom="[[0, 1]]" :perPage="1" :navigationEnabled="true"
                                    navigationNextLabel="<i class='bx bx-right-arrow-alt'></i>"
                                    navigationPrevLabel="<i class='bx bx-left-arrow-alt'></i>">
                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Web And Mobile App Development</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <NuxtLink to="/contact" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Contact Us
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Solve Business Challenges With IT</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <NuxtLink to="/contact" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Contact Us
                                                <span></span>
                                            </NuxtLink>
                                        </div>
                                    </slide>

                                    <slide>
                                        <div class="inner-content plr-15">
                                            <h1>Solve Business Challenges With IT</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <NuxtLink to="/contact" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Contact Us
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
                        <carousel :autoplay="true" :loop="true" :paginationEnabled="true" :perPageCustom="[[0, 1]]">
                            <slide>
                                <div class="banner-image banner-slider-bg1"></div>
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
}
</script>