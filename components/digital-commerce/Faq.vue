<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Graphics Designing Services, Company, and Support <span>Antixx TechHub</span></h2>

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
                                        Q1. What is about the copyright of the outsourced graphic design?
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
                                        Q2. What kind of graphic design support services do you offer after delivering graphics designs? 
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
                                        Q3. How do you deliver graphics designs? 
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
                                        Q4. Is it really worth for a small business to hire graphics experts?
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
                                        Q5. What makes a graphics design good for a business? 
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
                                        Q6. How much do you charge for graphic design services? What is the cost of graphic design packages?
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
            Q1: `We deliver the graphics designs with copyright also with a guarantee of being original (not copied).`,
            Q2: `We at Antixx TechHub are committed for long-term relationships; therefore, we try our best to address all the issues post-delivery of graphics designs. We support you to download files of created graphics designs and to interact with your printer. We store safe the copies of your graphics designs; so, you can ask us to share the files in future also.`,
            Q3: `We offer you many options to receive the created graphic designs. You can ask our graphics designing experts to deliver created graphics designs though mail, drive, or drop box.`,
            Q4: `Hiring a graphics experts from Antixx TechHub, the leading graphics designing company, is very affordable because we provide graphics designing services at the lowest prices. We have special graphic designing plans for start-up businesses and small businesses with optional support for branding. Involvement of experienced graphics experts gives a competitive edge to your marketing and advertising campaign because of additional visual appeal for enhanced engagement and encouragement.`,
            Q5: `Visual appeal, clear and concise messaging, orientation to objectives, and uniqueness make a graphics design good for a business.`,
            Q6: `As a prominent graphics company with competitive abilities to provide comprehensive business support solutions, Antixx TechHub  offers the competitive pricing for its services. The transparency in graphic design packages does not leave any scope for hidden charges. The key costing factors for graphics design services are – type, size, the complexity involved, research required, agreed completion period, the volume of graphics required, etc.`,
        }
    }
}
</script>