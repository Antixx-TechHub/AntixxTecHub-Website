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
                            <p>“I thank everyone at Antixx TechHub associated with my app development and deployment. The overall experience was satisfactory.”</p>
                                
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
                            <p>“The speedy development and deployment of my website by Antixx TechHub helped me to grab the sales opportunity in festive season. The dedicated web developers are knowledgeable and client-friendly.”</p>
                                
                            <div class="client-info d-flex align-items-center">
                                <img src="~/assets/img/author-image/3.jpg" alt="image">
                                
                                <div class="title">
                                    <h3>Karen Wilson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="is-testimonials-card">
                            <p>“It was the 2nd time I hired Antixx TechHub for digital marketing; the outcome of SEO and SMM initiated after website audit is as good as it has been previous time. I appreciate SEO team leader Mr. Sushant for customizing SEO package well under my budget.”</p>
                                
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
                    </slide>

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