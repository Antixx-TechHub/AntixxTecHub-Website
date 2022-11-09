<template>
    <div class="testimonials-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Whats Our Clients Said About <span>Striki</span></h2>
            </div>

            <div class="testimonials-slides">
                <carousel
                    :autoplay = true
                    :loop = true
                    :paginationEnabled = true
                    :perPageCustom = "[[0, 1], [768, 1], [1024, 2], [1200,2]]"
                >
                    <slide>
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="~/assets/img/author-image/6.jpg" alt="image">
                                <h3>Michel John</h3>
                                <span>CEO at Envato</span>
                            </div>

                            <div class="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="~/assets/img/author-image/7.jpg" alt="image">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at HiboTheme</span>
                            </div>

                            <div class="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="~/assets/img/author-image/8.jpg" alt="image">
                                <h3>James Andy</h3>
                                <span>CEO at 3S</span>
                            </div>

                            <div class="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="~/assets/img/author-image/8.jpg" alt="image">
                                <h3>James Andy</h3>
                                <span>CEO at 3S</span>
                            </div>

                            <div class="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="~/assets/img/author-image/7.jpg" alt="image">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at HiboTheme</span>
                            </div>

                            <div class="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
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
    name: 'WhatsOurClients'
}
</script>