<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="company-preview-area">
            <div class="container">
                <div class="company-preview-video">
                    <div 
                        class="video-btn popup-youtube"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        style="cursor: pointer"
                    >
                        <i class="bx bx-play"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'Video',
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