<template>
    <div class="is-banner-slides">
        <carousel
            :autoplay = "true"
            :autoplayTimeout = '5000'
            :loop = "true"
            :paginationEnabled = "false"
            :perPage="1"
            :navigationEnabled="true"
            navigationNextLabel="<i class='bx bx-right-arrow-alt'></i>"
            navigationPrevLabel="<i class='bx bx-left-arrow-alt'></i>"
        >
            <slide>  
                <div class="is-banner-item">
                    <div class="container">
                        <div class="is-banner-content">
                            <span>Welcome To Striki</span>
                            <h1>
                                Get IT Solution for your Business
                            </h1>
                            <p>
                                Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <div class="banner-btn">
                                <NuxtLink to="/contact" class="default-btn">
                                    <i class="bx bxs-hot"></i>Get Started<span></span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>  
            <slide>  
                <div class="is-banner-item">
                    <div class="container">
                        <div class="is-banner-content">
                            <span>Welcome To Striki</span>
                            <h1>
                                We Are Best SEO Service Provider
                            </h1>
                            <p>
                                Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <div class="banner-btn">
                                <NuxtLink to="/contact" class="default-btn">
                                    <i class="bx bxs-hot"></i>Get Started<span></span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>