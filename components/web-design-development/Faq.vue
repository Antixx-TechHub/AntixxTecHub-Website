<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Website Design & Development Services <span>Antixx TechHub</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q1. How much time do you take to create, deliver and deploy a business website?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q1 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q2. Which is the best platform for eCommerce website development with CMS?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q2 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q3. What are the top website design parameters that contribute to the
                                        performance of a business website?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q3 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-4 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q4. What is inclusive in your website design package?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q4 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-5 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q5. Do you offer website hosting services also?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q5 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="faq-image">
                        <img src="~/assets/img/faq-img1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {
            Q1: `The completion period for any website development depends upon several aspects like technology, size, required features and functionalities, availability of on-page material, client’s support, etc. However, a small business website of 5-6 pages can be delivered within 7-10 days provided all the required information and content is made available on time.`,
            Q2: `Every eCommerce development platform has different features; therefore, optimization is a must according to the business type and operational plans. However, we have expertise in developing performance-oriented over all the popular eCommerce development platforms like BigCommerce, WooCommerce, Magento, Shopify, Volusion, etc.`,
            Q3: `As a user-friendly website design company, we at Antixx TechHub recommend not to incorporate all the website design elements that you see at big brand websites. Our web designers optimize the list of required web design parameters that are must to compete, succeed, survive, and grow. The must-have design parameters for 2023-year are - handmade graphics, visible borders, bold & experimental typography, scrolling text elements, interactive typefaces, imagery etc.`,
            Q4: `We offer tailor-made website development packages to suit particular requirements and expectations. The scope of website design package varies as per the category of web design like for small website, eCommerce website, corporate website, etc. The standard website design package includes- visual design elements, UI designing, web page designing, logo optimization, image optimization, CSS-based layouts, etc.`,
            Q5: `Yes, we offer dependable website hosting services in different models to suit your budget. Contact our professionals to get the details for shared hosting, dedicated server hosting, Cloud hosting, virtual private server (VPS) hosting, etc.`,
        }
    }
}
</script>