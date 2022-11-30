<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Digital Marketing Practices, Packages, & Services <span>Antixx
                                TechHub</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q1. Is social media presence a Google ranking factor?
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
                                        Q2. Do you have arrangements to design Google ads?
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
                                        Q3. Will I need to buy SEO and digital marketing packages separately?
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
                                        Q4. What is the difference between digital advertising and digital marketing?
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
                                        Q5. What are the major cost factors for digital marketing?
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

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-6 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q6. How much time does it take the digital marketing results to appear?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q6 }}
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
            Q1: `No. Social media presence doesn’t directly influence the ranking in search results but the links shared across social media platforms increase brand’s exposure to improve the SEO results considerably in four ways- 
•	Increased authority & brand recognition 
•	Increased organic traffic to business website   
•	Wider content distribution  
•	Longer lifespan of shared content`,
            Q2: `Years’ experience, we have dedicated departments for graphics designing, log designing, copywriting, visuals creation, etc. When you hire Antixx TechHub for digital marketing, our digital marketing experts post the results delivering keywords optimized ads to maximize ROI of Google AdWords and other paid digital marketing strategies.`,
            Q3: `It depends upon you. Digital marketing automatically addresses all your needs for on-page SEO, off-page SEO, technical SEO, and local SEO. If you want to improve just the organic ranking in search results by increased traffic, you can ask us for an SEO package; if you want an instant boost to business performance, you should ask us for a digital marketing package.`,
            Q4: `Digital advertising is a practice of placing advertisements for particular products on online platforms; the advertisements and banners may be paid or free. While digital marketing is a comprehensive set of practices commenced to strengthen brand awareness, to share the latest information, to keep the target audience engaged with regular interaction, and to monitor online reputation. Interaction with the target audience makes the huge difference between the ultimate gains of both.`,
            Q5: `Paid advertising and content sharing activities are the crucial cost factors for digital marketing. Our digital marketing experts customize a digital marketing package according to the budget without letting the gains be affected much because of the absence of paid activities like Google Ads, PPC, paid press release submission, etc.`,
            Q6: `The period to experience the digital marketing results depends upon several factors like the existing online presence of your business, business nature, budget, and competition level.`,
        }
    }
}
</script>