<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Branding Consulting and Services Company <span>Antixx TechHub</span></h2>

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
                                        Q1. What is the difference between hiring a digital marketing company and hiring a branding company?
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
                                            {{ Q1 }}
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
                                        Q2. What are the key elements of a brand’s logo design?             
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
                                            {{ Q2 }}
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
                                        <i class="bx bx-plus"></i>
                                        Q3. Is it good for a small business to hire a branding consulting services provider?   
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
                                            {{ Q3 }}
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
                                        Q4. How do you charge for a branding campaign? 
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
                                            {{ Q4 }}
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
                                        Q5. What is brand management? 
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
            Q1: `The working scope of a digital marketing company is primarily focused on leads and revenue generation by improving business visibility at digital platforms and in search results. The working scope of a branding company is primarily focused to build and strengthen a brand’s repute through digital and non-digital ways that could foster trust and loyalty of all the stakeholders for the brand.`,
            Q2: `Simplicity, relevance, uniqueness, versatility, and memorable impression are the key elements of a brand’s logo design. The key logo designing elements include tagline, color, shape, size, texture, tone of voice, etc.`,
            Q3: `Yes. The impressive identity and convincing visibility are the top challenges for small businesses because of having a small community of users and stakeholders. Digital marketing practices like SEO, SMM, ORM, CRM, blogging etc often take time to deliver results in terms of leads and revenue. The involvement of a branding consulting services provider agency gives a push to your marketing activities by increasing social recognition and acceptance of the brand.`,
            Q4: `A branding campaign implements a number of practices. We optimize the scope and numbers of branding practices according to the permissible budget. The cost factors for a branding campaign include- brand perception level, current versus desired market position, competitive threat intensity, media market cost, size of markets served, etc.`,
            Q5: `Brand management is a set of practices implemented to increase improve the perceived value of products or services. Brand management addresses all the needs to ensure the alignment of aesthetic and intangible aspects of a brand.`,
        }
    }
}
</script>