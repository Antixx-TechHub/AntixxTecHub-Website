<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="banner-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="banner-content">
                            <div class="content">
                                <div class="banner-content-slides">
                                    <carousel
                                        :autoplay="true"
                                        :loop="true"
                                        :paginationEnabled="false"
                                        :perPageCustom="[[0, 1]]"
                                        :perPage="1"
                                        :navigationEnabled="true"
                                        navigationNextLabel="<i class='bx bx-right-arrow-alt'></i>"
                                        navigationPrevLabel="<i class='bx bx-left-arrow-alt'></i>"
                                    >
                                        <slide>
                                            <div class="inner-content plr-15">
                                                <h1>Web And Mobile App Development</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

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
                        <div class="banner-img banner-video">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="video-box">
                                        <div 
                                            class="video-btn popup-youtube"
                                            v-for="(image, imageIndex) in items"
                                            :key="imageIndex"
                                            @click="index = imageIndex"
                                            style="cursor: pointer"
                                        >
                                            <i class="bx bx-play"></i>
                                        </div>
                    
                                        <div class="shape1"><img src="~/assets/img/shape/1.png" alt="image"></div>
                                        <div class="shape2"><img src="~/assets/img/shape/2.png" alt="image"></div>
                                        <div class="shape3"><img src="~/assets/img/shape/3.png" alt="image"></div>
                                        <div class="shape4"><img src="~/assets/img/shape/4.png" alt="image"></div>
                                        <div class="shape5"><img src="~/assets/img/shape/5.png" alt="image"></div>
                                        <div class="shape6"><img src="~/assets/img/shape/6.png" alt="image"></div>
                                    </div>
                                </div>
                            </div>
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
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'MainBanner',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [
                {
                    src: 'https://www.youtube.com/watch?v=0gv7OC9L2s8',
                }
            ],
            index: null
        };
    },
}
</script>