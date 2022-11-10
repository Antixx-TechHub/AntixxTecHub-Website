<template>
    <div class="case-studies-area pt-100 pb-70">
        <div class="container">
            <div class="section-title text-left">
                <span class="sub-title">Case Studies</span>
                <h2>Check of our some recent works & case studies</h2>
            </div>
        </div>

        <div class="container-fluid">
            <div class="case-studies-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [992, 3], [1200, 4]]"
                    :perPage="1"
                    :navigationEnabled="true"
                    navigationNextLabel="<i class='bx bx-chevron-right'></i>"
                    navigationPrevLabel="<i class='bx bx-chevron-left'></i>"
                >
                    <slide>
                        <div class="single-case-studies-item">
                            <a href="#" class="image d-block">
                                <img src="~/assets/img/case-studies/case-studies-img1.jpg" alt="image">
                            </a>

                            <div class="content">
                                <h3><a href="#">Customer Satisfaction for a Digital Marketing Agency</a></h3>
                                <a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-case-studies-item">
                            <a href="#" class="image d-block">
                                <img src="~/assets/img/case-studies/case-studies-img2.jpg" alt="image">
                            </a>

                            <div class="content">
                                <h3><a href="#">Return on Investment for Various Digital Marketing</a></h3>
                                <a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-case-studies-item">
                            <a href="#" class="image d-block">
                                <img src="~/assets/img/case-studies/case-studies-img3.jpg" alt="image">
                            </a>

                            <div class="content">
                                <h3><a href="#">Google Search Engine Marketing Case Study</a></h3>
                                <a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-case-studies-item">
                            <a href="#" class="image d-block">
                                <img src="~/assets/img/case-studies/case-studies-img4.jpg" alt="image">
                            </a>

                            <div class="content">
                                <h3><a href="#">Analysis of New Product Launch Using Google</a></h3>
                                <a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-case-studies-item">
                            <a href="#" class="image d-block">
                                <img src="~/assets/img/case-studies/case-studies-img5.jpg" alt="image">
                            </a>

                            <div class="content">
                                <h3><a href="#">Social Media Strategies for Online Shopping Cart</a></h3>
                                <a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a>
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
    name: 'CaseStudies'
}
</script>