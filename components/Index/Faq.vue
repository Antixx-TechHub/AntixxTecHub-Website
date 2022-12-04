<template>
    <div class="sm-faq-area pb-100">
        <div class="container pt-100">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-12">
                    <div class="sm-faq-image">
                        <img src="~/assets/img/seo-marketing/faq.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="sm-faq-accordion">
                        <h2>Get to know about Striki</h2>

                        <div class="accordion" role="tablist">
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-1 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        Keyword & Market Research
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-1" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-2 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        Why is SEO Link Building Important?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-2" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-3 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>Why is SEO Link Building Important?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-3" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-4 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        How can I cancel my subscription?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-4" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-5 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        Social Media Promotion
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-5" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm-faq-shape">
            <img src="~/assets/img/seo-marketing/faq-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {
            text: `Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.`
        }
    }
}
</script>