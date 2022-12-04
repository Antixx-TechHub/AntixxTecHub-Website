<template>
    <div class="is-testimonials-area ptb-100">
        <div class="container">
            <div class="section-title-with-large-box">
                <span>Testimonials</span>
                <h2>Our Customer Valuable Feedback</h2>
            </div>

            <div class="is-testimonials-slides">
                <carousel
                    :autoplay = 'true'
                    :autoplayTimeout = '5000'
                    :loop = 'true'
                    :paginationEnabled = 'false'
                    :perPageCustom = "[[0, 1], [768, 2], [992, 3], [1200, 3]]"
                >
                    <slide>
                        <div class="is-testimonials-card">
                            <p>“My experience of hiring PB Vision for business website design and development has been excellent as they accomplished the web development and hosting jobs earlier than my expectations. Team members were professional and competent throughout the process.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/1.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>George Stewart</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-testimonials-card">
                            <p>“I appreciate everyone at PB Vision associated with the team that developed a business automation solution for data and applications workflow orchestration to improve planning, collaboration, efficiencies, productivity, delivery, etc. Now the required information is accessible over mobile apps.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/2.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>Jose Covert</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-testimonials-card">
                            <p>“It is a pleasure for me the recommend PB Vision for technical SEO. I hired the agency for traffic and rank promotion as well as for social media marketing. The tailored SEO plan was designed with maximum activities. The SEO gains appeared within three months. Thanks to the SEO team for promoting my business!”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/3.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>Karen Wilson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <!-- <slide>
                        <div class="is-testimonials-card">
                            <p>“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/1.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>George Stewart</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="is-testimonials-card">
                            <p>“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/2.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>Jose Covert</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="is-testimonials-card">
                            <p>“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/3.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>Karen Wilson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </slide> -->

                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials'
}
</script>