<template>
    <div class="sm-features-area pb-70">
        <div class="container">
            <div class="blog-slides">
                <carousel :autoplay="true" :autoplayTimeout='5000' :loop="true" :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 1], [768, 2], [1200, 4]]" :perPage="1"
                    :navigationEnabled="false" navigationNextLabel="<i class='bx bx-chevron-right'></i>"
                    navigationPrevLabel="<i class='bx bx-chevron-left'></i>">
                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">Web Design & Development </NuxtLink>
                                </h3>
                                <p>Hire website developers to develop stunning website development with optimized features and functionalities that make your website SEO friendly..</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">App Development</NuxtLink>
                                </h3>
                                <p>Hire Android and iOS app developers for app designing, submission, upgrade, and manage with advanced security and scalability..</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">SEO Services</NuxtLink>
                                </h3>
                                <p>Hire SEO experts to improve website ranking (visibility) in organic and paid search results at least price with on-page, off-page and local SEO practices.</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">Digital Marketing</NuxtLink>
                                </h3>
                                <p>Hire digital marketers to sell more with profitability and consistently through professionally planned SMO, SMM, Google Adwords, PPC, CMS..</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">UX / UI Design</NuxtLink>
                                </h3>
                                <p>Hire UX / UI designers with years of experience in creating unique, convincing, and compelling experiences to users using different devices..</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">Branding and Marketing </NuxtLink>
                                </h3>
                                <p>Hire digital marketing experts to strengthening build and brand repute, generate more leads, improve conversion rate..</p>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class=".single-home-services-item">
                            <div class="sm-features-card">
                                <img src="~/assets/img/seo-marketing/features/analysis.png" alt="image">
                                <h3>
                                    <NuxtLink to="/">Blockchain Development</NuxtLink>
                                </h3>
                                <p>Hire SEO experts to improve website ranking (visibility) in organic and paid search results at least price with on-page, off-page and local SEO practices.</p>
                            </div>
                        </div>
                    </slide>

                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>