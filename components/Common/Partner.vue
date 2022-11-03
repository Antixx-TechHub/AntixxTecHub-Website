<template>
    <div class="partner-area pt-100 pb-70 bg-f8fbfa">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-12">
                    <div class="partner-title">
                        <h3>Featured by:</h3>
                    </div>
                </div>

                <div class="col-lg-9 col-md-12">
                    <div class="partner-slides">
                        <carousel
                            :autoplay = "true"
                            :loop = "true"
                            :paginationEnabled = "false"
                            :perPageCustom = "[[0, 2], [576, 3], [768, 3], [1200, 4]]"
                        >
                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/1.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/2.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/3.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/4.png" alt="image">
                                    </a>
                                </div>
                            </slide>
                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/1.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/2.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/3.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/4.png" alt="image">
                                    </a>
                                </div>
                            </slide>
                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/1.png" alt="image">
                                    </a>
                                </div>
                            </slide>

                            <slide>
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img src="~/assets/img/partner-image/2.png" alt="image">
                                    </a>
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
    name: 'Partner'
}
</script>