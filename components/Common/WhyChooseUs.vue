<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        
        <div class="video-presentation-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Why choose us to watch this video know more</h2>
                </div>

                <div class="video-box">
                    <img src="~/assets/img/video-bg.jpg" class="main-image" alt="image">

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

                <Funfacts />

                <div class="contact-cta-box mwidth-1000">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us.</p>
                    <NuxtLink to="/contact" class="default-btn">
                        <i class="bx bxs-edit-alt"></i>
                        Contact Us
                        <span></span>
                    </NuxtLink>
                </div>
            </div>

            <div class="shape-map1"><img src="~/assets/img/map1.png" alt="image"></div>
            <div class="shape7"><img src="~/assets/img/shape/7.png" alt="image"></div>
            <div class="shape8"><img src="~/assets/img/shape/8.png" alt="image"></div>
            <div class="shape9"><img src="~/assets/img/shape/9.png" alt="image"></div>
        </div>
    </div>
</template>

<script>
import Funfacts from '../Index/Funfacts'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'WhyChooseUs',
    components: {
        Funfacts,
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