<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="me-banner-area">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="me-banner-content">
                            <span>Welcome To Striki</span>
                            <h1>
                                We are Creative Marketing Experts
                            </h1>
                            <p>
                                Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <ul class="banner-btn">
                                <li>
                                    <NuxtLink to="/contact" class="default-btn">
                                        <i class="bx bxs-hot"></i>Get Started<span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <div 
                                        class="video-btn "
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        style="cursor: pointer"
                                    >
                                        <i class="bx bxs-right-arrow"></i>
                                        Watch Video
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="me-banner-image">
                            <img src="~/assets/img/marketing-experts/banner/main.png" alt="image">

                            <div class="circle-shape">
                                <img src="~/assets/img/marketing-experts/banner/circle.png" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="me-banner-shape">
                <img src="~/assets/img/marketing-experts/banner/shape.png" alt="image">
            </div>

            <div class="me-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'MainBanner',
    components: {
        CoolLightBox
    },
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