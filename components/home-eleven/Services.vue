<template>
    <div class="is-services-area ptb-100">
        <div class="container-fluid">
            <div class="section-title-with-large-box">
                <span>Introduce our services</span>
                <h2>Why your Businesses need Our Best services</h2>
            </div>

            <div class="is-services-slides">
                <carousel
                    :autoplay = 'true'
                    :autoplayTimeout = '5000'
                    :loop = 'true'
                    :paginationEnabled = 'true'
                    :perPageCustom = "[[0, 1], [768, 2], [992, 3], [1200, 4]]"
                >
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Web Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services1.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">App Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services2.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Blockchain Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services3.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Branding and Marketing</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services4.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Web Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services1.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">App Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services2.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Blockchain Development</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services3.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/single-service">Branding and Marketing</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/single-service">
                                    <img src="~/assets/img/marketing-experts/services/services4.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/single-service" class="default-btn">Learn More <span></span></NuxtLink>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="me-services-shape1">
            <img src="~/~/assets/img/marketing-experts/services/services-shape1.png" alt="image">
        </div>
        <div class="me-services-shape2">
            <img src="~/~/assets/img/marketing-experts/services/services-shape2.png" alt="image">
        </div>
        <div class="me-services-shape3">
            <img src="~/~/assets/img/marketing-experts/services/services-shape3.png" alt="image">
        </div>
    </div>
</template>

<script>

export default{
    name: 'Services',
}
</script>