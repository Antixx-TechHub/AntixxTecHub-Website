<template>
    <div class="feedback-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Whats Our Clients Said About <span>Striki</span></h2>
            </div>

            <div class="feedback-slides">
                <carousel
                    :autoplay = true
                    :loop = true
                    :paginationEnabled = true
                    :perPageCustom = "[[0, 1], [768, 1], [1024, 2], [1200,2]]"
                >
                    <slide>
                        <div class="single-feedback-item">
                            <img src="~/assets/img/woman1.png" alt="image">

                            <div class="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>

                                <div class="client-info">
                                    <h3>Sarah Taylor</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-feedback-item">
                            <img src="~/assets/img/woman2.png" alt="image">

                            <div class="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>

                                <div class="client-info">
                                    <h3>Olivar Lucy</h3>
                                    <span>CEO at HiboTheme</span>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-feedback-item">
                            <img src="~/assets/img/man1.png" alt="image">

                            <div class="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div class="rating">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </div>

                                <div class="client-info">
                                    <h3>Steven Smith</h3>
                                    <span>CEO at Envato</span>
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