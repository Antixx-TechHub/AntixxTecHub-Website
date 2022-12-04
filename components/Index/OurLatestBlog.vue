<template>
    <div class="blog-area pt-100 pb-70 bg-f4e9da">
        <div class="container">
            <div class="section-title text-left">
                <span class="sub-title">Our News</span>
                <h2>Check Out Our Latest Blog</h2>
            </div>

            <div class="blog-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 1], [576, 1], [768, 2], [1200, 3]]"
                    :perPage="1"
                    :navigationEnabled="true"
                    navigationNextLabel="<i class='bx bx-chevron-right'></i>"
                    navigationPrevLabel="<i class='bx bx-chevron-left'></i>"
                >
                    <slide>
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <a href="#" class="d-block">
                                    <img src="~/assets/img/blog-image/10.jpg" alt="image">
                                </a>
                            </div>

                            <div class="post-content">
                                <a href="#" class="category">Education</a>
                                <h3><a href="#">University Admissions Could Face Emergency Controls</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src="~/assets/img/author-image/9.jpg" class="rounded-circle" alt="image">
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class='bx bx-calendar'></i> April 30, 2022
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <a href="#" class="d-block">
                                    <img src="~/assets/img/blog-image/11.jpg" alt="image">
                                </a>
                            </div>

                            <div class="post-content">
                                <a href="#" class="category">SEO</a>
                                <h3><a href="#">Online Learning Can Prepare Students For A Fast-Changing</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src="~/assets/img/author-image/8.jpg" class="rounded-circle" alt="image">
                                            <span>James Smith</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class='bx bx-calendar'></i> April 29, 2022
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <a href="#" class="d-block">
                                    <img src="~/assets/img/blog-image/12.jpg" alt="image">
                                </a>
                            </div>

                            <div class="post-content">
                                <a href="#" class="category">Business</a>
                                <h3><a href="#">As Learning Moves Online, Trigger Warnings Must Too Much</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src="~/assets/img/author-image/7.jpg" class="rounded-circle" alt="image">
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class='bx bx-calendar'></i> April 28, 2022
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <a href="#" class="d-block">
                                    <img src="~/assets/img/blog-image/13.jpg" alt="image">
                                </a>
                            </div>

                            <div class="post-content">
                                <a href="#" class="category">Business</a>
                                <h3><a href="#">How To Secure Remote Workers During The COVID-19 Outbreak</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src="~/assets/img/author-image/6.jpg" class="rounded-circle" alt="image">
                                            <span>Andro Lucy</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class='bx bx-calendar'></i> April 27, 2022
                                    </li>
                                </ul>
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
    name: 'OurLatestBlog'
}
</script>