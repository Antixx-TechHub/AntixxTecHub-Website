<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Search Engine Optimization (SEO) Services, Scope, Benefits, Packages, Cost, etc.
                            <span>Antixx TechHub</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q1. What is Google Penalty as you referred above?
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
                                        Q2. How long will it take to rank better on Google?
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
                                        Q3. Should I hire Antixx TechHub for SEO or PPC marketing?
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
                                        Q4. What is the cost of SEO?
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
            Q1: `Google applies penalties to websites that are found violating its webmaster guidelines. There are two types of Google penalties- Algorithmic penalties; Manual action penalties.`,
            Q2: `Some SEO companies commit a very short period for improving the website rank; while it is just a business gimmick to rope in new clients. As an experienced SEO services provider, we can say that the quality of your website and our SEO practices should deserve a ranking promotion. Ranking improvement depends upon several factors like keyword-specific competition; domain age; content quality; backlinks quality; numbers and age; scope of SEO practices; etc.`,
            Q3: `SEO and PPC are the integral elements of digital marketing strategy. PPC gives more relevant and high potential traffic doesn’t improve website rank as much as SEO does. If you want an instant boost to traffic or leads, you should ask us for PPC campaign; if your concern is organic rank and traffic improvement, you should hire us for SEO campaign. In case, you need both, we can run both the campaigns in parallel.`,
            Q4: `The cost of SEO depends upon several factors like numbers of keywords to target, volume of paid or free SEO activities, numbers of web pages, website audit report inputs, scope of required SEO package etc. To address the cost issue, we offer personalized SEO plans for strategic phases.`,
        }
    }
}
</script>