<template>
    <div class="feedback-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="section-title text-left">
                        <span class="sub-title">Testimonials</span>
                        <h2>Our Customer Valuable Feedback</h2>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="testimonials-slides-two">
                        <carousel
                            :autoplay = true
                            :loop = true
                            :paginationEnabled = true
                            :perPageCustom = "[[0, 1]]"
                        >
                            <slide>
                                <div class="single-testimonials-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/img/user1.jpg" alt="image">
                                            <div class="title">
                                                <h3>John Smith</h3>
                                                <span>Python Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-testimonials-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/img/user2.jpg" alt="image">
                                            <div class="title">
                                                <h3>Sarah Taylor</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-testimonials-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/img/user3.jpg" alt="image">
                                            <div class="title">
                                                <h3>James Anderson</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials'
}
</script>